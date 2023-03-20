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
        <div className='mb-40 w-full'>
          <div className='flex w-full flex-col space-y-6 p-4'>
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
