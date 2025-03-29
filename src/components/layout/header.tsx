// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Input } from "antd";
// import { SearchOutlined } from "@ant-design/icons";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");

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
//               href="/"
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
//               B2B platform
//             </Link>

//             {/* Client Care */}
//             <Link
//               href="/"
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
//               Client Care
//             </Link>

//             {/* Contact */}
//             <Link
//               href="/"
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
//               Contact
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
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M15.5 11.69L12.01 10.19C11.94 10.15 11.87 10.13 11.79 10.13C11.61 10.13 11.44 10.23 11.35 10.4L9.75 12.95C7.61 11.81 5.8 9.8 4.8 7.45L7.14 5.65C7.31 5.55 7.39 5.35 7.36 5.16L6.18 1.45C6.15 1.24 5.96 1.1 5.75 1.1H2.03C1.8 1.1 1.6 1.29 1.61 1.51C1.86 8.54 7.39 14.38 14.26 14.95C14.47 14.97 14.65 14.8 14.65 14.58V11.01C14.65 10.86 14.6 10.75 14.5 10.69H15.5Z"
//                     fill="#ED9636"
//                   />
//                 </svg>
//               </span>
//               <span className="text-xs">+4021 210 17 17</span>
//             </div>

//             {/* Favorite Button */}
//             <div
//               className="flex items-center text-[#142347] mr-4"
//               style={{
//                 height: "16px",
//               }}
//             >
//               <span className="flex items-center mr-1">
//                 <svg
//                   width="13.5"
//                   height="12"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M8 14.4167L7.05833 13.5667C3.90833 10.7167 1.83333 8.85 1.83333 6.5C1.83333 4.61667 3.28333 3.16667 5.16667 3.16667C6.23333 3.16667 7.25833 3.70833 8 4.53333C8.74167 3.70833 9.76667 3.16667 10.8333 3.16667C12.7167 3.16667 14.1667 4.61667 14.1667 6.5C14.1667 8.85 12.0917 10.7167 8.94167 13.575L8 14.4167Z"
//                     fill="#ED9636"
//                   />
//                 </svg>
//               </span>
//               <span className="text-xs">Favorite</span>
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
//                 <SearchOutlined
//                   className="text-[#142347]"
//                   style={{ fontSize: "16px" }}
//                 />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Destination or Hotel"
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

//             {/* EN Flag with Dropdown */}
//             <div
//               className="flex items-center"
//               style={{
//                 height: "16px",
//               }}
//             >
//               {/* UK Flag */}
//               <div
//                 className="flex items-center justify-center"
//                 style={{
//                   width: "16px",
//                   height: "16px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <svg
//                   width="16"
//                   height="10"
//                   viewBox="0 0 16 10"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   style={{ display: "block" }}
//                 >
//                   <rect x="0.5" y="0.5" width="15" height="9" fill="white" />
//                   <path d="M0.5 0.5H15.5V9.5H0.5V0.5Z" fill="#012169" />
//                   <path
//                     d="M0.5 0.5L15.5 9.5L0.5 0.5ZM15.5 0.5L0.5 9.5L15.5 0.5Z"
//                     fill="black"
//                   />
//                   <path
//                     d="M0.5 0.5L15.5 9.5M15.5 0.5L0.5 9.5"
//                     stroke="white"
//                     strokeWidth="3"
//                   />
//                   <path
//                     d="M0.5 0.5L15.5 9.5M15.5 0.5L0.5 9.5"
//                     stroke="#C8102E"
//                     strokeWidth="2"
//                   />
//                   <path
//                     d="M8 0.5V9.5M0.5 5H15.5"
//                     stroke="white"
//                     strokeWidth="3"
//                   />
//                   <path
//                     d="M8 0.5V9.5M0.5 5H15.5"
//                     stroke="#C8102E"
//                     strokeWidth="2"
//                   />
//                 </svg>
//               </div>

