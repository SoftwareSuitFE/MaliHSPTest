// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Icon from "../../../public/icons/Icon";
// import { useLanguage } from "@/hooks/useLanguage";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showLanguageMenu, setShowLanguageMenu] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { locale, setLocale, t } = useLanguage();

//   // Ekran boyutu kontrolü (768 px altı mobil)
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // İlk değer atama
//     setIsMobile(window.innerWidth < 768);

//     // Resize event
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//       // Masaüstüne geçince mobil menüyü kapatalım
//       if (window.innerWidth >= 768) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Mobil menü aç/kapa
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Dil menüsü aç/kapa
//   const toggleLanguageMenu = () => {
//     setShowLanguageMenu(!showLanguageMenu);
//   };

//   // Dil değiştirme
//   const changeLanguage = (lang: string) => {
//     setLocale(lang);
//     setShowLanguageMenu(false);
//   };

//   // Favorilere ekle
//   const handleAddFavorite = () => {
//     const url = window.location.href;
//     const title = document.title;
//     try {
//       if (window.external && "AddFavorite" in window.external) {
//         window.external.AddFavorite(url, title);
//       } else {
//         alert(
//           "Tarayıcınız otomatik yer imlerine eklemeyi desteklemiyor. Lütfen Ctrl+D (Mac: Cmd+D) tuş kombinasyonunu kullanın."
//         );
//       }
//     } catch (error) {
//       alert(
//         "Tarayıcınız yer imlerine eklemeyi desteklemiyor. Lütfen manuel olarak ekleyin."
//       );
//     }
//   };

//   // Mobil menü açıkken body scroll'u kapatalım
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isMobileMenuOpen]);

//   // Geri tuşuna vs. basılınca mobil menü kapansın
//   useEffect(() => {
//     const handleRouteChange = () => {
//       if (isMobileMenuOpen) {
//         setIsMobileMenuOpen(false);
//         document.body.style.overflow = "";
//       }
//     };
//     window.addEventListener("popstate", handleRouteChange);
//     return () => {
//       window.removeEventListener("popstate", handleRouteChange);
//     };
//   }, [isMobileMenuOpen]);

//   // Dil seçici (Hem desktop hem mobilde kullanacağız)
//   // isMobileView => konumlandırmayı ayırt etmek için ekledik
//   const LanguageSelector = ({
//     className = "",
//     isMobileView = false,
//   }: {
//     className?: string;
//     isMobileView?: boolean;
//   }) => (
//     <div className={`relative ${className}`} style={{ position: "relative" }}>
//       <button
//         onClick={toggleLanguageMenu}
//         className="flex items-center cursor-pointer"
//         style={{ height: "16px" }}
//       >
//         {/* Bayrak ikonu */}
//         <div
//           className="flex items-center justify-center"
//           style={{
//             width: "16px",
//             height: "16px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {locale === "tr" ? <Icon name="Turkey" /> : <Icon name="England" />}
//         </div>

//         {/* Masaüstünde dil kodu ve ok ikonu gözüksün, mobilde gizli */}
//         <div
//           className="hidden md:flex items-center justify-center"
//           style={{
//             height: "16px",
//             marginLeft: "4px",
//             marginRight: "4px",
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <span
//             style={{
//               fontFamily: "Inter",
//               fontWeight: 500,
//               fontSize: "12px",
//               lineHeight: "15px",
//               color: "#142347",
//             }}
//           >
//             {locale.toUpperCase()}
//           </span>
//         </div>
//         <div
//           className="hidden md:flex items-center justify-center"
//           style={{
//             width: "8px",
//             height: "16px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Icon name="arrow-downSmall" />
//         </div>
//       </button>

