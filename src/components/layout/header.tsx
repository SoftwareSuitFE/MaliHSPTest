// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Icon from "../../../public/icons/Icon";
// import { useLanguage } from "@/hooks/useLanguage";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showLanguageMenu, setShowLanguageMenu] = useState(false);
//   const { locale, setLocale, t } = useLanguage();

//   // Toggle language menu
//   const toggleLanguageMenu = () => {
//     setShowLanguageMenu(!showLanguageMenu);
//   };

//   // Change language function
//   const changeLanguage = (lang: string) => {
//     setLocale(lang);
//     setShowLanguageMenu(false);
//   };

//   // Favorilere ekle fonksiyonu
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

//   return (
//     <header className="w-full">
//       {/* Top Navigation Bar */}
//       <div
//         style={{
//           height: "40px",
//           paddingTop: "4px",
//           paddingBottom: "4px",
//           backgroundColor: "#F0F4F8",
//         }}
//       >
//         <div
//           className="container mx-auto flex justify-end items-center px-4"
//           style={{
//             maxWidth: "1120px",
//             height: "32px",
//           }}
//         >
//           {/* All elements aligned to the right */}
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

//             {/* Favorite Button */}
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

//             {/* Search Input */}
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

//             {/* Language Selector */}
//             <div className="relative">
//               <button
//                 onClick={toggleLanguageMenu}
//                 className="flex items-center cursor-pointer"
//                 style={{ height: "16px" }}
//               >
//                 {/* Flag Icon */}
//                 <div
//                   className="flex items-center justify-center"
//                   style={{
//                     width: "16px",
//                     height: "16px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {locale === "tr" ? (
//                     <Icon name="Turkey" />
//                   ) : (
//                     <Icon name="England" />
//                   )}
//                 </div>

//                 {/* Language Code */}
//                 <div
//                   className="flex items-center justify-center"
//                   style={{
//                     height: "16px",
//                     marginLeft: "4px",
//                     marginRight: "4px",
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span
//                     style={{
//                       fontFamily: "Inter",
//                       fontWeight: 500,
//                       fontSize: "12px",
//                       lineHeight: "15px",
//                       color: "#142347",
//                     }}
//                   >
//                     {locale.toUpperCase()}
//                   </span>
//                 </div>

//                 {/* Down Caret */}
//                 <div
//                   className="flex items-center justify-center"
//                   style={{
//                     width: "8px",
//                     height: "16px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <Icon name="arrow-downSmall" />
//                 </div>
//               </button>

//               {/* Language Dropdown Menu */}
//               {showLanguageMenu && (
//                 <div
//                   className="absolute right-0 mt-2 bg-white rounded-md shadow-lg z-50"
//                   style={{
//                     width: "120px",
//                     border: "1px solid #E1E7EF",
//                   }}
//                 >
//                   <button
//                     onClick={() => changeLanguage("en")}
//                     className={`flex items-center w-full px-4 py-2 text-xs ${
//                       locale === "en" ? "bg-gray-100" : ""
//                     } hover:bg-gray-50`}
//                   >
//                     <div className="flex items-center justify-center mr-2">
//                       <Icon name="England" />
//                     </div>
//                     <span>English</span>
//                   </button>
//                   <button
//                     onClick={() => changeLanguage("tr")}
//                     className={`flex items-center w-full px-4 py-2 text-xs ${
//                       locale === "tr" ? "bg-gray-100" : ""
//                     } hover:bg-gray-50`}
//                   >
//                     <div className="flex items-center justify-center mr-2">
//                       <Icon name="Turkey" />
//                     </div>
//                     <span>Türkçe</span>
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div
//         className="container mx-auto py-4 px-4"
//         style={{ maxWidth: "1120px" }}
//       >
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <Link href="/comingsoon" className="flex items-center">
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

