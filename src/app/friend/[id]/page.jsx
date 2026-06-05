import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { MdArchive } from "react-icons/md";
import { BsAlarm } from "react-icons/bs";
import FriendActions from "../../components/FriendActions";
import NotFoundUI from "../../components/NotFoundUI";
import friendsData from "@/data/friends.json";

const friends = Array.isArray(friendsData)
  ? friendsData
  : friendsData?.default || [];

export const dynamicParams = false;

// ✅ FIXED: await params
export async function generateMetadata({ params }) {
  const { id } = await params;

  const friend = friends.find((f) => Number(f.id) === Number(id));

  if (!friend) {
    return {
      title: "Friend Not Found - KeenKeeper",
      description: "The friend profile you are looking for does not exist",
    };
  }

  return {
    title: `${friend.name} - KeenKeeper`,
    description: `View ${friend.name}'s profile and interaction history on KeenKeeper`,
  };
}

export function generateStaticParams() {
  return friends.map((friend) => ({
    id: String(friend.id),
  }));
}

// ✅ FIXED: async + await params
export default async function FriendPage({ params }) {
  const { id } = await params;

  const numericId = Number(id);

  if (!numericId) {
    return <NotFoundUI message="Invalid friend route" />;
  }

  const friend = friends.find((f) => Number(f.id) === numericId);

  if (!friend) {
    return <NotFoundUI message={`Friend with ID ${id} not found`} />;
  }

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
      <div className="space-y-4 sm:space-y-6 lg:col-span-1">
        <div className="w-full flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-light-card dark:bg-dark-card shadow-md dark:shadow-dark rounded-xl transition-colors duration-300">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={90}
            height={90}
            className="rounded-full w-20 h-20 sm:w-[90px] sm:h-[90px]"
          />

          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-semibold text-base sm:text-lg lg:text-xl text-light-text dark:text-dark-text">
              {friend.name}
            </h2>

            <p className="text-xs sm:text-sm text-light-text/60 dark:text-dark-text/60">
              {friend.days_since_contact}d ago
            </p>

            <button
              className={`text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-full ${statusStyles[friend.status]}`}
            >
              {formatStatus(friend.status)}
            </button>

            <div className="flex gap-2 flex-wrap justify-center">
              {friend.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-accent-success/20 text-accent-success dark:bg-accent-success/30 dark:text-accent-success text-[10px] sm:text-[11px] font-medium px-2 sm:px-3 py-1 rounded-full uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="italic text-light-text/70 dark:text-dark-text/70 text-sm sm:text-base">
              {friend.bio}
            </p>

            <p className="text-xs sm:text-sm text-light-text/60 dark:text-dark-text/60 break-all">
              {friend.email}
            </p>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <button className="btn w-full bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text border border-light-border dark:border-dark-border flex items-center justify-center gap-2">
            <BsAlarm /> Snooze 2 Weeks
          </button>

          <button className="btn w-full bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text border border-light-border dark:border-dark-border flex items-center justify-center gap-2">
            <MdArchive /> Archive
          </button>

          <button className="btn w-full bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border flex items-center justify-center gap-2 text-red-400">
            <FaTrash /> Delete
          </button>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card bg-light-card dark:bg-dark-card shadow p-4 sm:p-6 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">
              {friend.days_since_contact}
            </h2>
            <p className="text-sm opacity-60">Days Since Contact</p>
          </div>

          <div className="card bg-light-card dark:bg-dark-card shadow p-4 sm:p-6 text-center">
            <h2 className="text-xl sm:text-2xl font-bold">
              {friend.goal}
            </h2>
            <p className="text-sm opacity-60">Goal (Days)</p>
          </div>

          <div className="card bg-light-card dark:bg-dark-card shadow p-4 sm:p-6 text-center">
            <h2 className="text-sm sm:text-xl font-bold break-words">
              {friend.next_due_date}
            </h2>
            <p className="text-sm opacity-60">Next Due</p>
          </div>
        </div>

        <div className="bg-light-card dark:bg-dark-card shadow p-4 sm:p-6 rounded-box">
          <h1 className="font-semibold">Relationship Goal</h1>
          <p className="opacity-60">
            Connect every <span className="font-bold">{friend.goal} days</span>
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4 bg-light-card dark:bg-dark-card shadow-sm p-4 sm:p-6 rounded-box">
          <h1 className="font-semibold">Quick Check-In</h1>
          <FriendActions friend={friend} />
        </div>
      </div>
    </div>
  );
}