//               {/* EN Text */}
//               <div
//                 className="flex items-center justify-center"
//                 style={{
//                   height: "16px",
//                   marginLeft: "4px",
//                   marginRight: "4px",
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <span
//                   style={{
//                     fontFamily: "Inter",
//                     fontWeight: 500,
//                     fontSize: "12px",
//                     lineHeight: "15px",
//                     color: "#142347",
//                   }}
//                 >
//                   EN
//                 </span>
//               </div>

//               {/* Down Caret */}
//               <div
//                 className="flex items-center justify-center"
//                 style={{
//                   width: "8px",
//                   height: "16px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <svg
//                   width="8"
//                   height="8"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   style={{ display: "block" }}
//                 >
//                   <path d="M8 10.6667L4 6.66667H12L8 10.6667Z" fill="#142347" />
//                 </svg>
//               </div>
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

//           <nav className="hidden md:flex space-x-4">
//             <Link
//               href="/"
//               className="text-sm text-[#142347] hover:text-[#0057b8] w-[139px] h-[17px] flex items-center"
//               style={{ fontFamily: "Inter" }}
//             >
//               Popular Destinations
//             </Link>
//             <Link
//               href="/"
//               className="text-sm text-[#142347] hover:text-[#0057b8] w-[72px] h-[17px] flex items-center"
//               style={{ fontFamily: "Inter" }}
//             >
//               Top Hotels
//             </Link>
//             <Link
//               href="/"
//               className="text-sm text-[#142347] hover:text-[#0057b8] w-[79px] h-[17px] flex items-center"
//               style={{ fontFamily: "Inter" }}
//             >
//               Last Minute
//             </Link>
//             <Link
//               href="/"
//               className="text-sm text-[#142347] hover:text-[#0057b8] w-[101px] h-[17px] flex items-center"
//               style={{ fontFamily: "Inter" }}
//             >
//               Recommended
//             </Link>
//             <Link
//               href="/"
//               className="text-sm text-[#142347] hover:text-[#0057b8] w-[106px] h-[17px] flex items-center"
//               style={{ fontFamily: "Inter" }}
//             >
//               Charter Antalya
//             </Link>
//             <Link
//               href="/"
//               className="text-sm text-[#142347] hover:text-[#0057b8] w-[125px] h-[17px] flex items-center"
//               style={{ fontFamily: "Inter" }}
//             >
//               City Break Istanbul
//             </Link>
//           </nav>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button className="text-gray-600" aria-label="Toggle mobile menu">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
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
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
        <div
          className="container mx-auto flex justify-end items-center px-4"
          style={{
            maxWidth: "1120px",
            height: "32px",
          }}
        >
          {/* All elements aligned to the right */}
          <div className="flex items-center">
            {/* B2B platform */}
            <Link
              href="/"
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
              B2B platform
            </Link>

            {/* Client Care */}
            <Link
              href="/"
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
              Client Care
            </Link>

            {/* Contact */}
            <Link
              href="/"
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
              Contact
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
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 11.69L12.01 10.19C11.94 10.15 11.87 10.13 11.79 10.13C11.61 10.13 11.44 10.23 11.35 10.4L9.75 12.95C7.61 11.81 5.8 9.8 4.8 7.45L7.14 5.65C7.31 5.55 7.39 5.35 7.36 5.16L6.18 1.45C6.15 1.24 5.96 1.1 5.75 1.1H2.03C1.8 1.1 1.6 1.29 1.61 1.51C1.86 8.54 7.39 14.38 14.26 14.95C14.47 14.97 14.65 14.8 14.65 14.58V11.01C14.65 10.86 14.6 10.75 14.5 10.69H15.5Z"
                    fill="#ED9636"
                  />
                </svg>
              </span>
              {/* <span className="text-xs">+4021 210 17 17</span> */}
              <a
                href="tel:+40212101717"
                className="flex items-center text-[#142347]"
              >
                <span className="flex items-center mr-1">
                  {/* Telefon ikonu */}
                </span>
                <span className="text-xs">+4021 210 17 17</span>
              </a>
            </div>

            {/* Favorite Button */}
            <div
              className="flex items-center text-[#142347] mr-4"
              style={{
                height: "16px",
              }}
            >
              <span className="flex items-center mr-1">
                <svg
                  width="13.5"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 14.4167L7.05833 13.5667C3.90833 10.7167 1.83333 8.85 1.83333 6.5C1.83333 4.61667 3.28333 3.16667 5.16667 3.16667C6.23333 3.16667 7.25833 3.70833 8 4.53333C8.74167 3.70833 9.76667 3.16667 10.8333 3.16667C12.7167 3.16667 14.1667 4.61667 14.1667 6.5C14.1667 8.85 12.0917 10.7167 8.94167 13.575L8 14.4167Z"
                    fill="#ED9636"
                  />
                </svg>
              </span>
              <span className="text-xs">Favorite</span>
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
                <SearchOutlined
                  className="text-[#142347]"
                  style={{ fontSize: "16px" }}
                />
              </div>
              <input
                type="text"
                placeholder="Destination or Hotel"
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

            {/* EN Flag with Dropdown */}
            <div
              className="flex items-center"
              style={{
                height: "16px",
              }}
            >
              {/* UK Flag */}
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
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "block" }}
                >
                  <rect x="0.5" y="0.5" width="15" height="9" fill="white" />
                  <path d="M0.5 0.5H15.5V9.5H0.5V0.5Z" fill="#012169" />
                  <path
                    d="M0.5 0.5L15.5 9.5L0.5 0.5ZM15.5 0.5L0.5 9.5L15.5 0.5Z"
                    fill="black"
                  />
                  <path
                    d="M0.5 0.5L15.5 9.5M15.5 0.5L0.5 9.5"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <path
                    d="M0.5 0.5L15.5 9.5M15.5 0.5L0.5 9.5"
                    stroke="#C8102E"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 0.5V9.5M0.5 5H15.5"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <path
                    d="M8 0.5V9.5M0.5 5H15.5"
                    stroke="#C8102E"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* EN Text */}
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
                  EN
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
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "block" }}
                >
                  <path d="M8 10.6667L4 6.66667H12L8 10.6667Z" fill="#142347" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className="container mx-auto py-4 px-4"
        style={{ maxWidth: "1120px" }}
      >
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
              href="/"
              className="text-sm text-[#142347] hover:text-[#0057b8] w-[139px] h-[17px] flex items-center"
              style={{ fontFamily: "Inter" }}
            >
              Popular Destinations
            </Link>
            <Link
              href="/"
              className="text-sm text-[#142347] hover:text-[#0057b8] w-[72px] h-[17px] flex items-center"
              style={{ fontFamily: "Inter" }}
            >
              Top Hotels
            </Link>
            <Link
              href="/"
              className="text-sm text-[#142347] hover:text-[#0057b8] w-[79px] h-[17px] flex items-center"
              style={{ fontFamily: "Inter" }}
            >
              Last Minute
            </Link>
            <Link
              href="/"
              className="text-sm text-[#142347] hover:text-[#0057b8] w-[101px] h-[17px] flex items-center"
              style={{ fontFamily: "Inter" }}
            >
              Recommended
            </Link>
            <Link
              href="/"
              className="text-sm text-[#142347] hover:text-[#0057b8] w-[106px] h-[17px] flex items-center"
              style={{ fontFamily: "Inter" }}
            >
              Charter Antalya
            </Link>
            <Link
              href="/"
              className="text-sm text-[#142347] hover:text-[#0057b8] w-[125px] h-[17px] flex items-center"
              style={{ fontFamily: "Inter" }}
            >
              City Break Istanbul
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600" aria-label="Toggle mobile menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
