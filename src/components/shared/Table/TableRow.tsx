/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { TabaleItemProps } from "@/types/Song";
import TCell from "./TCell";
import Checkbox from "../Checkbox";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const TableRow = ({
  item,
  handleCheck,
  id,
  setfiltredData,
}: {
  id: number;
  item: TabaleItemProps;
  handleCheck: (id: string, checked: boolean) => void;
  setfiltredData: Dispatch<SetStateAction<TabaleItemProps[]>>;
}) => {
  const [collapsed, setCollapsed] = useState(false);
  //Updated state
  const [song, setSong] = useState(item.song);
  const [artist, setArtist] = useState(item.artist);
  const [year, setYear] = useState(item.year);

  const [isRowChange, setIsRowChange] = useState(false);
  const [updatedValues, setUpdatedValues] = useState([]);
  useEffect(() => {
    if (isRowChange) {
      const values = updatedValues.filter((song) => song.id !== id);
      setUpdatedValues([{ id, song, artist, year }, ...values]);
    }
  }, [song, artist, year, id, isRowChange, updatedValues]);

  const saveChanges = () => {
    console.log("saveChanges");
    console.log(updatedValues);

    setfiltredData((prev) => [
      ...prev.filter((song) => song.id !== id),
      ...updatedValues,
    ]);
    setIsRowChange(false);
  };

  return (
    <>
      <div
        className={cn(
          "table-row relative text-left h-8 hover:bg-gray-800 border-b border-gray-700",
          item.checked && "bg-gray-800"
        )}
      >
        <div className="flex items-center">
          <Checkbox
            handleCheck={handleCheck}
            checked={item?.checked!}
            id={item.id.toString()}
          />
          <ChevronDown
            onClick={() => setCollapsed(!collapsed)}
            className={cn(
              "cursor-pointer inline w-4 translate-y-3 mx-3 transition",
              collapsed ? "rotate-180" : "rotate-0"
            )}
          />
        </div>
        <div className="table-cell p-3">{id}</div>

        <TCell
          setIsRowChange={setIsRowChange}
          type={"text"}
          value={song}
          setValue={setSong}
          name={"song"}
        />
        <TCell
          setIsRowChange={setIsRowChange}
          type={"text"}
          value={artist}
          setValue={setArtist}
          name={"artist"}
        />
        <TCell
          setIsRowChange={setIsRowChange}
          type={"text"}
          value={year}
          setValue={setYear}
          name={"year"}
        />
        {isRowChange && (
          <Check
            onClick={saveChanges}
            className="absolute top-4 right-3 z-30 cursor-pointer font-bold hover:text-green-500"
          />
        )}
      </div>
      {collapsed && (
        <tr>
          <td colSpan={5} className="px-6 py-4 bg-gray-800 text-stone-50">
            <div className="">{item.description} </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
