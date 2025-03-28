// // "use client";

// // import { useState } from "react";
// // import { useSearch } from "../../../context/searchContext";

// // const TravelTabs = () => {
// //   const { searchParams, updateSearchParams } = useSearch();
// //   const [activeTab, setActiveTab] = useState<"package" | "hotel" | "flight">(
// //     searchParams.travelType || "package"
// //   );

// //   const handleTabChange = (tab: "package" | "hotel" | "flight") => {
// //     setActiveTab(tab);
// //     updateSearchParams({ travelType: tab });
// //   };

// //   return (
// //     <div className="flex justify-center mb-4">
// //       <div className="flex bg-white/30 backdrop-blur-sm p-1 rounded-2xl">
// //         <button
// //           onClick={() => handleTabChange("package")}
// //           className={`flex items-center justify-center px-4 py-2 rounded-xl transition-all ${
// //             activeTab === "package"
// //               ? "bg-white text-gray-800 shadow-sm"
// //               : "bg-transparent text-white"
// //           }`}
// //           style={{ width: "130px", height: "40px"}}
// //         >
// //           <svg
// //             width="16"
// //             height="16"
// //             viewBox="0 0 20 20"
// //             fill="none"
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="mr-2"
// //           >
// //             <path
// //               d="M17.5 5.83337H2.5C2.04 5.83337 1.66667 6.20671 1.66667 6.66671V15.8334C1.66667 16.2934 2.04 16.6667 2.5 16.6667H17.5C17.96 16.6667 18.3333 16.2934 18.3333 15.8334V6.66671C18.3333 6.20671 17.96 5.83337 17.5 5.83337Z"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //             <path
// //               d="M13.3333 16.6667V4.16671C13.3333 3.94569 13.2455 3.73373 13.0893 3.57745C12.933 3.42117 12.721 3.33337 12.5 3.33337H7.5C7.27899 3.33337 7.06702 3.42117 6.91074 3.57745C6.75446 3.73373 6.66667 3.94569 6.66667 4.16671V16.6667"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //           </svg>
// //           <span className="font-semibold text-sm">Package</span>
// //         </button>

// //         <button
// //           onClick={() => handleTabChange("hotel")}
// //           className={`flex items-center justify-center px-4 py-2 rounded-xl transition-all ${
// //             activeTab === "hotel"
// //               ? "bg-white text-gray-800 shadow-sm"
// //               : "bg-transparent text-white"
// //           }`}
// //           style={{ width: "107px", height: "40px" }}
// //         >
// //           <svg
// //             width="16"
// //             height="16"
// //             viewBox="0 0 20 20"
// //             fill="none"
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="mr-2"
// //           >
// //             <path
// //               d="M1.66666 18.3334V6.66669C1.66666 6.22466 1.84225 5.8007 2.15481 5.48814C2.46737 5.17558 2.89133 5.00002 3.33333 5.00002H16.6667C17.1087 5.00002 17.5326 5.17558 17.8452 5.48814C18.1577 5.8007 18.3333 6.22466 18.3333 6.66669V18.3334"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //             <path
// //               d="M1.66666 18.3334H18.3333"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //             <path
// //               d="M10.8333 5.00002V1.66669"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //             <path
// //               d="M9.16667 5.00002V1.66669"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //             <path
// //               d="M5 10.0001H7.5"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //             <path
// //               d="M12.5 10.0001H15"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //             <path
// //               d="M5 14.1667H7.5"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //             <path
// //               d="M12.5 14.1667H15"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //           </svg>
// //           <span className="font-semibold text-sm">Hotel</span>
// //         </button>

// //         <button
// //           onClick={() => handleTabChange("flight")}
// //           className={`flex items-center justify-center px-4 py-2 rounded-xl transition-all ${
// //             activeTab === "flight"
// //               ? "bg-white text-gray-800 shadow-sm"
// //               : "bg-transparent text-white"
// //           }`}
// //           style={{ width: "107px", height: "40px" }}
// //         >
// //           <svg
// //             width="16"
// //             height="16"
// //             viewBox="0 0 20 20"
// //             fill="none"
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="mr-2"
// //           >
// //             <path
// //               d="M16.6667 13.3334L9.16667 8.33337L10.8333 2.50004C10.9304 2.14189 11.1401 1.82659 11.433 1.5967C11.726 1.36682 12.0862 1.23385 12.4613 1.21563C12.8363 1.1974 13.2075 1.29472 13.5203 1.49475C13.8331 1.69478 14.0711 1.98752 14.2 2.33337L18.3333 13.3334H16.6667Z"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //             <path
// //               d="M3.33333 13.3333L10.8333 8.33333L9.16666 2.49999C9.0696 2.14184 8.85989 1.82654 8.56697 1.59666C8.27405 1.36677 7.91381 1.23381 7.53875 1.21558C7.16369 1.19735 6.79252 1.29467 6.47971 1.4947C6.1669 1.69473 5.92886 1.98748 5.79999 2.33333L1.66666 13.3333H3.33333Z"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //             <path
// //               d="M6.66667 13.3333H13.3333V16.6667C13.3333 17.1087 13.1577 17.5326 12.8452 17.8452C12.5326 18.1577 12.1087 18.3333 11.6667 18.3333H8.33333C7.89131 18.3333 7.46738 18.1577 7.15482 17.8452C6.84226 17.5326 6.66667 17.1087 6.66667 16.6667V13.3333Z"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //           </svg>
// //           <span className="font-semibold text-sm">Flight</span>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TravelTabs;

