// "use client";

// import React, { JSX } from "react";
// import Header from "@/components/layout/header";
// import Filters from "@/components/search/filters";
// import HotelList from "@/components/search/hotelList";

// export default function SearchPage(): JSX.Element {
//   return (
//     <main className="min-h-screen bg-white">
//       <Header />
//       {/* Container yapısını Header ile aynı şekilde oluşturduk */}
//       <section className="container mx-auto mt-8 px-4">
//         {/* max-width belirtmiyoruz, container ile sağlanıyor */}
//         <div className="grid grid-cols-1 lg:grid-cols-[270px_minmax(0,1fr)] gap-4">
//           <div className="p-0">
//             <Filters />
//           </div>
//           <div className="p-0">
//             <HotelList />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

'use client';

import React, { JSX } from 'react';
import Header from '@/components/layout/header';
import Filters from '@/components/search/filters';
import HotelList from '@/components/search/hotelList';
import { useLanguage } from '@/hooks/useLanguage';

export default function SearchPage(): JSX.Element {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Header ile tam olarak aynı genişlik (1120px) */}
      <section
        style={{
          width: '100%',
          marginTop: '32px', // mt-8
        }}
      >
        <div
          style={{
            maxWidth: '1120px', // Header ile aynı sabit genişlik
            margin: '0 auto', // Merkezleme
            paddingLeft: '16px',
            paddingRight: '16px',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[270px_minmax(0,1fr)] gap-4">
            <div className="p-0">
              <Filters />
            </div>
            <div className="p-0">
              <HotelList />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
