"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  // We attach the scroll to the document to overlay sections at different scroll %
  const { scrollYProgress } = useScroll();

  // Section 1: 0% to 20% scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // Section 2: 20% to 45% scroll
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [100, 0, 0, -100]);

  // Section 3: 50% to 80% scroll
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.8], [100, 0, 0, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 text-white">
      {/* Container matches the height of the scrolly section so absolute positioning tracks it */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Section 1 */}
        <motion.div 
          className="absolute text-center flex flex-col items-center justify-center w-full px-6"
          style={{ opacity: opacity1, y: y1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Anish Sharma</h1>
          <p className="text-xl md:text-2xl font-light text-gray-300 uppercase tracking-widest text-center max-w-4xl">
            AI Data Annotation Specialist
            <span className="block mt-3 text-sm md:text-base text-gray-400 tracking-normal normal-case">
              Hindi-English Transcription & Content Evaluation Freelancer based in India
            </span>
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          className="absolute left-10 md:left-32 max-w-2xl px-6"
          style={{ opacity: opacity2, y: y2 }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-4 text-white">
            Improving AI <br/> <span className="text-gray-400 italic">through human data.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            I help AI companies and digital teams improve data quality with accurate transcription, content review, and response assessment.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          className="absolute right-10 md:right-32 max-w-2xl text-right px-6"
          style={{ opacity: opacity3, y: y3 }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-4 text-white">
            Detail-oriented <br/> <span className="text-gray-400 italic">quality control.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light ml-auto">
            Focusing on clear communication, accurate formatting, and high-quality human feedback for training.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