//       {/* Dil menüsü */}
//       {showLanguageMenu && (
//         <div
//           className="absolute bg-white rounded-md shadow-lg z-50"
//           style={{
//             width: "120px",
//             border: "1px solid #E1E7EF",
//             // Butonun altında açılacak şekilde:
//             top: "100%",
//             marginTop: "8px",
//             // Mobilde sağa yasla, desktop'ta sola yasla:
//             right: isMobileView ? "0" : "auto",
//             left: isMobileView ? "auto" : "0",
//           }}
//         >
//           <button
//             onClick={() => changeLanguage("en")}
//             className={`flex items-center w-full px-4 py-2 text-xs ${
//               locale === "en" ? "bg-gray-100" : ""
//             } hover:bg-gray-50`}
//           >
//             <div className="flex items-center justify-center mr-2">
//               <Icon name="England" />
//             </div>
//             <span>English</span>
//           </button>
//           <button
//             onClick={() => changeLanguage("tr")}
//             className={`flex items-center w-full px-4 py-2 text-xs ${
//               locale === "tr" ? "bg-gray-100" : ""
//             } hover:bg-gray-50`}
//           >
//             <div className="flex items-center justify-center mr-2">
//               <Icon name="Turkey" />
//             </div>
//             <span>Türkçe</span>
//           </button>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <header className="w-full">
//       {/* Üst Bar (Masaüstü) */}
//       <div
//         className="hidden md:block"
//         style={{
//           height: "40px",
//           paddingTop: "4px",
//           paddingBottom: "4px",
//           backgroundColor: "#F0F4F8",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: "1120px",
//             margin: "0 auto",
//             paddingLeft: "16px",
//             paddingRight: "16px",
//             height: "32px",
//           }}
//           className="flex justify-end items-center"
//         >
//           <div className="flex items-center">
//             {/* B2B platform */}
//             <Link
//               href="/comingsoon"
//               className="text-[#142347] hover:text-[#0057b8] text-xs font-medium flex items-center"
//               style={{
//                 height: "16px",
//                 fontFamily: "Inter",
//                 fontSize: "12px",
//                 fontWeight: 500,
//                 lineHeight: "100%",
//                 letterSpacing: "0%",
//                 marginRight: "16px",
//               }}
//             >
//               {t("Header", "b2bPlatform")}
//             </Link>

//             {/* Client Care */}
//             <Link
//               href="/comingsoon"
//               className="text-[#142347] hover:text-[#0057b8] text-xs font-medium flex items-center"
//               style={{
//                 height: "16px",
//                 fontFamily: "Inter",
//                 fontSize: "12px",
//                 fontWeight: 500,
//                 lineHeight: "100%",
//                 letterSpacing: "0%",
//                 marginRight: "16px",
//               }}
//             >
//               {t("Header", "clientCare")}
//             </Link>

//             {/* Contact */}
//             <Link
//               href="/comingsoon"
//               className="text-[#142347] hover:text-[#0057b8] text-xs font-medium flex items-center"
//               style={{
//                 height: "16px",
//                 fontFamily: "Inter",
//                 fontSize: "12px",
//                 fontWeight: 500,
//                 lineHeight: "100%",
//                 letterSpacing: "0%",
//                 marginRight: "16px",
//               }}
//             >
//               {t("Header", "contact")}
//             </Link>

//             {/* Phone */}
//             <div
//               className="flex items-center text-[#142347] mr-4"
//               style={{
//                 height: "16px",
//                 paddingLeft: "16px",
//               }}
//             >
//               <span className="flex items-center mr-1">
//                 <Icon name="phone" />
//               </span>
//               <a
//                 href="tel:+40212101717"
//                 className="flex items-center text-[#142347]"
//               >
//                 <span className="text-xs">+4021 210 17 17</span>
//               </a>
//             </div>

//             {/* Favorite */}
//             <div
//               onClick={handleAddFavorite}
//               className="flex items-center text-[#142347] mr-4 cursor-pointer"
//               style={{
//                 height: "16px",
//               }}
//             >
//               <span className="flex items-center mr-1">
//                 <Icon name="favorite" />
//               </span>
//               <span className="text-xs">{t("Header", "favorite")}</span>
//             </div>

//             {/* Arama */}
//             <div
//               className="relative mr-4"
//               style={{
//                 width: "200px",
//                 height: "32px",
//               }}
//             >
//               <div
//                 style={{
//                   position: "absolute",
//                   width: "16px",
//                   height: "16px",
//                   top: "8px",
//                   left: "9px",
//                   zIndex: 10,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Icon name="searchSm" />
//               </div>
//               <input
//                 type="text"
//                 placeholder={t("Header", "searchPlaceholder")}
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full h-full text-xs"
//                 style={{
//                   width: "200px",
//                   height: "32px",
//                   borderRadius: "8px",
//                   background: "#F7F9FB",
//                   border: "1px solid #E1E7EF",
//                   fontFamily: "Inter",
//                   fontSize: "12px",
//                   fontWeight: 400,
//                   lineHeight: "100%",
//                   color: "#142347",
//                   paddingLeft: "32px",
//                   paddingTop: "0",
//                   paddingBottom: "0",
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               />
//             </div>

//             {/* Dil seçici - Masaüstü */}
//             <LanguageSelector />
//           </div>
//         </div>
//       </div>

