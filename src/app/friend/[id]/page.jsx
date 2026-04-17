import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaCommentDots, FaVideo, FaTrash } from "react-icons/fa";
import { MdArchive } from "react-icons/md";
import { BsAlarm } from "react-icons/bs";
import FriendActions from '../../components/FriendActions';
import NotFoundUI from '../../components/NotFoundUI';

const fetchFriend = async (id) => {
  const res = await fetch(`/friends.json`);
  const friends = await res.json();
  return friends.find(f => f.id.toString() === id);
};

export default async function FriendProfile({ params }) {
  const { id } = await params;
  const friend = await fetchFriend(id);
  console.log(friend);

  if (!friend) {
    return <NotFoundUI message={`Friend with ID ${id} not found`} />;
  }

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

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className='space-y-6'>
        {/* LEFT PROFILE CARD */}
        <div className='w-full flex flex-col items-center gap-3 p-6 bg-white shadow-md rounded-xl'>

          <Image
            src={friend.picture}
            alt={friend.name}
            width={90}
            height={90}
            className='rounded-full'
          />

          <div className='flex flex-col items-center gap-2'>

            <h2 className='font-semibold text-[20px]'>{friend.name}</h2>

            <p className='text-[12px] text-gray-500'>
              {friend.days_since_contact}d ago
            </p>

            {/* Status */}
            <button
              className={`text-[12px] font-medium px-4 py-1 rounded-full ${statusStyles[friend.status]}`}
            >
              {formatStatus(friend.status)}
            </button>

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

            {/* bio and email */}
            <p className='italic text-gray-500'>
              {friend.bio}
            </p>
            <p className='text-[12px] text-gray-500'>
              {friend.email}
            </p>

          </div>
        </div>
        {/* SIDE ACTIONS */}
        <div className="md:col-span-1 space-y-3">

          <button className="btn w-full bg-white flex items-center gap-2">
            <BsAlarm /> Snooze 2 Weeks
          </button>

          <button className="btn w-full bg-white flex items-center gap-2">
            <MdArchive /> Archive
          </button>

          <button className="btn w-full bg-white flex items-center gap-2 text-red-400">
            <FaTrash /> Delete
          </button>

        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="md:col-span-2 space-y-6">

        {/* TOP STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="card bg-base-100 shadow p-6 text-center">
            <h2 className="text-2xl font-bold">
              {friend.days_since_contact}
            </h2>
            <p className="text-gray-500">Days Since Contact</p>
          </div>

          <div className="card bg-base-100 shadow p-6 text-center">
            <h2 className="text-2xl font-bold">{friend.goal}</h2>
            <p className="text-gray-500">Goal (Days)</p>
          </div>

          <div className="card bg-base-100 shadow p-6 text-center">
            <h2 className="text-xl font-bold">
              {friend.next_due_date}
            </h2>
            <p className="text-gray-500">Next Due</p>
          </div>

        </div>

        {/* RELATIONSHIP GOAL */}
        <div className="bg-base-100 shadow p-6 flex justify-between items-top rounded-box">
          <div>
            <h1 className="font-semibold text-lg text-gray-700">Relationship Goal</h1>
            <p className="text-gray-500">
              Connect every <span className="font-bold">{friend.goal} days</span>
            </p>
          </div>

          <div className="btn btn-sm">Edit</div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="space-y-4 bg-white shadow-sm p-6 rounded-box">
          <h1 className="text-lg font-semibold text-gray-700">Quick Check-In</h1>
          <FriendActions friend={friend} />
        </div>

      </div>
    </div>
  );
};