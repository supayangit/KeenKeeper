import { Suspense } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/dashboard/Dashboard';

import friends from '@/data/friends.json';

export default function Home() {

  return (
    <div className='space-y-10 mx-auto'>
      <Suspense fallback={null}>
        <Banner friends={friends} />
        <Dashboard friends={friends} />
      </Suspense>
    </div>
  );
}