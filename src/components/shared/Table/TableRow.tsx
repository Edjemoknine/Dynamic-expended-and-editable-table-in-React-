import { TabaleItemProps } from "@/types/Song";
import TCell from "./TCell";
import Checkbox from "../Checkbox";
import { cn } from "@/lib/utils";

const TableRow = ({
  item,
  columns,
  handleCheck,
}: {
  item: TabaleItemProps;
  columns: string[];
  handleCheck: (id: string, checked: boolean) => void;
}) => {
  return (
    <div
      className={cn(
        "table-row text-left h-8 hover:bg-gray-800 border-b border-gray-700",
        item.checked && "bg-gray-800"
      )}
    >
      <Checkbox
        handleCheck={handleCheck}
        checked={item?.checked}
        id={item.id}
      />
      {columns.map((column) => (
        <TCell column={column} item={item} key={column} />
      ))}
    </div>
  );
};

export default TableRow;
