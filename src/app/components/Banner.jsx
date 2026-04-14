import React from 'react';

const Banner = () => {
    return (
        <div className='pb-8 border-b border-gray-300'>
            <div className='space-y-8 text-center'>
                <h1 className="text-5xl font-bold text-center">
                    Friends to keep close in your life
                </h1>
                <p className="text-center mt-4 text-lg w-125 mx-auto text-gray-500">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.</p>
                <button className="btn text-white bg-[#244D3F]">+ Add a Friend</button>
            </div>

            <div className="flex justify-center items-center mt-10 gap-4 text-center">
                <div className='w-65 h-35 p-4 rounded-box bg-white border border-gray-300 flex flex-col justify-center items-center'>
                    <h1 className='font-semibold text-[32px]'>10</h1>
                    <p className='text-gray-500'>Total Friends</p>
                </div>
                <div className='w-65 h-35 p-4 rounded-box bg-white border border-gray-300 flex flex-col justify-center items-center'>
                    <h1 className='font-semibold text-[32px]'>3</h1>
                    <p className='text-gray-500'>On Track</p>
                </div>
                <div className='w-65 h-35 p-4 rounded-box bg-white border border-gray-300 flex flex-col justify-center items-center'>
                    <h1 className='font-semibold text-[32px]'>6</h1>
                    <p className='text-gray-500'>Need Attention</p>
                </div>
                <div className='w-65 h-35 p-4 rounded-box bg-white border border-gray-300 flex flex-col justify-center items-center'>
                    <h1 className='font-semibold text-[32px]'>12</h1>
                    <p className='text-gray-500'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;