import { TabaleItemProps } from "@/types/Song";
import TCell from "./TCell";
import Checkbox from "../Checkbox";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

const TableRow = ({
  item,
  columns,
  handleCheck,
}: {
  item: TabaleItemProps;
  columns: string[];
  handleCheck: (id: string, checked: boolean) => void;
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div
        className={cn(
          "table-row text-left h-8 hover:bg-gray-800 border-b border-gray-700",
          item.checked && "bg-gray-800"
        )}
      >
        <div className="flex items-center">
          <Checkbox
            handleCheck={handleCheck}
            checked={item?.checked}
            id={item.id}
          />
          <ChevronDown
            onClick={() => setCollapsed(!collapsed)}
            className={cn(
              "cursor-pointer inline w-4 translate-y-3 mx-3 transition",
              collapsed ? "rotate-180" : "rotate-0"
            )}
          />
        </div>
        {columns.map((column) => (
          <TCell column={column} item={item} key={column} />
        ))}
      </div>
      {collapsed && (
        <tr>
          <td colSpan={5} className="px-6 py-4 bg-gray-700 text-stone-50">
            <div className="">{"row.details"}</div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