//           <nav className="hidden md:flex space-x-4">
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

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button className="text-gray-600" aria-label="Toggle mobile menu">
//               <Icon name="hamburger" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "../../../public/icons/Icon";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  // Toggle language menu
  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  // Change language function
  const changeLanguage = (lang: string) => {
    setLocale(lang);
    setShowLanguageMenu(false);
  };

  // Favorilere ekle fonksiyonu
  const handleAddFavorite = () => {
    const url = window.location.href;
    const title = document.title;
    try {
      if (window.external && "AddFavorite" in window.external) {
        window.external.AddFavorite(url, title);
      } else {
        alert(
          "Tarayıcınız otomatik yer imlerine eklemeyi desteklemiyor. Lütfen Ctrl+D (Mac: Cmd+D) tuş kombinasyonunu kullanın."
        );
      }
    } catch (error) {
      alert(
        "Tarayıcınız yer imlerine eklemeyi desteklemiyor. Lütfen manuel olarak ekleyin."
      );
    }
  };

  return (
    <header className="w-full">
      {/* Top Navigation Bar */}
      <div
        style={{
          height: "40px",
          paddingTop: "4px",
          paddingBottom: "4px",
          backgroundColor: "#F0F4F8",
        }}
      >
        {/* Üst navigasyonu search sayfasıyla uyumlu konteyner içine alıyoruz */}
        <div className="container mx-auto px-4">
          <div 
            className="flex justify-end items-center"
            style={{
              height: "32px",
            }}
          >
            {/* All elements aligned to the right */}
            <div className="flex items-center">
              {/* B2B platform */}
              <Link
                href="/comingsoon"
                className="text-[#142347] hover:text-[#0057b8] text-xs font-medium flex items-center"
                style={{
                  height: "16px",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  marginRight: "16px",
                }}
              >
                {t("Header", "b2bPlatform")}
              </Link>

              {/* Client Care */}
              <Link
                href="/comingsoon"
                className="text-[#142347] hover:text-[#0057b8] text-xs font-medium flex items-center"
                style={{
                  height: "16px",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  marginRight: "16px",
                }}
              >
                {t("Header", "clientCare")}
              </Link>

              {/* Contact */}
              <Link
                href="/comingsoon"
                className="text-[#142347] hover:text-[#0057b8] text-xs font-medium flex items-center"
                style={{
                  height: "16px",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  marginRight: "16px",
                }}
              >
                {t("Header", "contact")}
              </Link>

              {/* Phone */}
              <div
                className="flex items-center text-[#142347] mr-4"
                style={{
                  height: "16px",
                  paddingLeft: "16px",
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

              {/* Favorite Button */}
              <div
                onClick={handleAddFavorite}
                className="flex items-center text-[#142347] mr-4 cursor-pointer"
                style={{
                  height: "16px",
                }}
              >
                <span className="flex items-center mr-1">
                  <Icon name="favorite" />
                </span>
                <span className="text-xs">{t("Header", "favorite")}</span>
              </div>

              {/* Search Input */}
              <div
                className="relative mr-4"
                style={{
                  width: "200px",
                  height: "32px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "16px",
                    height: "16px",
                    top: "8px",
                    left: "9px",
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name="searchSm" />
                </div>
                <input
                  type="text"
                  placeholder={t("Header", "searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-full text-xs"
                  style={{
                    width: "200px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "#F7F9FB",
                    border: "1px solid #E1E7EF",
                    fontFamily: "Inter",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "100%",
                    color: "#142347",
                    paddingLeft: "32px",
                    paddingTop: "0",
                    paddingBottom: "0",
                    display: "flex",
                    alignItems: "center",
                  }}
                />
              </div>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={toggleLanguageMenu}
                  className="flex items-center cursor-pointer"
                  style={{ height: "16px" }}
                >
                  {/* Flag Icon */}
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: "16px",
                      height: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {locale === "tr" ? (
                      <Icon name="Turkey" />
                    ) : (
                      <Icon name="England" />
                    )}
                  </div>

                  {/* Language Code */}
                  <div
                    className="flex items-center justify-center"
                    style={{
                      height: "16px",
                      marginLeft: "4px",
                      marginRight: "4px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "15px",
                        color: "#142347",
                      }}
                    >
                      {locale.toUpperCase()}
                    </span>
                  </div>

                  {/* Down Caret */}
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: "8px",
                      height: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon name="arrow-downSmall" />
                  </div>
                </button>

                {/* Language Dropdown Menu */}
                {showLanguageMenu && (
                  <div
                    className="absolute right-0 mt-2 bg-white rounded-md shadow-lg z-50"
                    style={{
                      width: "120px",
                      border: "1px solid #E1E7EF",
                    }}
                  >
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`flex items-center w-full px-4 py-2 text-xs ${
                        locale === "en" ? "bg-gray-100" : ""
                      } hover:bg-gray-50`}
                    >
                      <div className="flex items-center justify-center mr-2">
                        <Icon name="England" />
                      </div>
                      <span>English</span>
                    </button>
                    <button
                      onClick={() => changeLanguage("tr")}
                      className={`flex items-center w-full px-4 py-2 text-xs ${
                        locale === "tr" ? "bg-gray-100" : ""
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
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Search sayfasıyla aynı container yapısını kullanıyoruz */}
      <div className="container mx-auto px-4 py-4">
        {/* Tam olarak aynı kabın içinde olmasını sağlıyoruz */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-[156.17px] h-[39.91px]">
                <Image
                  src="/logo/travelgo.svg"
                  alt="TRAVELGO"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-4">
            <Link
              href="/comingsoon"
              className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
              style={{ fontFamily: "Inter" }}
            >
              {t("Header", "popularDestinations")}
            </Link>
            <Link
              href="/comingsoon"
              className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
              style={{ fontFamily: "Inter" }}
            >
              {t("Header", "topHotels")}
            </Link>
            <Link
              href="/comingsoon"
              className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
              style={{ fontFamily: "Inter" }}
            >
              {t("Header", "lastMinute")}
            </Link>
            <Link
              href="/comingsoon"
              className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
              style={{ fontFamily: "Inter" }}
            >
              {t("Header", "recommended")}
            </Link>
            <Link
              href="/comingsoon"
              className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
              style={{ fontFamily: "Inter" }}
            >
              {t("Header", "charterAntalya")}
            </Link>
            <Link
              href="/comingsoon"
              className="text-sm text-[#142347] hover:text-[#0057b8] flex items-center"
              style={{ fontFamily: "Inter" }}
            >
              {t("Header", "cityBreakIstanbul")}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600" aria-label="Toggle mobile menu">
              <Icon name="hamburger" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;