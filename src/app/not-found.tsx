'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';

const NotFound = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4 py-12">
      {/* 404 Container */}
      <div className="max-w-3xl w-full flex flex-col items-center justify-center text-center">
        {/* Animated 404 */}
        <div
          className={`relative mb-6 transition-all duration-700 transform ${isLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        >
          <div className="text-[120px] md:text-[180px] font-bold text-orange-500 opacity-10 select-none">
            404
          </div>

          {/* Airplane path animation */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute h-[50px] w-[300px] top-1/2 left-[calc(50%-150px)]">
              <svg
                className="absolute h-8 w-8 text-orange-500 animate-float"
                style={{
                  left: '10%',
                  animationDelay: '0.5s',
                  animationDuration: '3s',
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15L15 9.5V5C15 4.17157 15.6716 3.5 16.5 3.5C17.3284 3.5 18 4.17157 18 5C18 5.82843 17.3284 6.5 16.5 6.5M21 15L12 20L3 15M21 15V19L12 24L3 19V15M12 20V24M3 15L9 9.5V5C9 3.89543 9.89543 3 11 3C12.1046 3 13 3.89543 13 5V9.5L9.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Compass animation */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className={`w-24 h-24 md:w-32 md:h-32 transition-all duration-700 transform ${isLoaded ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-orange-500"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M13.5 8.5L12 3L10.5 8.5L12 14L13.5 8.5Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 15.5L12 21L13.5 15.5L12 10L10.5 15.5Z"
                  fill="#ED8936"
                  stroke="#ED8936"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="2" fill="#ED8936" stroke="#ED8936" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div
          className={`bg-white shadow-xl rounded-xl p-8 md:p-12 w-full max-w-2xl mb-8 border border-gray-100 transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {t('NotFound', 'title')}
          </h1>
          <h2 className="text-xl text-orange-500 font-semibold mb-4">
            {t('NotFound', 'message')}
          </h2>
          <p className="text-gray-600 mb-8">{t('NotFound', 'description')}</p>

          {/* Travel Theme Graphics */}
          <div className="relative h-24 mb-10">
            {/* Map path dashed line */}
            <div className="absolute left-0 right-0 top-1/2 border-t-2 border-dashed border-gray-300"></div>

            {/* Travel Icons */}
            <div className="absolute left-0 top-0">
              <div
                className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center animate-float"
                style={{ animationDelay: '0s' }}
              >
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute left-1/4 bottom-0">
              <div
                className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center animate-float"
                style={{ animationDelay: '0.5s' }}
              >
                <svg
                  className="w-5 h-5 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
              <div
                className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center animate-float"
                style={{ animationDelay: '1s' }}
              >
                <svg
                  className="w-6 h-6 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10.5V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V16C21 17.1046 20.1046 18 19 18H11.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 21L7 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute right-1/4 bottom-0">
              <div
                className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <svg
                  className="w-5 h-5 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute right-0 top-0">
              <div
                className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center animate-float"
                style={{ animationDelay: '2s' }}
              >
                <svg
                  className="w-6 h-6 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3V4M12 20V21M21 12H20M4 12H3M18.364 18.364L17.657 17.657M6.343 6.343L5.636 5.636M18.364 5.636L17.657 6.343M6.343 17.657L5.636 18.364M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Link
            href="/"
            className={`inline-flex items-center justify-center space-x-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              {t('NotFound', 'actionButton')}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
