"use client";

import React from 'react';
import { Clock4, ChartLine, House } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    // active route
    const isActive = (path) => {
        if (path === "/") {
            // Home active on root AND friend pages
            return pathname === "/" || pathname.startsWith("/friends");
        }
        return pathname.startsWith(path);
    };

    // Dynamic class for active
    const navClass = (path) =>
        `btn border-none rounded-box p-1.5 flex items-center gap-2 transition-all ${
            isActive(path)
                ? "bg-[#244D3F] text-white"
                : "bg-transparent text-gray-700 hover:bg-gray-100"
        }`;

    return (
        <div className="flex justify-between items-center py-4 px-20 border-b border-gray-300">

            {/* Logo */}
            <span className='text-[24px] text-[#244D3F]'>
                <span className='font-bold'>Keen</span>
                Keeper
            </span>

            {/* Nav */}
            <ul className="menu lg:menu-horizontal text-[14px] gap-2">

                <Link href="/" className={navClass("/")}>
                    <House />
                    Home
                </Link>

                <Link href="/timeline" className={navClass("/timeline")}>
                    <Clock4 />
                    Timeline
                </Link>

                <Link href="/stats" className={navClass("/stats")}>
                    <ChartLine />
                    Stats
                </Link>

            </ul>
        </div>
    );
};

export default Header;