// "use client";

// import { useState } from "react";
// import { useSearch } from "../../../context/searchContext";

// const TravelTabs = () => {
//   const { searchParams, updateSearchParams } = useSearch();
//   const [activeTab, setActiveTab] = useState<"package" | "hotel" | "flight">(
//     searchParams.travelType || "package"
//   );

//   const handleTabChange = (tab: "package" | "hotel" | "flight") => {
//     setActiveTab(tab);
//     updateSearchParams({ travelType: tab });
//   };

//   return (
//     <div className="flex justify-center mb-4">
//       <div
//         className="flex bg-white/30 backdrop-blur-sm overflow-hidden"
//         style={{
//           width: "365.41px",
//           height: "40px",
//           borderRadius: "8px",
//           gap: "0"
//         }}
//       >
//         <button
//           onClick={() => handleTabChange("package")}
//           className={`flex items-center justify-center transition-all duration-300 ease-in-out ${
//             activeTab === "package"
//               ? "bg-white text-gray-800"
//               : "bg-transparent text-gray-800"
//           }`}
//           style={{
//             width: "130px",
//             height: "40px",
//             borderTopLeftRadius: "8px",
//             borderTopRightRadius: "8px",
//             borderBottomLeftRadius: "8px",
//             borderBottomRightRadius: "8px"
//           }}
//         >
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 20 20"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="mr-2"
//           >
//             <path
//               d="M17.5 5.83337H2.5C2.04 5.83337 1.66667 6.20671 1.66667 6.66671V15.8334C1.66667 16.2934 2.04 16.6667 2.5 16.6667H17.5C17.96 16.6667 18.3333 16.2934 18.3333 15.8334V6.66671C18.3333 6.20671 17.96 5.83337 17.5 5.83337Z"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M13.3333 16.6667V4.16671C13.3333 3.94569 13.2455 3.73373 13.0893 3.57745C12.933 3.42117 12.721 3.33337 12.5 3.33337H7.5C7.27899 3.33337 7.06702 3.42117 6.91074 3.57745C6.75446 3.73373 6.66667 3.94569 6.66667 4.16671V16.6667"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           <span className="font-semibold text-sm">Package</span>
//         </button>

//         <button
//           onClick={() => handleTabChange("hotel")}
//           className={`flex items-center justify-center transition-all duration-400 ease-in-out ${
//             activeTab === "hotel"
//               ? "bg-white text-gray-800"
//               : "bg-transparent text-gray-800"
//           }`}
//           style={{
//             width: "107px",
//             height: "40px",
//             borderTopLeftRadius: "8px",
//             borderTopRightRadius: "8px",
//             borderBottomLeftRadius: "8px",
//             borderBottomRightRadius: "8px"
//           }}
//         >
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 20 20"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="mr-2"
//           >
//             <path
//               d="M1.66666 18.3334V6.66669C1.66666 6.22466 1.84225 5.8007 2.15481 5.48814C2.46737 5.17558 2.89133 5.00002 3.33333 5.00002H16.6667C17.1087 5.00002 17.5326 5.17558 17.8452 5.48814C18.1577 5.8007 18.3333 6.22466 18.3333 6.66669V18.3334"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M1.66666 18.3334H18.3333"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M10.8333 5.00002V1.66669"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M9.16667 5.00002V1.66669"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M5 10.0001H7.5"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M12.5 10.0001H15"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M5 14.1667H7.5"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M12.5 14.1667H15"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           <span className="font-semibold text-sm">Hotel</span>
//         </button>

//         <button
//           onClick={() => handleTabChange("flight")}
//           className={`flex items-center justify-center transition-all duration-300 ease-in-out ${
//             activeTab === "flight"
//               ? "bg-white text-gray-800"
//               : "bg-transparent text-gray-800"
//           }`}
//           style={{
//             width: "128.41px",
//             height: "40px",
//             borderTopLeftRadius: "8px",
//             borderTopRightRadius: "8px",
//             borderBottomLeftRadius: "8px",
//             borderBottomRightRadius: "8px"
//           }}
//         >
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 20 20"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="mr-2"
//           >
//             <path
//               d="M16.6667 13.3334L9.16667 8.33337L10.8333 2.50004C10.9304 2.14189 11.1401 1.82659 11.433 1.5967C11.726 1.36682 12.0862 1.23385 12.4613 1.21563C12.8363 1.1974 13.2075 1.29472 13.5203 1.49475C13.8331 1.69478 14.0711 1.98752 14.2 2.33337L18.3333 13.3334H16.6667Z"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M3.33333 13.3333L10.8333 8.33333L9.16666 2.49999C9.0696 2.14184 8.85989 1.82654 8.56697 1.59666C8.27405 1.36677 7.91381 1.23381 7.53875 1.21558C7.16369 1.19735 6.79252 1.29467 6.47971 1.4947C6.1669 1.69473 5.92886 1.98748 5.79999 2.33333L1.66666 13.3333H3.33333Z"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M6.66667 13.3333H13.3333V16.6667C13.3333 17.1087 13.1577 17.5326 12.8452 17.8452C12.5326 18.1577 12.1087 18.3333 11.6667 18.3333H8.33333C7.89131 18.3333 7.46738 18.1577 7.15482 17.8452C6.84226 17.5326 6.66667 17.1087 6.66667 16.6667V13.3333Z"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           <span className="font-semibold text-sm">Flight</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TravelTabs;

