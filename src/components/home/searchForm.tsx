// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "antd";
// import dayjs from "dayjs";
// import { useSearch } from "../../../context/searchContext";

// const SearchForm = () => {
//   const router = useRouter();
//   const { searchParams, updateSearchParams } = useSearch();

//   const [fromLocation, setFromLocation] = useState(searchParams.from || "");
//   const [destination, setDestination] = useState(
//     searchParams.destination || ""
//   );
//   const [date, setDate] = useState<dayjs.Dayjs | null>(
//     searchParams.date ? dayjs(searchParams.date) : dayjs("2023-04-15")
//   );
//   const [nights, setNights] = useState(searchParams.nights || 5);
//   const [people, setPeople] = useState(
//     (searchParams.participants?.adults || 2) +
//       (searchParams.participants?.children || 0) || 2
//   );

//   const handleSearch = (e) => {
//     e.preventDefault(); // Prevent any default form submission

//     updateSearchParams({
//       from: fromLocation,
//       destination,
//       date: date ? date.format("YYYY-MM-DD") : "",
//       nights,
//       participants: {
//         adults: Math.max(1, Math.floor(people * 0.7)),
//         children: Math.max(0, Math.floor(people * 0.3)),
//       },
//     });

//     // Explicitly navigate to search page
//     router.push("/search");
//   };

//   return (
//     <div
//       className="flex items-center justify-between bg-white/16 backdrop-blur-sm rounded-lg shadow-lg w-full"
//       style={{
//         width: "930px",
//         height: "92px",
//         padding: "16px",
//         gap: "8px",
//         borderRadius: "8px",
//         backdropFilter: "blur(4px)",
//         boxShadow: "0px 0px 32px 0px #00000029",
//       }}
//     >
//       {/* Inner white container */}
//       <div
//         className="flex items-center justify-between bg-white rounded-lg"
//         style={{
//           width: "748px",
//           height: "60px",
//           padding: "8px",
//           gap: "8px",
//           borderRadius: "8px",
//         }}
//       >
//         {/* From Field */}
//         <div
//           className="flex items-center"
//           style={{
//             width: "170px",
//             height: "40px",
//             gap: "8px",
//             padding: "8px",
//             borderRight: "1px solid #E1E7EF",
//           }}
//         >
//           <div>
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
//                 stroke="#142347"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
//                 stroke="#142347"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//           <div className="flex flex-col">
//             <div className="text-gray-500 text-sm">From</div>
//             <div className="font-medium text-[#142347]">From</div>
//           </div>
//         </div>

//         {/* Destination Field */}
//         <div
//           className="flex items-center"
//           style={{
//             width: "170px",
//             height: "40px",
//             gap: "8px",
//             padding: "8px",
//             borderRight: "1px solid #E1E7EF",
//           }}
//         >
//           <div>
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
//                 stroke="#142347"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M21 21L17 17"
//                 stroke="#142347"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//           <div className="flex flex-col">
//             <div className="text-gray-500 text-sm">Destination</div>
//             <div className="font-medium text-[#142347]">Destination</div>
//           </div>
//         </div>

//         {/* Date Field */}
//         <div
//           className="flex items-center"
//           style={{
//             width: "115px",
//             height: "40px",
//             gap: "8px",
//             borderRight: "1px solid #E1E7EF",
//           }}
//         >
//           <div>
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <rect
//                 x="3"
//                 y="6"
//                 width="18"
//                 height="15"
//                 rx="2"
//                 stroke="#142347"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M3 10H21"
//                 stroke="#142347"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M16 2V6"
//                 stroke="#142347"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M8 2V6"
//                 stroke="#142347"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//           <div className="flex flex-col">
//             <div className="text-gray-500 text-sm">Date</div>
//             <div className="font-medium text-[#142347]">15 Apr</div>
//           </div>
//         </div>

//         {/* Nights Field */}
//         <div
//           className="flex items-center"
//           style={{
//             width: "110px",
//             height: "40px",
//             gap: "8px",
//             borderRight: "1px solid #E1E7EF",
//           }}
//         >
//           <div>
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
//                 stroke="#142347"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M12.79 8.79L9.5 12.07L12.79 15.36"
//                 stroke="#142347"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//           <div className="flex flex-col">
//             <div className="text-gray-500 text-sm">Nights</div>
//             <div className="font-medium text-[#142347]">5 Nights</div>
//           </div>
//         </div>

//         {/* Participants Field */}
//         <div
//           className="flex items-center"
//           style={{
//             width: "135px",
//             height: "40px",
//             gap: "8px",
//           }}
//         >
//           <div>
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
//                 stroke="#142347"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
//                 stroke="#142347"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
//                 stroke="#142347"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
//                 stroke="#142347"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//           <div className="flex flex-col">
//             <div className="text-gray-500 text-sm">Participants</div>
//             <div className="font-medium text-[#142347]">2 People</div>
//           </div>
//         </div>
//       </div>

//       {/* Search Button */}
//       <Button
//         type="primary"
//         onClick={handleSearch}
//         className="h-full border-0 hover:bg-[#d88630] text-white font-bold uppercase flex items-center justify-center"
//         style={{
//           width: "142px",
//           height: "60px",
//           borderRadius: "8px",
//           backgroundColor: "#ED8936",
//           fontSize: "16px",
//           fontWeight: "700",
//         }}
//       >
//         SEARCH
//       </Button>
//     </div>
//   );
// };

