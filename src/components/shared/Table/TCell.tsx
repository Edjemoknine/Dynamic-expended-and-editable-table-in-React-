import { useSongs } from "@/context/SongContext";
import { TabaleItemProps } from "@/types/Song";

const TCell = ({ column, item }: { item: TabaleItemProps; column: string }) => {
  const { onChangeInput } = useSongs();
  return (
    <div className="table-cell p-3">
      <input
        name={column}
        value={item[column as keyof TabaleItemProps] as string}
        type="text"
        onChange={(e) => onChangeInput(e, item.id)}
        className="bg-transparent border-none outline-none"
      />
      {/* {item[column as keyof TabaleItemProps]} */}
    </div>
  );
};

export default TCell;
