"use client";

import Header from "./header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
}

const Layout = ({ children, showHeader = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Header />}
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} TravelGo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
