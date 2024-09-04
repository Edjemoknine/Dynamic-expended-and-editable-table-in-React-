import Checkbox from "../Checkbox";
import { ChevronDown } from "lucide-react";
type Props = {
  columns: string[];
  allChecked: boolean;
  handleCheck: (id: string, checked: boolean) => void;
  handleSlectKey: (e: string) => void;
  sorted: { keyof: string; direction: string };
};
const THead = ({
  columns,
  allChecked,
  handleCheck,
  handleSlectKey,
  sorted,
}: Props) => {
  return (
    <div className="table-header-group p-4">
      <div className="table-row border-b bg-gray-900">
        <Checkbox
          id={"checkedAll"}
          checked={allChecked}
          handleCheck={handleCheck}
        />
        {columns.map((item: string) => (
          <div
            onClick={() => handleSlectKey(item)}
            key={item}
            className="table-cell text-left p-3 font-medium capitalize"
          >
            <div className="flex items-center gap-6">
              {item}
              {sorted.keyof === item && (
                <ChevronDown className="w-10 cursor-pointer" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default THead;
