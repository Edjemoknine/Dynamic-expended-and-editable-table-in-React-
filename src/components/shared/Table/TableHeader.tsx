import { Trash } from "lucide-react";
import AddSong from "../AddSong";
import SongSearch from "../SongSearch";
import { SelectedCols } from "../DisplayedCols";
import { SetStateAction } from "react";
type Props = {
  deletedRowsAction: () => void;
  selectedRows: boolean;
  displayedCols: string[];
  setDisplayedCols: React.Dispatch<SetStateAction<string[]>>;
  columns: string[];
};
const TableHeader = ({
  deletedRowsAction,
  selectedRows,
  displayedCols,
  setDisplayedCols,
  columns,
}: Props) => {
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
        <SelectedCols
          columns={columns}
          value={displayedCols}
          onChange={setDisplayedCols}
        />
      </div>
    </div>
  );
};

export default TableHeader;
