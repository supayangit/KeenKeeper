"use client";
import React from 'react';
import { Clock4 } from 'lucide-react';
import { ChartLine } from 'lucide-react';
import { House } from 'lucide-react';

const Header = () => {
    return (
        <div className="flex justify-between items-center py-4 px-20 border-b border-gray-300">
            <span className='text-[24px] text-[#244D3F]'>
                <span className='font-bold'>Keen</span>
                Keeper
            </span>

            <ul className="menu lg:menu-horizontal text-[14px]">
                <li className='bg-[#244D3F] text-white rounded-box p-1.5' >
                    <a>
                        <House />
                        Home
                    </a>
                </li>
                <li className='rounded-box p-1.5'>
                    <a>
                        <Clock4 />
                        Timeline
                    </a>
                </li>
                <li className='rounded-box p-1.5'>
                    <a>
                        <ChartLine />
                        Stats
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Header;