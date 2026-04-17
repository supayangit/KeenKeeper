"use client";

import React, { useState } from 'react';
import { Clock4, ChartLine, House, Menu, X } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // active route
    const isActive = (path) => {
        if (path === "/") {
            return pathname === "/" || pathname.startsWith("/friends");
        }
        return pathname.startsWith(path);
    };

    // Dynamic class for active
    const navClass = (path) =>
        `flex items-center gap-2 px-4 py-2 rounded transition-all ${
            isActive(path)
                ? "bg-[#244D3F] text-white"
                : "text-gray-700 hover:bg-gray-100"
        }`;

    return (
        <div className="w-full border-b border-gray-300 bg-white">
            <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-16">

                {/* Logo */}
                <span className='text-[20px] sm:text-[22px] lg:text-[24px] text-[#244D3F]'>
                    <span className='font-bold'>Keen</span>
                    Keeper
                </span>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex items-center gap-3 text-[14px]">
                    <Link href="/" className={navClass("/")}>
                        <House size={18} />
                        Home
                    </Link>

                    <Link href="/timeline" className={navClass("/timeline")}>
                        <Clock4 size={18} />
                        Timeline
                    </Link>

                    <Link href="/stats" className={navClass("/stats")}>
                        <ChartLine size={18} />
                        Stats
                    </Link>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col gap-2 px-4 pb-4 text-[14px]">
                    <Link href="/" className={navClass("/")} onClick={() => setIsOpen(false)}>
                        <House size={18} />
                        Home
                    </Link>

                    <Link href="/timeline" className={navClass("/timeline")} onClick={() => setIsOpen(false)}>
                        <Clock4 size={18} />
                        Timeline
                    </Link>

                    <Link href="/stats" className={navClass("/stats")} onClick={() => setIsOpen(false)}>
                        <ChartLine size={18} />
                        Stats
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;