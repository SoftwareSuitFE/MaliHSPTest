// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import { SearchProvider } from "../../context/searchContext";
// import { ConfigProvider } from "antd";

// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "TravelGo - Book Your Dream Vacation",
//   description: "Find and book your dream vacation with TravelGo",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <SearchProvider>
//           <ConfigProvider
//             theme={{
//               token: {
//                 colorPrimary: "#ED8936",
//               },
//             }}
//           >
//             {children}
//           </ConfigProvider>
//         </SearchProvider>
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import { Inter, Geist_Mono } from "next/font/google";
// import { SearchProvider } from "../../context/searchContext";
// import { ConfigProvider } from "antd";

// import "./globals.css";

// // Inter fontunu yükleyip CSS değişkeni oluşturuyoruz.
// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

// // Diğer fontu (Geist_Mono) değiştirmeden bırakıyoruz.
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "TravelGo - Book Your Dream Vacation",
//   description: "Find and book your dream vacation with TravelGo",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
//         <SearchProvider>
//           <ConfigProvider
//             theme={{
//               token: {
//                 colorPrimary: "#ED8936",
//               },
//             }}
//           >
//             {children}
//           </ConfigProvider>
//         </SearchProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { SearchProvider } from "../../context/searchContext";
import { ConfigProvider } from "antd";

import "./globals.css";

// Inter fontunu yükleyip CSS değişkeni oluşturuyoruz.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Diğer fontu (Geist_Mono) değiştirmeden bırakıyoruz.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TravelGo - Book Your Dream Vacation",
  description: "Find and book your dream vacation with TravelGo",
  icons: {
    icon: '/favicon/fav2.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
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
      </body>
    </html>
  );
}