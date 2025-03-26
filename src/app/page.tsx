import Header from "@/components/layout/header";
import TravelTabs from "@/components/home/travelTabs";
import SearchForm from "@/components/home/searchForm";
import { CSSProperties } from "react";

export default function Home() {
  // 100% çalışacak bir çözüm - katmanlı yaklaşım
  const bgStyles: CSSProperties = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), 
       url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main>
      <Header />

      {/* Tamamıyla online kaynak kullanan arka plan */}
      <div className="relative h-[500px]" style={bgStyles}>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-4">
          <div className="w-full max-w-4xl">
            <div className="mb-6 mt-24">
              <TravelTabs />
            </div>

            <SearchForm />
          </div>
        </div>
      </div>
    </main>
  );
}
