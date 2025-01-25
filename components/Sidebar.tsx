"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Define the type for menu items
interface MenuItem {
  name: string;
  link: string;
}

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true); // Sidebar is open by default
  const [isMobile, setIsMobile] = useState<boolean>(false); // Tracks mobile view

  // Handle window resize to toggle between mobile and desktop modes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile view if width <= 768px
      setIsOpen(window.innerWidth > 768); // Always open sidebar on desktop
    };

    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Menu items array
  const menuItems: MenuItem[] = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/courses" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`
          ${isMobile ? "fixed" : "static"} 
          ${isOpen ? "w-64" : "w-20"}  // Sidebar width (64 for open, 20 for closed)
          h-full bg-gradient-to-b from-indigo-600 to-indigo-900 text-white transition-all duration-300 z-20
        `}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className={`${isOpen ? "block" : "hidden"} font-bold text-xl`}>
            WisdomWave
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white lg:hidden"
            aria-label="Toggle Sidebar"
          >
            {isOpen ? "←" : "☰"}
          </Button>
        </div>
        <nav className="mt-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="block py-2 px-4 hover:bg-indigo-700 rounded-lg transition-all duration-300"
            >
              <span className={`${isOpen ? "inline" : "hidden"} ml-2`}>
                {item.name}
              </span>
              {!isOpen && <span className="text-center">{item.name[0]}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile view */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          isMobile
            ? (isOpen ? "ml-64" : "ml-20") // Mobile view: adjust margin when sidebar open or closed
            : (isOpen ? "ml-6" : "ml-20") // Desktop view: adjust margin for open/closed sidebar
        }`}
      >
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
