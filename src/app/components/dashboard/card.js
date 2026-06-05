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
    <div className='w-full sm:w-65 flex flex-col items-center gap-3 p-6 bg-light-card dark:bg-dark-card shadow-md dark:shadow-dark rounded-xl transition-colors duration-300 hover:shadow-lg dark:hover:shadow-lg cursor-pointer'>
      
      <Image
        src={friend.picture}
        alt={friend.name}
        width={80}
        height={80}
        className='rounded-full'
      />

      <div className='flex flex-col items-center gap-2'>
        
        <h2 className='font-semibold text-[20px] text-light-text dark:text-dark-text'>{friend.name}</h2>

        <p className='text-[12px] text-light-text/60 dark:text-dark-text/60'>
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className='flex gap-2 flex-wrap justify-center'>
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className='bg-accent-success/20 text-accent-success dark:bg-accent-success/30 dark:text-accent-success text-[11px] font-medium px-3 py-1 rounded-full uppercase transition-colors duration-300'
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status */}
        <button
          className={`text-[12px] font-medium px-4 py-1 rounded-full transition-colors duration-300 ${statusStyles[friend.status]}`}
        >
          {formatStatus(friend.status)}
        </button>

      </div>
    </div>
    </Link>
  );
};

export default Card;
