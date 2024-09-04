/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useCallback, useEffect, useState } from "react";
import useDebounce from "@/utils/useDebounce";
import { useSongs } from "@/context/SongContext";
import { TabaleItemProps } from "@/types/Song";
import THead from "./Table/THead";
import TBody from "./Table/TBody";
import TFooter from "./Table/TFooter";
import TableHeader from "./Table/TableHeader";

type Props = {
  data: TabaleItemProps[];
  columns: string[];
};
const Table2 = ({ data, columns }: Props) => {
  const { term } = useSongs();
  const [filtredData, setfiltredData] = useState(() => data);
  const debterm = useDebounce(term, 500);
  // Sorting

  const [sorted, setSorted] = useState({ keyof: "song", direction: "asc" });

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
        a[keyof as keyof TabaleItemProps] > b[keyof as keyof TabaleItemProps]
          ? 1
          : -1
      );
    } else {
      return array.sort((a, b) =>
        a[keyof as keyof TabaleItemProps] < b[keyof as keyof TabaleItemProps]
          ? 1
          : -1
      );
    }
  }
  // Pagination
  const ItemPerpage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * ItemPerpage;
  const indexOfFirstItem = indexOfLastItem - ItemPerpage;
  const currentItems = sortData(filtredData).slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const pageCount = Math.ceil(filtredData.length / ItemPerpage);
  //

  const filtredSearch = useCallback(() => {
    setfiltredData(
      data.filter(
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
        item.id == id ? (item.checked = !item.checked) : null
      );
      setfiltredData([...filtredData]);

      filtredData.filter((item) => item.checked).length === filtredData.length
        ? setAllChecked(true)
        : setAllChecked(false);
    }
  };

  return (
    <>
      <TableHeader />
      <div className="table w-full  rounded-xl overflow-hidden shadow  border table-auto  border-collapse  border-spacing-2">
        <THead
          allChecked={allChecked}
          columns={columns}
          handleCheck={handleSelect}
          handleSlectKey={handleSlectKey}
          sorted={sorted}
        />
        <TBody
          columns={columns}
          currentItems={currentItems}
          handleCheck={handleSelect}
        />
      </div>
      {filtredData.length > ItemPerpage && (
        <TFooter
          ItemPerpage={ItemPerpage}
          currentPage={currentPage}
          pageCount={pageCount}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default Table2;
