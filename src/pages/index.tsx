import Container from '@/components/core/Layouts/Container';
import Error from '@/components/Error';
import Hero from '@/components/Home/Hero';
import Playlist from '@/components/Home/Playlist';
import SearchBar from '@/components/Home/SearchBar';
import RecentTracks from '@/components/Home/RecentTracks';

const Home = ({ working }) => {
  working = true;
  return (
    <>
      {working ? (
        <div className='w-full mb-40'>
          <div className='p-4 space-y-6 flex w-full flex-col'>
            <SearchBar />
            <Hero />
            <Playlist />
            <RecentTracks />
          </div>
        </div>
      ) : (
        // <div>HOME</div>
        <Error message='Looks like server is down' />
      )}
    </>
  );
};

export default Home;
