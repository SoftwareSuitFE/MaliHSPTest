


// "use client";

// import { Inter, Geist_Mono } from "next/font/google";
// import { SearchProvider } from "../../context/searchContext";
// import { ConfigProvider } from "antd";
// import { LanguageProvider } from "./LanguageContext";

// import "./globals.css";

// // Font yüklemeleri
// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html>
//       <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
//         <LanguageProvider>
//           <SearchProvider>
//             <ConfigProvider
//               theme={{
//                 token: {
//                   colorPrimary: "#ED8936",
//                 },
//               }}
//             >
//               {children}
//             </ConfigProvider>
//           </SearchProvider>
//         </LanguageProvider>
//       </body>
//     </html>
//   );
// }



"use client";

import { Inter, Geist_Mono } from "next/font/google";
import { SearchProvider } from "../../context/searchContext";
import { ConfigProvider } from "antd";
import { QueryProvider } from "./QueryProvider";

import "./globals.css";

// Font yüklemeleri
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <QueryProvider>
          <SearchProvider>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#ED8936",
                },
              }}
            >
              {children}
            </ConfigProvider>
          </SearchProvider>
        </QueryProvider>
      </body>
    </html>
  );
}