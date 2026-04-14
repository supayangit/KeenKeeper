import Header from './components/Header';
import Banner from './components/Banner';

export default function Home() {
  return (
    <body>
      <Header />
      <main className='bg-base-200 py-20 px-61'>
        <Banner />
      </main>
    </body>
  );
}
