import TableRow from "./TableRow";
import { TabaleItemProps } from "@/types/Song";
type Props = {
  currentItems: TabaleItemProps[];
  columns: string[];
  handleCheck: (itemId: string, checked: boolean) => void;
};
const TBody = ({ currentItems, columns, handleCheck }: Props) => {
  return (
    <>
      <div className="table-row-group p-4">
        {currentItems.map((item: TabaleItemProps) => (
          <TableRow
            columns={columns}
            item={item}
            key={item.song}
            handleCheck={handleCheck}
          />
        ))}
      </div>
    </>
  );
};

export default TBody;
