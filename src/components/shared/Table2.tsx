import { useCallback, useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import useDebounce from "@/utils/useDebounce";
import { useSongs } from "@/context/SongContext";
import { TabaleItemProps } from "@/types/Song";
import THead from "./THead";
import TBody from "./TBody";
import TFooter from "./TFooter";
type Props = {
  data: TabaleItemProps[];
  columns: string[];
};
const Table2 = ({ data, columns }: Props) => {
  const { term } = useSongs();
  const [filtredData, setfiltredData] = useState(data);
  const debterm = useDebounce(term, 500);

  // Pagination
  const ItemPerpage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * ItemPerpage;
  const indexOfFirstItem = indexOfLastItem - ItemPerpage;
  const currentItems = filtredData.slice(indexOfFirstItem, indexOfLastItem);
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

  return (
    <>
      <TableHeader />
      <div className="table w-full rounded-xl overflow-hidden shadow  border table-auto  border-collapse  border-spacing-2">
        <THead columns={columns} />
        <TBody columns={columns} currentItems={currentItems} />
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
