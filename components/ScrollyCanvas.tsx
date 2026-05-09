"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map 0-1 progress to 0-(FRAME_COUNT - 1)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImagesArray: HTMLImageElement[] = new Array(FRAME_COUNT);
      const promises = [];

      for (let i = 0; i < FRAME_COUNT; i++) {
        promises.push(
          new Promise((resolve) => {
            const img = new Image();
            const paddedIndex = i.toString().padStart(3, "0");
            // Using the correct absolute path from the public directory
            img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.png`;

            img.onload = () => {
              loadedImagesArray[i] = img;
              resolve(true);
            };
            img.onerror = () => {
              console.error(`Failed to load image: ${img.src}`);
              // Resolve anyway so Promise.all completes even if a frame drops
              resolve(false);
            };
          })
        );
      }

      await Promise.all(promises);
      setImages(loadedImagesArray);
      setLoaded(true);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (!loaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const currentIndex = Math.floor(frameIndex.get());
      const img = images[currentIndex];

      if (img && canvas && ctx) {
        // Ensure canvas dimensions match window to act like object-fit: cover
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }
    };

    // Subscribing to scroll progress changes
    const unsubscribe = frameIndex.on("change", render);
    
    // Initial render
    render();
    
    // Render on window resize to fix canvas scaling
    window.addEventListener("resize", render);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", render);
    };
  }, [loaded, images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
            <p className="text-white text-sm tracking-widest uppercase">Loading Experience...</p>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}
