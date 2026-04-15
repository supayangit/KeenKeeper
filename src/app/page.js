import Header from './components/Header';
import Banner from './components/Banner';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/Footer';

const fetchFriends = async () => {
  const res = await fetch('http://localhost:3000/friends.json');
  return res.json();

};

export default async function Home() {
  const friends = await fetchFriends();
  
  return (
    <div>
      <Header />
      <main className='bg-base-200 py-20 px-55 space-y-10'>
        <Banner />
        <Dashboard friends={friends}></Dashboard>
      </main>
      <Footer></Footer>
    </div>
  );
}