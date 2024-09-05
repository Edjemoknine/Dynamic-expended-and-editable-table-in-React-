import { Trash } from "lucide-react";
import AddSong from "../AddSong";
import SongSearch from "../SongSearch";
type Props = {
  deletedRowsAction: () => void;
  selectedRows: boolean;
};
const TableHeader = ({ deletedRowsAction, selectedRows }: Props) => {
  return (
    <div className="flex items-center justify-between pb-8">
      <h1 className="text-2xl font-semibold">Fake Data</h1>
      <SongSearch />
      <div className="flex items-center gap-6">
        {selectedRows && (
          <Trash
            className="hover:text-red-500  cursor-pointer"
            onClick={deletedRowsAction}
          />
        )}
        <AddSong />
      </div>
    </div>
  );
};

export default TableHeader;
