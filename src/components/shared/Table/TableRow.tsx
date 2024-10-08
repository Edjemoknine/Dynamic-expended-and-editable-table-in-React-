/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { TabaleItemProps } from "@/types/Song";
import TCell from "./TCell";
import Checkbox from "../Checkbox";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type UpdatedValue = {
  id: number;
  song: string;
  artist: string;
  year: number;
};
type Props = {
  id: number;
  item: TabaleItemProps;
  handleCheck: (id: string, checked: boolean) => void;
  setfiltredData: Dispatch<SetStateAction<TabaleItemProps[]>>;
  isExpended: boolean;
  isEditable: boolean;
  columns: string[];
};

const TableRow = ({
  item,
  handleCheck,
  id,
  setfiltredData,
  isEditable,
  isExpended,
  columns,
}: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  //Updated state
  const initialState = {
    id: item.id,
    song: item.song,
    artist: item.artist,
    year: item.year,
    description: item.description,
  };
  const [songData, setSongData] = useState(initialState);
  const { song, artist, year } = songData;

  // const [song, setSong] = useState<string>(item.song);
  // const [artist, setArtist] = useState<string>(item.artist);
  // const [year, setYear] = useState<number>(item.year);

  const [isRowChange, setIsRowChange] = useState<boolean>(false);
  const [updatedValues, setUpdatedValues] = useState<UpdatedValue[]>([]);

  useEffect(() => {
    if (isRowChange) {
      const values = updatedValues.filter((song) => song.id !== id);
      setUpdatedValues([{ id, song, artist, year }, ...values]);
    }
  }, [song, artist, year, id, isRowChange, updatedValues]);

  const saveChanges = () => {
    setfiltredData((prev) => [
      ...prev.filter((song) => song.id !== id),
      ...updatedValues,
    ]);
    setIsRowChange(false);
  };

  const handleDisplayed = (col: string) => {
    return columns.includes(col) ? true : false;
  };

  const handleChange = (e: any) => {
    setSongData({ ...songData, [e.target.name]: e.target.value });
  };

  console.log(songData);

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
          {isExpended && (
            <ChevronDown
              onClick={() => setCollapsed(!collapsed)}
              className={cn(
                "cursor-pointer inline w-4 translate-y-3 mx-3 transition",
                collapsed ? "rotate-180" : "rotate-0"
              )}
            />
          )}
        </div>

        {/* Table data rows */}

        {columns.map((column) => {
          // return <TCell column={column} item={item} key={column} />
          return (
            <>
              {handleDisplayed(column) && (
                <TCell
                  item={item}
                  column={column}
                  setIsRowChange={setIsRowChange}
                  type={"text"}
                  value={songData[column as keyof typeof songData]}
                  setValue={handleChange}
                  name={column}
                  isEditable={isEditable}
                />
              )}
            </>
          );
        })}
        {/* 
        <div className="table-cell p-3">{id}</div>

        {handleDisplayed("song") && (
          <TCell
            setIsRowChange={setIsRowChange}
            type={"text"}
            value={song}
            setValue={setSong}
            name={"song"}
            isEditable={isEditable}
          />
        )}
        {handleDisplayed("artist") && (
          <TCell
            setIsRowChange={setIsRowChange}
            type={"text"}
            value={artist}
            setValue={setArtist}
            name={"artist"}
            isEditable={isEditable}
          />
        )}
        {handleDisplayed("year") && (
          <TCell
            setIsRowChange={setIsRowChange}
            type={"text"}
            value={year}
            setValue={setYear}
            name={"year"}
            isEditable={isEditable}
          />
        )} */}
        {isRowChange && (
          <Check
            onClick={saveChanges}
            className="absolute top-4 right-1 z-30 cursor-pointer font-bold hover:text-green-500"
          />
        )}
      </div>
      {isExpended && collapsed && (
        <tr>
          <td
            colSpan={columns.length + 1}
            className="px-6 py-4 bg-gray-800 text-stone-400"
          >
            <div className="">{item.description} </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
