'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Checkbox } from 'antd';
import dayjs from 'dayjs';
import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons';
import { useLanguage } from '@/hooks/useLanguage';

interface DateRangePickerProps {
  startDate?: dayjs.Dayjs;
  endDate?: dayjs.Dayjs;
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
  const { t } = useLanguage();

  // Güvenli başlangıç: startDate varsa kullan, yoksa bugünün tarihi
  const safeStart = startDate && dayjs.isDayjs(startDate) ? startDate : dayjs();
  const safeEnd =
    endDate && dayjs.isDayjs(endDate) ? endDate : safeStart.add(1, 'day');

  // Ay bilgilerini orijinal tasarıma uygun şekilde başlatıyoruz
  const [currentMonths, setCurrentMonths] = useState<
    [dayjs.Dayjs, dayjs.Dayjs]
  >(() => {
    return [
      dayjs(`${safeStart.year()}-${safeStart.month() + 1}-01`),
      dayjs(`${safeStart.year()}-${safeStart.month() + 1}-01`).add(1, 'month'),
    ];
  });

  // Tarih seçimleri: startDate gelmişse onu kullan, yoksa varsayılanı (bugün)
  const [firstSelection, setFirstSelection] = useState<dayjs.Dayjs | null>(
    safeStart,
  );

  // endDate gelmişse onu kullan, yoksa ilk tarihten 1 gün sonrası
  const [secondSelection, setSecondSelection] = useState<dayjs.Dayjs | null>(
    safeEnd,
  );

  // Eğer startDate/endDate undefined ise, ilk seçim yapmamış sayalım
  const [isSelectingSecondDate, setIsSelectingSecondDate] = useState(
    !(
      startDate &&
      endDate &&
      dayjs.isDayjs(startDate) &&
      dayjs.isDayjs(endDate)
    ),
  );

