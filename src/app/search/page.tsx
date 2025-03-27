// "use client";

// import React, { JSX } from "react";
// import Header from "@/components/layout/header";
// import Filters from "@/components/search/filters";
// import HotelList from "@/components/search/hotelList";

// export default function SearchPage(): JSX.Element {
//   return (
//     <main className="min-h-screen bg-[#F5F5F5]">
//       <Header />
//       <section className="container mx-auto mt-8 px-4">
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           {/* Sol filtre - sağ içerik */}
//           <div className="grid grid-cols-1 md:grid-cols-[270px_minmax(0,1fr)] gap-0">
//             {/* Filtreler */}
//             <div className="p-6 border-r border-gray-200">
//               <Filters />
//             </div>
//             {/* Otel Listesi */}
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

export default function SearchPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <section className="w-full mx-auto mt-8 px-4">
        <div className="max-w-[1400px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[270px_minmax(0,1fr)] gap-0">
            <div className="p-6 border-r border-gray-200">
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


