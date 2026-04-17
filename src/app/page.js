import { Suspense } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/dashboard/Dashboard';


const fetchFriends = async () => {
  const res = await fetch('http://localhost:3000/friends.json');
  return res.json();

};

export default async function Home() {
  const friends = await fetchFriends();

  return (
    <div className='space-y-10 mx-auto'>
      <>
        <Banner friends={friends} />
        <Dashboard friends={friends} />
      </>
    </div>
  );
}