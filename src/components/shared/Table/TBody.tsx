import { Dispatch, SetStateAction } from "react";
import TableRow from "./TableRow";
import { TabaleItemProps } from "@/types/Song";
type Props = {
  currentItems: TabaleItemProps[];
  handleCheck: (itemId: string, checked: boolean) => void;
  setfiltredData: Dispatch<SetStateAction<TabaleItemProps[]>>;
  isExpended: boolean;
  isEditable: boolean;
  columns: string[];
};
const TBody = ({
  currentItems,
  handleCheck,
  setfiltredData,
  isEditable,
  isExpended,
  columns,
}: Props) => {
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
            isExpended={isExpended}
            isEditable={isEditable}
            columns={columns}
          />
        ))}
      </div>
    </>
  );
};

export default TBody;
