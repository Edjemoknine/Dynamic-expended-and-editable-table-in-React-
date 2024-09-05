import Checkbox from "../Checkbox";
import { ChevronDown } from "lucide-react";
type Props = {
  allChecked: boolean;
  handleCheck: (id: string, checked: boolean) => void;
  handleSlectKey: (e: string) => void;
  sorted: { keyof: string; direction: string };
};
const THead = ({ allChecked, handleCheck, handleSlectKey, sorted }: Props) => {
  return (
    <div className="table-header-group p-4">
      <div className="table-row border-b bg-gray-900">
        <th className="">
          <Checkbox
            id={"checkedAll"}
            checked={allChecked}
            handleCheck={handleCheck}
          />
        </th>
        <th className="table-cell text-left p-3 font-medium capitalize">
          <div
            onClick={() => handleSlectKey("id")}
            className="flex items-center gap-6"
          >
            Id
            {sorted.keyof === "id" && (
              <ChevronDown className="w-10 cursor-pointer" />
            )}
          </div>
        </th>
        <th className="table-cell text-left p-3 font-medium capitalize">
          <div
            onClick={() => handleSlectKey("song")}
            className="flex items-center gap-6"
          >
            Song
            {sorted.keyof === "song" && (
              <ChevronDown className="w-10 cursor-pointer" />
            )}
          </div>
        </th>
        <th className="table-cell text-left p-3 font-medium capitalize">
          <div
            onClick={() => handleSlectKey("artist")}
            className="flex items-center gap-6"
          >
            artist
            {sorted.keyof === "artist" && (
              <ChevronDown className="w-10 cursor-pointer" />
            )}
          </div>
        </th>
        <th className="table-cell text-left p-3 font-medium capitalize">
          <div
            onClick={() => handleSlectKey("year")}
            className="flex items-center gap-6"
          >
            Year
            {sorted.keyof === "year" && (
              <ChevronDown className="w-10 cursor-pointer" />
            )}
          </div>
        </th>
      </div>
    </div>
  );
};

export default THead;
