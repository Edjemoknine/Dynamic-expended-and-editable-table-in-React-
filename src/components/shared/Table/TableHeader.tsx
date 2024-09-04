import AddSong from "../AddSong";
import SongSearch from "../SongSearch";

const TableHeader = () => {
  return (
    <div className="flex items-center justify-between pb-8">
      <h1 className="text-2xl font-semibold">Fake Data</h1>
      <SongSearch />
      <AddSong />
    </div>
  );
};

export default TableHeader;
