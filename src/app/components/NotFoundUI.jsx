import React from 'react';
import Link from 'next/link';

const NotFoundUI = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-[50vh] text-center space-y-4">

                <div className="text-7xl">⚠️</div>

                <h1 className="text-5xl font-bold text-[#244D3F]">404</h1>

                <p className="text-lg text-gray-600">
                    Oooooops! Page not found
                </p>

                <Link href="/" className="btn bg-[#244D3F] text-white">
                    Go Home
                </Link>

            </div>
        </div>
    );
};

export default NotFoundUI;