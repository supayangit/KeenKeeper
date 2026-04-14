"use client";
import React from 'react';
import { Clock4 } from 'lucide-react';
import { ChartLine } from 'lucide-react';
import { House } from 'lucide-react';

const Header = () => {
    return (
        <div className="flex justify-between items-center py-4 px-20">
            <span className='text-[24px] text-[#244D3F]'>
                <span className='font-bold'>Keen</span>
                Keeper
            </span>

            <ul className="menu lg:menu-horizontal rounded-box text-[16px]">
                <li className='bg-[#244D3F] text-white' >
                    <a>
                        <House />
                        Home
                    </a>
                </li>
                <li>
                    <a>
                        <Clock4 />
                        Timeline
                    </a>
                </li>
                <li>
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