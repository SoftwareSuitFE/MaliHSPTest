// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { createPortal } from "react-dom";
// import { CloseOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
// import dayjs from "dayjs";

// interface PersonPickerProps {
//   adults?: number;
//   children?: number;
//   onChange: (adults: number, children: number) => void;
//   onClose: () => void;
//   visible: boolean;
//   triggerRef: React.RefObject<HTMLElement>;
// }

// const PersonPicker: React.FC<PersonPickerProps> = ({
//   adults,
//   children,
//   onChange,
//   onClose,
//   visible,
//   triggerRef,
// }) => {
//   // Başlangıç değerleri güvenli şekilde ayarla
//   const safeAdults = typeof adults === "number" ? adults : 2;
//   const safeChildren = typeof children === "number" ? children : 0;

//   const [adultCount, setAdultCount] = useState(safeAdults);
//   const [childCount, setChildCount] = useState(safeChildren);

//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const [dropdownPosition, setDropdownPosition] = useState({
//     top: 0,
//     left: 0,
//     width: 0,
//   });

//   // PersonPicker görünürken, tetikleyici alanın konumunu hesapla
//   useEffect(() => {
//     if (visible && triggerRef.current) {
//       const rect = triggerRef.current.getBoundingClientRect();
//       setDropdownPosition({
//         top: rect.bottom + window.scrollY,
//         left: rect.left + window.scrollX,
//         width: Math.max(rect.width, 300), // min 300px genişlik
//       });
//     }
//   }, [visible, triggerRef]);

//   // Dışarı tıklayınca kapanma
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node) &&
//         triggerRef.current &&
//         !triggerRef.current.contains(event.target as Node)
//       ) {
//         onClose();
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [onClose, triggerRef]);

//   // PersonPicker görünmüyorsa null döndür
//   if (!visible || typeof document === "undefined") return null;

//   // +/- butonlarında onChange çağırarak parent'a bildirim yap
//   const handleDecreaseAdult = () => {
//     const newAdults = Math.max(1, adultCount - 1);
//     setAdultCount(newAdults);
//     onChange(newAdults, childCount);
//   };

//   const handleIncreaseAdult = () => {
//     const newAdults = adultCount + 1;
//     setAdultCount(newAdults);
//     onChange(newAdults, childCount);
//   };

//   const handleDecreaseChild = () => {
//     const newChildren = Math.max(0, childCount - 1);
//     setChildCount(newChildren);
//     onChange(adultCount, newChildren);
//   };

//   const handleIncreaseChild = () => {
//     const newChildren = childCount + 1;
//     setChildCount(newChildren);
//     onChange(adultCount, newChildren);
//   };

//   // PersonPicker içeriği
//   const pickerContent = (
//     <div
//       ref={dropdownRef}
//       className="fixed bg-white rounded-lg shadow-lg z-50"
//       style={{
//         top: dropdownPosition.top,
//         left: dropdownPosition.left,
//         width: dropdownPosition.width,
//       }}
//     >
//       <div className="p-4">
//         {/* Üst Bar: Başlık + Kapatma Butonu */}
//         <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
//           <span className="font-medium text-gray-800">Participants</span>
//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-gray-600 focus:outline-none"
//           >
//             <CloseOutlined />
//           </button>
//         </div>

//         {/* İçerik: Yetişkin + Çocuk */}
//         <div className="flex gap-6">
//           {/* Yetişkin */}
//           <div className="flex flex-col items-center">
//             <span className="text-sm font-semibold text-gray-700 mb-2">
//               Yetişkin Sayısı
//             </span>
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={handleDecreaseAdult}
//                 className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
//               >
//                 <MinusOutlined />
//               </button>
//               <span className="w-4 text-center">{adultCount}</span>
//               <button
//                 onClick={handleIncreaseAdult}
//                 className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
//               >
//                 <PlusOutlined />
//               </button>
//             </div>
//           </div>