// export default SearchForm;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, DatePicker } from "antd";
import dayjs from "dayjs";
import { useSearch } from "../../../context/searchContext";

const SearchForm = () => {
  const router = useRouter();
  const { searchParams, updateSearchParams } = useSearch();

  const [fromLocation, setFromLocation] = useState(searchParams.from || "");
  const [destination, setDestination] = useState(
    searchParams.destination || ""
  );
  const [date, setDate] = useState<dayjs.Dayjs | null>(
    searchParams.date ? dayjs(searchParams.date) : dayjs("2023-04-15")
  );
  const [nights, setNights] = useState(searchParams.nights || 5);
  const [people, setPeople] = useState(
    (searchParams.participants?.adults || 2) +
      (searchParams.participants?.children || 0) || 2
  );

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent any default form submission

    updateSearchParams({
      from: fromLocation,
      destination,
      date: date ? date.format("YYYY-MM-DD") : "",
      nights,
      participants: {
        adults: Math.max(1, Math.floor(people * 0.7)),
        children: Math.max(0, Math.floor(people * 0.3)),
      },
    });

    // Explicitly navigate to search page
    router.push("/search");
  };

  function handleDateChange(date: Dayjs, dateString: string | string[]): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div
      className="flex items-center justify-between bg-white/16 backdrop-blur-sm rounded-lg shadow-lg w-full"
      style={{
        width: "930px",
        height: "92px",
        padding: "16px",
        gap: "8px",
        borderRadius: "8px",
        backdropFilter: "blur(4px)",
        boxShadow: "0px 0px 32px 0px #00000029",
      }}
    >
      {/* Inner white container */}
      <div
        className="flex items-center justify-between bg-white rounded-lg"
        style={{
          width: "748px",
          height: "60px",
          padding: "8px",
          gap: "8px",
          borderRadius: "8px",
        }}
      >
        {/* From Field */}
        <div
          className="flex items-center"
          style={{
            width: "170px",
            height: "40px",
            gap: "8px",
            padding: "8px",
            borderRight: "1px solid #E1E7EF",
          }}
        >
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="#142347"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                stroke="#142347"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="From"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              className="w-full font-medium bg-transparent focus:outline-none"
              style={{
                color: "#142347",
                fontSize: "14px",
                fontWeight: "500",
                placeholder: "#64748A",
              }}
            />
          </div>
        </div>

        {/* Destination Field */}
        <div
          className="flex items-center"
          style={{
            width: "170px",
            height: "40px",
            gap: "8px",
            padding: "8px",
            borderRight: "1px solid #E1E7EF",
          }}
        >
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#142347"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L17 17"
                stroke="#142347"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full font-medium bg-transparent focus:outline-none"
              style={{
                color: "#142347",
                fontSize: "14px",
                fontWeight: "500",
                placeholder: "#64748A",
              }}
            />
          </div>
        </div>

        {/* Date Field */}
        <div
          className="flex items-center"
          style={{
            width: "115px",
            height: "40px",
            gap: "8px",
            borderRight: "1px solid #E1E7EF",
          }}
        >
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="6"
                width="18"
                height="15"
                rx="2"
                stroke="#142347"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 10H21"
                stroke="#142347"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V6"
                stroke="#142347"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 2V6"
                stroke="#142347"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-500 text-sm">Date</div>
            <DatePicker
              format="DD MMM"
              placeholder="Select date"
              value={date}
              onChange={handleDateChange}
              bordered={false}
              allowClear={false}
              className="p-0 w-full bg-transparent text-[#142347]"
              style={{ fontSize: "14px", fontWeight: "500" }}
              suffixIcon={null}
              dropdownStyle={{ fontFamily: "Inter" }}
              defaultValue={dayjs("2023-04-15")}
            />
          </div>
        </div>

        {/* Nights Field */}
        <div
          className="flex items-center"
          style={{
            width: "110px",
            height: "40px",
            gap: "8px",
            borderRight: "1px solid #E1E7EF",
          }}
        >
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#142347"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.79 8.79L9.5 12.07L12.79 15.36"
                stroke="#142347"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-500 text-sm">Nights</div>
            <div className="font-medium text-[#142347]">5 Nights</div>
          </div>
        </div>

        {/* Participants Field */}
        <div
          className="flex items-center"
          style={{
            width: "135px",
            height: "40px",
            gap: "8px",
          }}
        >
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                stroke="#142347"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                stroke="#142347"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                stroke="#142347"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                stroke="#142347"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-500 text-sm">Participants</div>
            <div className="font-medium text-[#142347]">2 People</div>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <Button
        type="primary"
        onClick={handleSearch}
        className="h-full border-0 hover:bg-[#d88630] text-white font-bold uppercase flex items-center justify-center"
        style={{
          width: "142px",
          height: "60px",
          borderRadius: "8px",
          backgroundColor: "#ED8936",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        SEARCH
      </Button>
    </div>
  );
};

export default SearchForm;