//       {/* Ana Navigation */}
//       <div
//         style={{
//           width: "100%",
//           backgroundColor: "#FFFFFF",
//           height: "71.91px",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: "1120px",
//             margin: "0 auto",
//             paddingLeft: "16px",
//             paddingRight: "16px",
//             paddingTop: "16px",
//             paddingBottom: "16px",
//             height: "71.91px",
//           }}
//           className="flex justify-between items-center relative"
//         >
//           {/* Mobilde solda Dil Seçici */}
//           <div className="md:hidden flex items-center">
//             <LanguageSelector isMobileView={true} />
//           </div>

//           {/* Logo - mobilde ortala */}
//           <div
//             className={`flex items-center ${isMobile ? "mx-auto" : ""}`}
//             style={{ height: "39.91px" }}
//           >
//             <Link href="/" className="flex items-center">
//               <div className="relative w-[156.17px] h-[39.91px]">
//                 <Image
//                   src="/logo/travelgo.svg"
//                   alt="TRAVELGO"
//                   fill
//                   style={{ objectFit: "contain" }}
//                 />
//               </div>
//             </Link>
//           </div>

//           {/* Masaüstü menü */}
//           <nav
//             className="hidden md:flex space-x-4"
//             style={{ height: "39.91px" }}
//           >
//             <Link
//               href="/comingsoon"
//               className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
//               style={{ fontFamily: "Inter" }}
//             >
//               {t("Header", "popularDestinations")}
//             </Link>
//             <Link
//               href="/comingsoon"
//               className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
//               style={{ fontFamily: "Inter" }}
//             >
//               {t("Header", "topHotels")}
//             </Link>
//             <Link
//               href="/comingsoon"
//               className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
//               style={{ fontFamily: "Inter" }}
//             >
//               {t("Header", "lastMinute")}
//             </Link>
//             <Link
//               href="/comingsoon"
//               className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
//               style={{ fontFamily: "Inter" }}
//             >
//               {t("Header", "recommended")}
//             </Link>
//             <Link
//               href="/comingsoon"
//               className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
//               style={{ fontFamily: "Inter" }}
//             >
//               {t("Header", "charterAntalya")}
//             </Link>
//             <Link
//               href="/comingsoon"
//               className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
//               style={{ fontFamily: "Inter" }}
//             >
//               {t("Header", "cityBreakIstanbul")}
//             </Link>
//           </nav>

//           {/* Mobil menü butonu (sadece hamburger) */}
//           <div className="md:hidden">
//             <button
//               className="text-gray-800 flex items-center justify-center"
//               aria-label="Toggle mobile menu"
//               onClick={toggleMobileMenu}
//               style={{ width: "24px", height: "24px" }}
//             >
//               <Icon name="hamburger" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobil menü overlay'i */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
//           {/* Sağ üstte close butonu */}
//           <button
//             className="absolute top-4 right-4 text-gray-800 flex items-center justify-center"
//             aria-label="Close mobile menu"
//             onClick={() => setIsMobileMenuOpen(false)}
//             style={{ width: "24px", height: "24px" }}
//           >
//             <Icon name="close" size={16} />
//           </button>

//           <div className="pt-24 px-4 space-y-6 pb-16">
//             {/* Üst menü öğeleri */}
//             <div className="border-b border-gray-200 pb-4 space-y-4">
//               <Link
//                 href="/comingsoon"
//                 className="text-[#142347] py-2 flex items-center text-base"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {t("Header", "b2bPlatform")}
//               </Link>

//               <Link
//                 href="/comingsoon"
//                 className="text-[#142347] py-2 flex items-center text-base"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {t("Header", "clientCare")}
//               </Link>

//               <Link
//                 href="/comingsoon"
//                 className="text-[#142347] py-2 flex items-center text-base"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {t("Header", "contact")}
//               </Link>

//               <a
//                 href="tel:+40212101717"
//                 className="text-[#142347] py-2 flex items-center text-base"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <span className="flex items-center mr-1">
//                   <Icon name="phone" />
//                 </span>
//                 <span>+4021 210 17 17</span>
//               </a>

//               <button
//                 onClick={() => {
//                   handleAddFavorite();
//                   setIsMobileMenuOpen(false);
//                 }}
//                 className="text-[#142347] py-2 flex items-center text-base w-full text-left"
//               >
//                 <span className="flex items-center mr-1">
//                   <Icon name="favorite" />
//                 </span>
//                 <span>{t("Header", "favorite")}</span>
//               </button>

