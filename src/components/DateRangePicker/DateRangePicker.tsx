"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Checkbox } from "antd";
import dayjs from "dayjs";
import { LeftOutlined, RightOutlined, CloseOutlined } from "@ant-design/icons";

interface DateRangePickerProps {
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
  onChange: (startDate: dayjs.Dayjs, endDate: dayjs.Dayjs) => void;
  onClose: () => void;
  visible: boolean;
  triggerRef: React.RefObject<HTMLElement>;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onChange,
  onClose,
  visible,
  triggerRef,
}) => {
  const [currentMonths, setCurrentMonths] = useState<
    [dayjs.Dayjs, dayjs.Dayjs]
  >([
    dayjs(`${startDate.year()}-${startDate.month() + 1}-01`),
    dayjs(`${startDate.year()}-${startDate.month() + 2}-01`),
  ]);

  const [selectedRange, setSelectedRange] = useState<
    [dayjs.Dayjs, dayjs.Dayjs]
  >([startDate, endDate]);

  const [isFlexible, setIsFlexible] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Seçilen tarih aralığı için gece sayısını hesapla
  const nights = selectedRange[1].diff(selectedRange[0], "day");

  // Input pozisyonunu hesapla
  useEffect(() => {
    if (visible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: Math.max(rect.width, 630), // Minimum 630px genişlik
      });
    }
  }, [visible, triggerRef]);

  // Dışarı tıklandığında dropdown kapanır
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
  }, [onClose]);

  // Önceki aya git
  const goToPreviousMonth = () => {
    setCurrentMonths([
      currentMonths[0].subtract(1, "month"),
      currentMonths[1].subtract(1, "month"),
    ]);
  };

  // Sonraki aya git
  const goToNextMonth = () => {
    setCurrentMonths([
      currentMonths[0].add(1, "month"),
      currentMonths[1].add(1, "month"),
    ]);
  };

  // Tarih seçimi
  const handleDateClick = (date: dayjs.Dayjs) => {
    // Eğer henüz hiç tarih seçilmemişse veya iki tarih de seçilmişse
    if (!selectedRange[0] || (selectedRange[0] && selectedRange[1])) {
      setSelectedRange([date, date]);
    }
    // Eğer sadece başlangıç tarihi seçilmişse
    else if (selectedRange[0] && !selectedRange[1]) {
      // Eğer seçilen tarih, başlangıç tarihinden önce ise
      if (date.isBefore(selectedRange[0])) {
        setSelectedRange([date, selectedRange[0]]);
      } else {
        setSelectedRange([selectedRange[0], date]);
      }

      // Tarih seçimi tamamlandıysa parent'a bildir
      onChange(
        date.isBefore(selectedRange[0]) ? date : selectedRange[0],
        date.isBefore(selectedRange[0]) ? selectedRange[0] : date
      );
    }
  };

  // Tarihin seçili olup olmadığını kontrol et
  const isDateSelected = (date: dayjs.Dayjs) => {
    return (
      date.isSame(selectedRange[0], "day") ||
      date.isSame(selectedRange[1], "day")
    );
  };

  // Tarihin aralık içinde olup olmadığını kontrol et
  const isDateInRange = (date: dayjs.Dayjs) => {
    return (
      selectedRange[0] &&
      selectedRange[1] &&
      date.isAfter(selectedRange[0], "day") &&
      date.isBefore(selectedRange[1], "day")
    );
  };

  // Ay takvimini oluştur
  const renderMonth = (month: dayjs.Dayjs) => {
    const monthName = month.format("MMMM YYYY");
    const daysInMonth = month.daysInMonth();
    const firstDayOfMonth = month.startOf("month").day(); // 0: Pazar, 1: Pazartesi, ...

    // Hafta içi başlıkları
    const weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

    // Ayın günlerini oluştur
    const days = [];

    // Ayın ilk gününe kadar olan boşlukları ekle (Pazartesi başlangıçlı)
    const firstDayAdjusted = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    for (let i = 0; i < firstDayAdjusted; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    // Ayın günlerini ekle
    for (let day = 1; day <= daysInMonth; day++) {
      const date = month.date(day);
      const isSelected = isDateSelected(date);
      const isInRange = isDateInRange(date);

      days.push(
        <div
          key={`day-${day}`}
          className={`w-8 h-8 flex items-center justify-center cursor-pointer rounded-full
            ${isSelected ? "bg-orange-500 text-white" : ""}
            ${isInRange ? "bg-orange-200 text-orange-800" : ""}
            ${!isSelected && !isInRange ? "hover:bg-gray-100" : ""}
          `}
          onClick={() => handleDateClick(date)}
        >
          {day}
        </div>
      );
    }

    return (
      <div className="flex-1 px-2">
        <div className="text-center mb-4 font-medium">{monthName}</div>
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {weekdays.map((day) => (
            <div key={day} className="text-gray-500 text-xs">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">{days}</div>
      </div>
    );
  };

  if (!visible || typeof document === "undefined") return null;

  const datePickerContent = (
    <div
      ref={dropdownRef}
      className="fixed bg-white rounded-lg shadow-lg z-50"
      style={{
        top: `${dropdownPosition.top}px`,
        left: `${dropdownPosition.left}px`,
        width: `${dropdownPosition.width}px`,
        maxWidth: "630px",
      }}
    >
      <div className="p-4">
        {/* Üst Kısım: Gece Sayısı, Tarih Aralığı, Esnek Tarihler ve Kapatma Butonu */}
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <span className="text-orange-500 font-medium">{nights} Nights</span>
            <span className="text-gray-600">
              {selectedRange[0].format("D MMM")} -{" "}
              {selectedRange[1].format("D MMM")}
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Checkbox
                checked={isFlexible}
                onChange={(e) => setIsFlexible(e.target.checked)}
              >
                <span className="ml-1">
                  <span className="font-medium">+/- 3 days</span>{" "}
                  <span className="text-gray-400">Flexible Dates</span>
                </span>
              </Checkbox>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <CloseOutlined />
            </button>
          </div>
        </div>

        {/* Takvim Kısmı */}
        <div className="relative flex justify-between px-4">
          {/* Önceki Ay Butonu */}
          <button
            onClick={goToPreviousMonth}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <LeftOutlined />
          </button>

          {/* Aylar */}
          {renderMonth(currentMonths[0])}
          {renderMonth(currentMonths[1])}

          {/* Sonraki Ay Butonu */}
          <button
            onClick={goToNextMonth}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <RightOutlined />
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(datePickerContent, document.body);
};

export default DateRangePicker;
