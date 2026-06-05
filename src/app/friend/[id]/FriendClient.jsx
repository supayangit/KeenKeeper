"use client";

import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { MdArchive } from "react-icons/md";
import { BsAlarm } from "react-icons/bs";
import FriendActions from "@/app/components/FriendActions";

export default function FriendClient({ friend }) {
  const statusStyles = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-orange-400 text-white",
    "on-track": "bg-green-500 text-white",
  };

  const formatStatus = (status) =>
    status
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

      {/* LEFT */}
      <div className="space-y-4 sm:space-y-6 lg:col-span-1">

        <div className="w-full flex flex-col items-center gap-3 p-4 sm:p-6 bg-light-card dark:bg-dark-card shadow-md rounded-xl">

          <Image
            src={friend.picture}
            alt={friend.name}
            width={90}
            height={90}
            className="rounded-full"
          />

          <h2 className="font-semibold text-lg dark:text-dark-text">
            {friend.name}
          </h2>

          <p className="text-sm opacity-60">
            {friend.days_since_contact}d ago
          </p>

          <button className={`text-xs px-3 py-1 rounded-full ${statusStyles[friend.status]}`}>
            {formatStatus(friend.status)}
          </button>

          <div className="flex gap-2 flex-wrap justify-center">
            {friend.tags.map((tag, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-800">
                {tag}
              </span>
            ))}
          </div>

          <p className="italic text-sm opacity-70 text-center">
            {friend.bio}
          </p>

          <p className="text-xs break-all opacity-60">
            {friend.email}
          </p>
        </div>

        {/* ACTIONS */}
        <div className="space-y-2">
          <button className="w-full flex items-center justify-center gap-2 p-2 border rounded">
            <BsAlarm /> Snooze 2 Weeks
          </button>

          <button className="w-full flex items-center justify-center gap-2 p-2 border rounded">
            <MdArchive /> Archive
          </button>

          <button className="w-full flex items-center justify-center gap-2 p-2 border border-red-400 text-red-400 rounded">
            <FaTrash /> Delete
          </button>
        </div>

      </div>

      {/* RIGHT */}
      <div className="lg:col-span-2 space-y-6">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div className="p-4 text-center bg-light-card dark:bg-dark-card rounded">
            <h2 className="text-xl font-bold">{friend.days_since_contact}</h2>
            <p className="text-sm opacity-60">Days Since Contact</p>
          </div>

          <div className="p-4 text-center bg-light-card dark:bg-dark-card rounded">
            <h2 className="text-xl font-bold">{friend.goal}</h2>
            <p className="text-sm opacity-60">Goal</p>
          </div>

          <div className="p-4 text-center bg-light-card dark:bg-dark-card rounded">
            <h2 className="text-sm font-bold">{friend.next_due_date}</h2>
            <p className="text-sm opacity-60">Next Due</p>
          </div>

        </div>

        <div className="p-4 bg-light-card dark:bg-dark-card rounded">
          <h2 className="font-semibold">Relationship Goal</h2>
          <p className="text-sm opacity-60">
            Connect every <b>{friend.goal} days</b>
          </p>
        </div>

        <div className="p-4 bg-light-card dark:bg-dark-card rounded">
          <h2 className="font-semibold">Quick Check-In</h2>
          <FriendActions friend={friend} />
        </div>

      </div>

    </div>
  );
}