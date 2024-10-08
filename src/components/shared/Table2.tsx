/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useCallback, useEffect, useState } from "react";
import useDebounce from "@/utils/useDebounce";
import { useSongs } from "@/context/SongContext";
import { TabaleItemProps } from "@/types/Song";
import THead from "./Table/THead";
import TBody from "./Table/TBody";
import TFooter from "./Table/TFooter";
import TableHeader from "./Table/TableHeader";
import { SelectPgae } from "./PerPage";
import Toggle from "./Toggle";

type Props = {
  data: TabaleItemProps[];
  columns: string[];
  isEditable: boolean;
  isExpended: boolean;
  setIsExpended: (item: boolean) => void;
  setIsEditable: (row: boolean) => void;
};
const Table2 = ({
  data,
  isExpended,
  isEditable,
  columns,
  setIsEditable,
  setIsExpended,
}: Props) => {
  const { term } = useSongs();
  const [filtredData, setfiltredData] = useState(() => data);
  const debterm = useDebounce(term, 500);
  // Sorting

  const [sorted, setSorted] = useState({ keyof: "id", direction: "asc" });

  const handleSlectKey = (key: string) => {
    setSorted({
      keyof: key,
      direction:
        sorted.keyof === key
          ? sorted.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
  };

  function sortData(array: TabaleItemProps[]) {
    const { keyof, direction } = sorted;
    if (direction === "asc") {
      return array.sort((a, b) =>
        a[keyof as keyof TabaleItemProps]! > b[keyof as keyof TabaleItemProps]!
          ? 1
          : -1
      );
    } else {
      return array.sort((a, b) =>
        a[keyof as keyof TabaleItemProps]! < b[keyof as keyof TabaleItemProps]!
          ? 1
          : -1
      );
    }
  }
  // Pagination
  const ItemPerpage = 5;
  const [Perpage, setPerpage] = useState<number | string>(ItemPerpage);

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * Number(Perpage);
  const indexOfFirstItem = indexOfLastItem - Number(Perpage);
  const currentItems = sortData(filtredData).slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const pageCount = Math.ceil(filtredData.length / Number(Perpage));
  //

  const filtredSearch = useCallback(() => {
    setfiltredData(
      data?.filter(
        (item: TabaleItemProps) =>
          item.song.toLowerCase().includes(debterm.toLowerCase()) ||
          item.artist.toLowerCase().includes(debterm.toLowerCase())
      )
    );
  }, [debterm, data]);

  useEffect(() => {
    filtredSearch();
    setCurrentPage(1);
  }, [term, filtredSearch]);

  // Multiple selection
  const [allChecked, setAllChecked] = useState(false);
  const handleSelect = (id: string) => {
    if (id === "checkedAll") {
      filtredData.forEach((item) =>
        !allChecked ? (item.checked = true) : (item.checked = false)
      );

      setAllChecked(!allChecked);
    } else {
      filtredData.map((item) =>
        item.id == Number(id) ? (item.checked = !item.checked) : null
      );
      setfiltredData([...filtredData]);

      filtredData.filter((item) => item.checked).length === filtredData.length
        ? setAllChecked(true)
        : setAllChecked(false);
    }
  };

  // check selected rows
  const selectedRows = filtredData.some((item) => item.checked);
  // delete multiple rows
  const deleteSelectedRows = () => {
    console.log(filtredData.filter((item) => !item.checked));
    setfiltredData([...filtredData.filter((item) => !item.checked)]);
  };

  // Dispaled Columns
  const [displayedCols, setDisplayedCols] = useState(columns);

  return (
    <>
      <div>
        <div className="flex flex-col items-start  gap-6 mb-10">
          <div className="flex gap-4">
            <Toggle onToggle={setIsEditable} />
            Editable cell
          </div>
          <div className="flex gap-4">
            <Toggle onToggle={setIsExpended} />
            Expended Row
          </div>
        </div>
      </div>
      <TableHeader
        selectedRows={selectedRows}
        deletedRowsAction={deleteSelectedRows}
        displayedCols={displayedCols}
        setDisplayedCols={setDisplayedCols}
        columns={columns}
      />

      <div className="table w-full  rounded-xl overflow-hidden shadow  border table-auto  border-collapse  border-spacing-2">
        <THead
          columns={displayedCols}
          allChecked={allChecked}
          handleCheck={handleSelect}
          handleSlectKey={handleSlectKey}
          sorted={sorted}
        />
        <TBody
          columns={displayedCols}
          setfiltredData={setfiltredData}
          currentItems={currentItems}
          handleCheck={handleSelect}
          isExpended={isExpended}
          isEditable={isEditable}
        />
      </div>

      <div className="flex items-center  justify-between mt-8">
        <SelectPgae value={Number(Perpage)} onChange={setPerpage} />
        {filtredData.length > Number(Perpage) && (
          <TFooter
            currentPage={currentPage}
            pageCount={pageCount}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default Table2;