  const [isFlexible, setIsFlexible] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Dinamik stiller için: CSS custom property'leri güncelle
  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.style.setProperty(
        '--dropdown-top',
        `${dropdownPosition.top}px`,
      );
      dropdownRef.current.style.setProperty(
        '--dropdown-left',
        `${dropdownPosition.left}px`,
      );
      dropdownRef.current.style.setProperty(
        '--dropdown-width',
        `${dropdownPosition.width}px`,
      );
    }
  }, [dropdownPosition]);

  // Seçilen tarih aralığından geceleri hesapla
  const nights =
    firstSelection && secondSelection
      ? secondSelection.diff(firstSelection, 'day')
      : 0;

  // Trigger elemanın konumunu hesapla
  useEffect(() => {
    if (visible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: Math.max(rect.width, 630),
      });
    }
  }, [visible, triggerRef]);

  // Dışarı tıklanırsa kapanma
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, triggerRef]);

  // Tarih aralığını güncelle ve parent'a bildir
  useEffect(() => {
    if (firstSelection && secondSelection) {
      // Eğer startDate veya endDate undefined ise veya seçilen tarihler farklıysa bildir
      if (
        !startDate ||
        !endDate ||
        !startDate.isSame(firstSelection, 'day') ||
        !endDate.isSame(secondSelection, 'day')
      ) {
        if (firstSelection.isAfter(secondSelection)) {
          onChange(secondSelection, firstSelection);
        } else {
          onChange(firstSelection, secondSelection);
        }
      }
    }
  }, [firstSelection, secondSelection, startDate, endDate, onChange]);

  // Önceki aya git
  const goToPreviousMonth = () => {
    setCurrentMonths([
      currentMonths[0].subtract(1, 'month'),
      currentMonths[1].subtract(1, 'month'),
    ]);
  };

  // Sonraki aya git
  const goToNextMonth = () => {
    setCurrentMonths([
      currentMonths[0].add(1, 'month'),
      currentMonths[1].add(1, 'month'),
    ]);
  };

  // Tarih seçimi
  const handleDateClick = (date: dayjs.Dayjs) => {
    if (!isSelectingSecondDate) {
      setFirstSelection(date);
      setSecondSelection(null);
      setIsSelectingSecondDate(true);
    } else {
      if (firstSelection) {
        if (date.isBefore(firstSelection)) {
          setSecondSelection(firstSelection);
          setFirstSelection(date);
        } else {
          setSecondSelection(date);
        }
      } else {
        setFirstSelection(date);
      }
      setIsSelectingSecondDate(false);
    }
  };

  // Yardımcı fonksiyonlar: Seçili olup olmadığını kontrol
  const isFirstSelection = (date: dayjs.Dayjs) => {
    return firstSelection && date.isSame(firstSelection, 'day');
  };

  const isSecondSelection = (date: dayjs.Dayjs) => {
    return secondSelection && date.isSame(secondSelection, 'day');
  };

  const isDateInRange = (date: dayjs.Dayjs) => {
    if (!firstSelection || !secondSelection) return false;
    const start = firstSelection.isBefore(secondSelection)
      ? firstSelection
      : secondSelection;
    const end = firstSelection.isBefore(secondSelection)
      ? secondSelection
      : firstSelection;
    return date.isAfter(start, 'day') && date.isBefore(end, 'day');
  };

  // Ay takvimini oluştur (orijinal grid yapısı)
  const renderMonth = (month: dayjs.Dayjs) => {
    const monthName = month.format('MMMM YYYY');
    const daysInMonth = month.daysInMonth();
    const firstDayOfMonth = month.startOf('month').day(); // 0: Pazar, 1: Pazartesi, ...

    // Hafta içi başlıkları: Pazartesi başlangıçlı (düzen: MO, TU, WE, TH, FR, SA, SU)
    const weekdays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

    const days = [];

    // Ayın ilk gününe kadar boşluk ekle (Pazartesi başlangıçlı)
    const firstDayAdjusted = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    for (let i = 0; i < firstDayAdjusted; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    // Ayın günlerini ekle
    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = month.date(day);
      const isFirstDay = isFirstSelection(dateObj);
      const isLastDay = isSecondSelection(dateObj);
      const inRange = isDateInRange(dateObj);

      days.push(
        <div
          key={`day-${day}`}
          className={`w-8 h-8 flex items-center justify-center cursor-pointer rounded-full
            ${isFirstDay || isLastDay ? 'bg-orange-500 text-white' : ''}
            ${inRange ? 'bg-orange-200 text-orange-800' : ''}
            ${
              !isFirstDay && !isLastDay && !inRange ? 'hover:bg-gray-100' : ''
            }`}
          onClick={() => handleDateClick(dateObj)}
        >
          {day}
        </div>,
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

  if (!visible || typeof document === 'undefined') return null;

  const displayStartDate = firstSelection;
  const displayEndDate = secondSelection;

  const datePickerContent = (
    <div
      ref={dropdownRef}
      className="fixed bg-white rounded-lg shadow-lg z-50 dateRangePickerContainer"
    >
      <div className="p-4">
        {/* Üst kısım: Gece sayısı, tarih aralığı, esnek tarih seçimi ve kapatma */}
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <span className="text-orange-500 font-medium">
              {t('DateRangePicker', 'nights', { count: nights })}
            </span>
            <span className="text-gray-600">
              {displayStartDate ? displayStartDate.format('D MMM') : ''}
              {displayStartDate && displayEndDate ? ' - ' : ''}
              {displayEndDate ? displayEndDate.format('D MMM') : ''}
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Checkbox
                checked={isFlexible}
                onChange={(e) => setIsFlexible(e.target.checked)}
              >
                <span className="ml-1">
                  <span className="font-medium">
                    {t('DateRangePicker', 'plusMinusDays')}
                  </span>{' '}
                  <span className="text-gray-400">
                    {t('DateRangePicker', 'flexibleDates')}
                  </span>
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

        {/* Takvim kısmı */}
        <div className="relative flex justify-between px-4">
          <button
            onClick={goToPreviousMonth}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none prevMonthButton"
          >
            <LeftOutlined />
          </button>

          {renderMonth(currentMonths[0])}
          {renderMonth(currentMonths[1])}

          <button
            onClick={goToNextMonth}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none nextMonthButton"
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
