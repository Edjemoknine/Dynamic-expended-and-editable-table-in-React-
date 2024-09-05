import { Dispatch, SetStateAction } from "react";
import TableRow from "./TableRow";
import { TabaleItemProps } from "@/types/Song";
type Props = {
  currentItems: TabaleItemProps[];
  handleCheck: (itemId: string, checked: boolean) => void;
  setfiltredData: Dispatch<SetStateAction<TabaleItemProps[]>>;
};
const TBody = ({ currentItems, handleCheck, setfiltredData }: Props) => {
  return (
    <>
      <div className="table-row-group p-4">
        {currentItems.map((item: TabaleItemProps) => (
          <TableRow
            setfiltredData={setfiltredData}
            key={item.song}
            id={item.id}
            item={item}
            handleCheck={handleCheck}
          />
        ))}
      </div>
    </>
  );
};

export default TBody;