//               {/* Arama */}
//               <div className="py-2">
//                 <div className="relative">
//                   <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
//                     <Icon name="searchSm" />
//                   </div>
//                   <input
//                     type="text"
//                     placeholder={t("Header", "searchPlaceholder")}
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full py-2 pl-8 pr-4 border border-gray-300 rounded-lg text-sm"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Ana navigasyon öğeleri */}
//             <div className="space-y-4">
//               <Link
//                 href="/comingsoon"
//                 className="text-[#142347] py-2 flex items-center text-base"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {t("Header", "popularDestinations")}
//               </Link>

//               <Link
//                 href="/comingsoon"
//                 className="text-[#142347] py-2 flex items-center text-base"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {t("Header", "topHotels")}
//               </Link>

//               <Link
//                 href="/comingsoon"
//                 className="text-[#142347] py-2 flex items-center text-base"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {t("Header", "lastMinute")}
//               </Link>

//               <Link
//                 href="/comingsoon"
//                 className="text-[#142347] py-2 flex items-center text-base"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {t("Header", "recommended")}
//               </Link>

//               <Link
//                 href="/comingsoon"
//                 className="text-[#142347] py-2 flex items-center text-base"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {t("Header", "charterAntalya")}
//               </Link>

//               <Link
//                 href="/comingsoon"
//                 className="text-[#142347] py-2 flex items-center text-base"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {t("Header", "cityBreakIstanbul")}
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../../assets/icons/Icon';
import { useLanguage } from '@/hooks/useLanguage';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  // Ekran boyutu kontrolü (768 px altı mobil)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // İlk değer atama
    setIsMobile(window.innerWidth < 768);

    // Resize event
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Masaüstüne geçince mobil menüyü kapatalım
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobil menü aç/kapa
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Dil menüsü aç/kapa
  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  // Dil değiştirme
  const changeLanguage = (lang: string) => {
    setLocale(lang);
    setShowLanguageMenu(false);
  };

  // Favorilere ekle
  const handleAddFavorite = () => {
    const url = window.location.href;
    const title = document.title;
    try {
      if (window.external && 'AddFavorite' in window.external) {
        window.external.AddFavorite(url, title);
      } else {
        alert(
          'Tarayıcınız otomatik yer imlerine eklemeyi desteklemiyor. Lütfen Ctrl+D (Mac: Cmd+D) tuş kombinasyonunu kullanın.',
        );
      }
    } catch (error) {
      alert(
        'Tarayıcınız yer imlerine eklemeyi desteklemiyor. Lütfen manuel olarak ekleyin.',
      );
    }
  };

  // Mobil menü açıkken body scroll'u kapatalım
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Geri tuşuna vs. basılınca mobil menü kapansın
  useEffect(() => {
    const handleRouteChange = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [isMobileMenuOpen]);

  // Dil seçici (Hem desktop hem mobilde kullanacağız)
  // isMobileView => konumlandırmayı ayırt etmek için ekledik
  const LanguageSelector = ({
    className = '',
    isMobileView = false,
  }: {
    className?: string;
    isMobileView?: boolean;
  }) => (
    <div className={`relative ${className}`} style={{ position: 'relative' }}>
      <button
        onClick={toggleLanguageMenu}
        className="flex items-center cursor-pointer"
        style={{ height: '16px' }}
      >
        {/* Bayrak ikonu */}
        <div
          className="flex items-center justify-center"
          style={{
            width: '16px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {locale === 'tr' ? <Icon name="Turkey" /> : <Icon name="England" />}
        </div>

        {/* Masaüstünde dil kodu ve ok ikonu gözüksün, mobilde gizli */}
        <div
          className="hidden md:flex items-center justify-center"
          style={{
            height: '16px',
            marginLeft: '4px',
            marginRight: '4px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '15px',
              color: '#142347',
            }}
          >
            {locale.toUpperCase()}
          </span>
        </div>
        <div
          className="hidden md:flex items-center justify-center"
          style={{
            width: '8px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="arrow-downSmall" />
        </div>
      </button>

      {/* Dil menüsü */}
      {showLanguageMenu && (
        <div
          className="absolute bg-white rounded-md shadow-lg z-50"
          style={{
            width: '120px',
            border: '1px solid #E1E7EF',
            // Butonun altında açılacak şekilde:
            top: '100%',
            marginTop: '8px',
            // Mobilde sağa yasla, desktop'ta sola yasla:
            right: isMobileView ? '0' : 'auto',
            left: isMobileView ? 'auto' : '0',
          }}
        >
          <button
            onClick={() => changeLanguage('en')}
            className={`flex items-center w-full px-4 py-2 text-xs ${
              locale === 'en' ? 'bg-gray-100' : ''
            } hover:bg-gray-50`}
          >
            <div className="flex items-center justify-center mr-2">
              <Icon name="England" />
            </div>
            <span>English</span>
          </button>
          <button
            onClick={() => changeLanguage('tr')}
            className={`flex items-center w-full px-4 py-2 text-xs ${
              locale === 'tr' ? 'bg-gray-100' : ''
            } hover:bg-gray-50`}
          >
            <div className="flex items-center justify-center mr-2">
              <Icon name="Turkey" />
            </div>
            <span>Türkçe</span>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <header className="w-full">
      {/* Üst Bar (Masaüstü) */}
      <div
        className="hidden md:block"
        style={{
          height: '40px',
          paddingTop: '4px',
          paddingBottom: '4px',
          backgroundColor: '#F0F4F8',
        }}
      >
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            paddingLeft: '16px',
            paddingRight: '16px',
            height: '32px',
          }}
          className="flex justify-end items-center"
        >
          <div className="flex items-center">
            {/* B2B platform */}
            <Link
              href="/comingsoon"
              className="text-[#142347] hover:text-[#0057b8] text-xs font-medium flex items-center"
              style={{
                height: '16px',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontWeight: 500,
                lineHeight: '100%',
                letterSpacing: '0%',
                marginRight: '16px',
              }}
            >
              {t('Header', 'b2bPlatform')}
            </Link>

            {/* Client Care */}
            <Link
              href="/comingsoon"
              className="text-[#142347] hover:text-[#0057b8] text-xs font-medium flex items-center"
              style={{
                height: '16px',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontWeight: 500,
                lineHeight: '100%',
                letterSpacing: '0%',
                marginRight: '16px',
              }}
            >
              {t('Header', 'clientCare')}
            </Link>

            {/* Contact */}
            <Link
              href="/comingsoon"
              className="text-[#142347] hover:text-[#0057b8] text-xs font-medium flex items-center"
              style={{
                height: '16px',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontWeight: 500,
                lineHeight: '100%',
                letterSpacing: '0%',
                marginRight: '16px',
              }}
            >
              {t('Header', 'contact')}
            </Link>

            {/* Phone */}
            <div
              className="flex items-center text-[#142347] mr-4"
              style={{
                height: '16px',
                paddingLeft: '16px',
              }}
            >
              <span className="flex items-center mr-1">
                <Icon name="phone" />
              </span>
              <a
                href="tel:+40212101717"
                className="flex items-center text-[#142347]"
              >
                <span className="text-xs">+4021 210 17 17</span>
              </a>
            </div>

            {/* Favorite */}
            <div
              onClick={handleAddFavorite}
              className="flex items-center text-[#142347] mr-4 cursor-pointer"
              style={{
                height: '16px',
              }}
            >
              <span className="flex items-center mr-1">
                <Icon name="favorite" />
              </span>
              <span className="text-xs">{t('Header', 'favorite')}</span>
            </div>

            {/* Arama */}
            <div
              className="relative mr-4"
              style={{
                width: '200px',
                height: '32px',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: '16px',
                  height: '16px',
                  top: '8px',
                  left: '9px',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon name="searchSm" />
              </div>
              <input
                type="text"
                placeholder={t('Header', 'searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-full text-xs"
                style={{
                  width: '200px',
                  height: '32px',
                  borderRadius: '8px',
                  background: '#F7F9FB',
                  border: '1px solid #E1E7EF',
                  fontFamily: 'Inter',
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '100%',
                  color: '#142347',
                  paddingLeft: '32px',
                  paddingTop: '0',
                  paddingBottom: '0',
                  display: 'flex',
                  alignItems: 'center',
                }}
              />
            </div>

            {/* Dil seçici - Masaüstü */}
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Ana Navigation */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          height: '71.91px',
        }}
      >
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '16px',
            paddingBottom: '16px',
            height: '71.91px',
          }}
          className="flex justify-between items-center relative"
        >
          {/* Logo - artık mobilde de sola yaslı */}
          <div className="flex items-center" style={{ height: '39.91px' }}>
            <Link href="/" className="flex items-center">
              <div className="relative w-[156.17px] h-[39.91px]">
                <Image
                  src="/logo/travelgo.svg"
                  alt="TRAVELGO"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>
          </div>

          {/* Masaüstü menü */}
          <nav
            className="hidden md:flex space-x-4"
            style={{ height: '39.91px' }}
          >
            <Link
              href="/comingsoon"
              className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
              style={{ fontFamily: 'Inter' }}
            >
              {t('Header', 'popularDestinations')}
            </Link>
            <Link
              href="/comingsoon"
              className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
              style={{ fontFamily: 'Inter' }}
            >
              {t('Header', 'topHotels')}
            </Link>
            <Link
              href="/comingsoon"
              className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
              style={{ fontFamily: 'Inter' }}
            >
              {t('Header', 'lastMinute')}
            </Link>
            <Link
              href="/comingsoon"
              className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
              style={{ fontFamily: 'Inter' }}
            >
              {t('Header', 'recommended')}
            </Link>
            <Link
              href="/comingsoon"
              className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
              style={{ fontFamily: 'Inter' }}
            >
              {t('Header', 'charterAntalya')}
            </Link>
            <Link
              href="/comingsoon"
              className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
              style={{ fontFamily: 'Inter' }}
            >
              {t('Header', 'cityBreakIstanbul')}
            </Link>
          </nav>

          {/* Mobil menü butonu (sadece hamburger) */}
          <div className="md:hidden">
            <button
              className="text-gray-800 flex items-center justify-center"
              aria-label="Toggle mobile menu"
              onClick={toggleMobileMenu}
              style={{ width: '24px', height: '24px' }}
            >
              <Icon name="hamburger" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobil menü overlay'i */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* Sağ üstte close butonu */}
          <button
            className="absolute top-4 right-4 text-gray-800 flex items-center justify-center"
            aria-label="Close mobile menu"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ width: '24px', height: '24px' }}
          >
            <Icon name="close" size={16} />
          </button>

          <div className="pt-24 px-4 space-y-6 pb-16">
            {/* Üst menü öğeleri */}
            <div className="border-b border-gray-200 pb-4 space-y-4">
              {/* Dil seçici - artık hamburger menü içinde */}
              <div className="py-2 flex items-center">
                <span className="mr-2 text-base text-[#142347]">
                  {t('Header', 'language')}
                </span>
                <LanguageSelector isMobileView={true} />
              </div>

              <Link
                href="/comingsoon"
                className="text-[#142347] py-2 flex items-center text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('Header', 'b2bPlatform')}
              </Link>

              <Link
                href="/comingsoon"
                className="text-[#142347] py-2 flex items-center text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('Header', 'clientCare')}
              </Link>

              <Link
                href="/comingsoon"
                className="text-[#142347] py-2 flex items-center text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('Header', 'contact')}
              </Link>

              <a
                href="tel:+40212101717"
                className="text-[#142347] py-2 flex items-center text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center mr-1">
                  <Icon name="phone" />
                </span>
                <span>+4021 210 17 17</span>
              </a>

              <button
                onClick={() => {
                  handleAddFavorite();
                  setIsMobileMenuOpen(false);
                }}
                className="text-[#142347] py-2 flex items-center text-base w-full text-left"
              >
                <span className="flex items-center mr-1">
                  <Icon name="favorite" />
                </span>
                <span>{t('Header', 'favorite')}</span>
              </button>

              {/* Arama */}
              <div className="py-2">
                <div className="relative">
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                    <Icon name="searchSm" />
                  </div>
                  <input
                    type="text"
                    placeholder={t('Header', 'searchPlaceholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-2 pl-8 pr-4 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Ana navigasyon öğeleri */}
            <div className="space-y-4">
              <Link
                href="/comingsoon"
                className="text-[#142347] py-2 flex items-center text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('Header', 'popularDestinations')}
              </Link>

              <Link
                href="/comingsoon"
                className="text-[#142347] py-2 flex items-center text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('Header', 'topHotels')}
              </Link>

              <Link
                href="/comingsoon"
                className="text-[#142347] py-2 flex items-center text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('Header', 'lastMinute')}
              </Link>

              <Link
                href="/comingsoon"
                className="text-[#142347] py-2 flex items-center text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('Header', 'recommended')}
              </Link>

              <Link
                href="/comingsoon"
                className="text-[#142347] py-2 flex items-center text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('Header', 'charterAntalya')}
              </Link>

              <Link
                href="/comingsoon"
                className="text-[#142347] py-2 flex items-center text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('Header', 'cityBreakIstanbul')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
