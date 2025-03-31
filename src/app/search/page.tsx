// "use client";

// import React, { JSX } from "react";
// import Header from "@/components/layout/header";
// import Filters from "@/components/search/filters";
// import HotelList from "@/components/search/hotelList";

// export default function SearchPage(): JSX.Element {
//   return (
//     <main className="min-h-screen bg-white">
//       <Header />
//       <section className="container mx-auto mt-8 px-4">
//         <div className="max-w-[1400px] mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-[270px_minmax(0,1fr)] gap-0">
//             <div className="p-6">
//               <Filters />
//             </div>
//             <div className="p-6">
//               <HotelList />
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



"use client";

import React, { JSX } from "react";
import Header from "@/components/layout/header";
import Filters from "@/components/search/filters";
import HotelList from "@/components/search/hotelList";
import { useLanguage } from "@/hooks/useLanguage";

export default function SearchPage(): JSX.Element {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="container mx-auto mt-8 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[270px_minmax(0,1fr)] gap-4">
            <div className="p-6">
              <Filters />
            </div>
            <div className="p-6">
              <HotelList />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}