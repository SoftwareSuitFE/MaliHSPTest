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
      <div className="bg-[#F6F6F8] py-1">
        <div className="container mx-auto flex justify-end items-center px-4">
          {/* All elements aligned to the right */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-[#5c5c5c] hover:text-[#0057b8] text-xs py-2 mr-4"
            >
              B2B platform
            </Link>
            <Link
              href="/"
              className="text-[#5c5c5c] hover:text-[#0057b8] text-xs py-2 mr-4"
            >
              Client Care
            </Link>
            <Link
              href="/"
              className="text-[#5c5c5c] hover:text-[#0057b8] text-xs py-2 mr-6"
            >
              Contact
            </Link>

            <div className="flex items-center text-[#5c5c5c] mr-4">
              <span className="text-[#ED9636] mr-1">
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
              <span className="text-xs">+4021 210 17 17</span>
            </div>

            {/* Favorite Button */}
            <div className="flex items-center text-[#5c5c5c] mr-4">
              <span className="text-[#ED9636] mr-1">
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
            <div className="relative mr-4">
              <Input
                prefix={
                  <SearchOutlined
                    className="text-gray-400"
                    style={{ fontSize: "16px" }}
                  />
                }
                placeholder="Destination or Hotel"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white rounded-full text-xs h-8 w-[200px]"
                style={{ borderColor: "#E2E2E2" }}
              />
            </div>

            {/* EN Flag with Dropdown - Aligned properly */}
            <div className="flex items-center text-[#5c5c5c]">
              <span className="mr-1 flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              </span>
              <span className="text-xs">EN</span>
              <span className="ml-1 flex items-center">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 10.6667L4 6.66667H12L8 10.6667Z" fill="#5c5c5c" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-[156.17px] h-[39.91px]">
                <Image
                  src="/images/travelgoP.png"
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
              className="text-sm text-black hover:text-[#0057b8] w-[139px] h-[17px] flex items-center"
            >
              Popular Destinations
            </Link>
            <Link
              href="/"
              className="text-sm text-black hover:text-[#0057b8] w-[72px] h-[17px] flex items-center"
            >
              Top Hotels
            </Link>
            <Link
              href="/"
              className="text-sm text-black hover:text-[#0057b8] w-[79px] h-[17px] flex items-center"
            >
              Last Minute
            </Link>
            <Link
              href="/"
              className="text-sm text-black hover:text-[#0057b8] w-[101px] h-[17px] flex items-center"
            >
              Recommended
            </Link>
            <Link
              href="/"
              className="text-sm text-black hover:text-[#0057b8] w-[106px] h-[17px] flex items-center"
            >
              Charter Antalya
            </Link>
            <Link
              href="/"
              className="text-sm text-black hover:text-[#0057b8] w-[125px] h-[17px] flex items-center"
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
