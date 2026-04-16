"use client";
import Link from "next/link";
import React from 'react';
import Image from 'next/image';

const Card = ({ friend }) => {

  //Status color mapping
  const statusStyles = {
    "overdue": "bg-red-500 text-white",
    "almost due": "bg-orange-400 text-white",
    "on-track": "bg-green-500 text-white"
  };

  // Capitalize first letters
  const formatStatus = (status) => {
    return status
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Link href={`/friend/${friend.id}`}>
    <div className='w-65 flex flex-col items-center gap-3 p-6 bg-white shadow-md rounded-xl'>
      
      <Image
        src={friend.picture}
        alt={friend.name}
        width={80}
        height={80}
        className='rounded-full'
      />

      <div className='flex flex-col items-center gap-2'>
        
        <h2 className='font-semibold text-[20px]'>{friend.name}</h2>

        <p className='text-[12px] text-gray-500'>
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className='flex gap-2 flex-wrap justify-center'>
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className='bg-[#CBFADB] text-green-800 text-[11px] font-medium px-3 py-1 rounded-full uppercase'
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status */}
        <button
          className={`text-[12px] font-medium px-4 py-1 rounded-full ${statusStyles[friend.status]}`}
        >
          {formatStatus(friend.status)}
        </button>

      </div>
    </div>
    </Link>
  );
};

export default Card;