import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import PortfolioContent from "@/components/PortfolioContent";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <PortfolioContent />
    </main>
  );
}