"use client";

import { useState } from "react";
import { useSearch } from "../../../context/searchContext";

const TravelTabs = () => {
  const { searchParams, updateSearchParams } = useSearch();
  const [activeTab, setActiveTab] = useState<"package" | "hotel" | "flight">(
    searchParams.travelType || "package"
  );

  const handleTabChange = (tab: "package" | "hotel" | "flight") => {
    setActiveTab(tab);
    updateSearchParams({ travelType: tab });
  };

  return (
    <div className="flex justify-center mb-4">
      <div
        className="flex bg-white/30 backdrop-blur-sm overflow-hidden"
        style={{
          width: "365.41px",
          height: "40px",
          borderRadius: "8px",
          gap: "0",
        }}
      >
        <button
          onClick={() => handleTabChange("package")}
          className={`flex items-center justify-center transition-all duration-300 ease-in-out ${
            activeTab === "package"
              ? "bg-white text-gray-800"
              : "bg-transparent text-white"
          }`}
          style={{
            width: "130px",
            height: "40px",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M17.5 5.83337H2.5C2.04 5.83337 1.66667 6.20671 1.66667 6.66671V15.8334C1.66667 16.2934 2.04 16.6667 2.5 16.6667H17.5C17.96 16.6667 18.3333 16.2934 18.3333 15.8334V6.66671C18.3333 6.20671 17.96 5.83337 17.5 5.83337Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3333 16.6667V4.16671C13.3333 3.94569 13.2455 3.73373 13.0893 3.57745C12.933 3.42117 12.721 3.33337 12.5 3.33337H7.5C7.27899 3.33337 7.06702 3.42117 6.91074 3.57745C6.75446 3.73373 6.66667 3.94569 6.66667 4.16671V16.6667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-semibold text-sm">Package</span>
        </button>

        <button
          onClick={() => handleTabChange("hotel")}
          className={`flex items-center justify-center transition-all duration-400 ease-in-out ${
            activeTab === "hotel"
              ? "bg-white text-gray-800"
              : "bg-transparent text-white"
          }`}
          style={{
            width: "107px",
            height: "40px",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M1.66666 18.3334V6.66669C1.66666 6.22466 1.84225 5.8007 2.15481 5.48814C2.46737 5.17558 2.89133 5.00002 3.33333 5.00002H16.6667C17.1087 5.00002 17.5326 5.17558 17.8452 5.48814C18.1577 5.8007 18.3333 6.22466 18.3333 6.66669V18.3334"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.66666 18.3334H18.3333"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.8333 5.00002V1.66669"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.16667 5.00002V1.66669"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 10.0001H7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 10.0001H15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 14.1667H7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 14.1667H15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-semibold text-sm">Hotel</span>
        </button>

        <button
          onClick={() => handleTabChange("flight")}
          className={`flex items-center justify-center transition-all duration-300 ease-in-out ${
            activeTab === "flight"
              ? "bg-white text-gray-800"
              : "bg-transparent text-white"
          }`}
          style={{
            width: "128.41px",
            height: "40px",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M16.6667 13.3334L9.16667 8.33337L10.8333 2.50004C10.9304 2.14189 11.1401 1.82659 11.433 1.5967C11.726 1.36682 12.0862 1.23385 12.4613 1.21563C12.8363 1.1974 13.2075 1.29472 13.5203 1.49475C13.8331 1.69478 14.0711 1.98752 14.2 2.33337L18.3333 13.3334H16.6667Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.33333 13.3333L10.8333 8.33333L9.16666 2.49999C9.0696 2.14184 8.85989 1.82654 8.56697 1.59666C8.27405 1.36677 7.91381 1.23381 7.53875 1.21558C7.16369 1.19735 6.79252 1.29467 6.47971 1.4947C6.1669 1.69473 5.92886 1.98748 5.79999 2.33333L1.66666 13.3333H3.33333Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66667 13.3333H13.3333V16.6667C13.3333 17.1087 13.1577 17.5326 12.8452 17.8452C12.5326 18.1577 12.1087 18.3333 11.6667 18.3333H8.33333C7.89131 18.3333 7.46738 18.1577 7.15482 17.8452C6.84226 17.5326 6.66667 17.1087 6.66667 16.6667V13.3333Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-semibold text-sm">Flight</span>
        </button>
      </div>
    </div>
  );
};

export default TravelTabs;
