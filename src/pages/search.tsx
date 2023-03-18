import Playlist from "@/components/Home/Playlist";
import SearchBar from "@/components/Home/SearchBar";
import Options from "@/components/Playlist/Options";

const Search = () => {
  return (
    <div className='mb-40 w-full '>
      <div className='flex w-full flex-col space-y-6 p-4'>
        <SearchBar />
        <Options />
        <Playlist />
      </div>
    </div>
  );
};

export default Search;