//           {/* Çocuk */}
//           <div className="flex flex-col items-center">
//             <span className="text-sm font-semibold text-gray-700 mb-2">
//               Çocuk Sayısı
//             </span>
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={handleDecreaseChild}
//                 className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
//               >
//                 <MinusOutlined />
//               </button>
//               <span className="w-4 text-center">{childCount}</span>
//               <button
//                 onClick={handleIncreaseChild}
//                 className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
//               >
//                 <PlusOutlined />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Portal ile body'ye yerleştir
//   return createPortal(pickerContent, document.body);
// };

// export default PersonPicker;



"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CloseOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useLanguage } from "@/hooks/useLanguage";

interface PersonPickerProps {
  adults?: number;
  children?: number;
  onChange: (adults: number, children: number) => void;
  onClose: () => void;
  visible: boolean;
  triggerRef: React.RefObject<HTMLElement>;
}

const PersonPicker: React.FC<PersonPickerProps> = ({
  adults,
  children,
  onChange,
  onClose,
  visible,
  triggerRef,
}) => {
  const { t } = useLanguage();
  
  // Başlangıç değerleri güvenli şekilde ayarla
  const safeAdults = typeof adults === "number" ? adults : 2;
  const safeChildren = typeof children === "number" ? children : 0;

  const [adultCount, setAdultCount] = useState(safeAdults);
  const [childCount, setChildCount] = useState(safeChildren);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  // PersonPicker görünürken, tetikleyici alanın konumunu hesapla
  useEffect(() => {
    if (visible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: Math.max(rect.width, 300), // min 300px genişlik
      });
    }
  }, [visible, triggerRef]);

  // Dışarı tıklayınca kapanma
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, triggerRef]);

  // PersonPicker görünmüyorsa null döndür
  if (!visible || typeof document === "undefined") return null;

  // +/- butonlarında onChange çağırarak parent'a bildirim yap
  const handleDecreaseAdult = () => {
    const newAdults = Math.max(1, adultCount - 1);
    setAdultCount(newAdults);
    onChange(newAdults, childCount);
  };

  const handleIncreaseAdult = () => {
    const newAdults = adultCount + 1;
    setAdultCount(newAdults);
    onChange(newAdults, childCount);
  };

  const handleDecreaseChild = () => {
    const newChildren = Math.max(0, childCount - 1);
    setChildCount(newChildren);
    onChange(adultCount, newChildren);
  };

  const handleIncreaseChild = () => {
    const newChildren = childCount + 1;
    setChildCount(newChildren);
    onChange(adultCount, newChildren);
  };

  // PersonPicker içeriği
  const pickerContent = (
    <div
      ref={dropdownRef}
      className="fixed bg-white rounded-lg shadow-lg z-50"
      style={{
        top: dropdownPosition.top,
        left: dropdownPosition.left,
        width: dropdownPosition.width,
      }}
    >
      <div className="p-4">
        {/* Üst Bar: Başlık + Kapatma Butonu */}
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
          <span className="font-medium text-gray-800">{t("PersonPicker", "participants")}</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <CloseOutlined />
          </button>
        </div>

        {/* İçerik: Yetişkin + Çocuk */}
        <div className="flex gap-6">
          {/* Yetişkin */}
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-gray-700 mb-2">
              {t("PersonPicker", "adults")}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDecreaseAdult}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
              >
                <MinusOutlined />
              </button>
              <span className="w-4 text-center">{adultCount}</span>
              <button
                onClick={handleIncreaseAdult}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
              >
                <PlusOutlined />
              </button>
            </div>
          </div>

          {/* Çocuk */}
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-gray-700 mb-2">
              {t("PersonPicker", "children")}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDecreaseChild}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
              >
                <MinusOutlined />
              </button>
              <span className="w-4 text-center">{childCount}</span>
              <button
                onClick={handleIncreaseChild}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
              >
                <PlusOutlined />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Portal ile body'ye yerleştir
  return createPortal(pickerContent, document.body);
};

export default PersonPicker;