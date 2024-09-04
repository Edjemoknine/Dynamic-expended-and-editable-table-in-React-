import { TabaleItemProps } from "@/types/Song";
import TCell from "./TCell";

const TableRow = ({
  item,
  columns,
}: {
  item: TabaleItemProps;
  columns: string[];
}) => {
  return (
    <div className="table-row text-left h-8 hover:bg-gray-800 border-b border-gray-700">
      {columns.map((column) => (
        <TCell column={column} item={item} key={column} />
      ))}
    </div>
  );
};

export default TableRow;
