import TableRow from "./TableRow";
import { TabaleItemProps } from "@/types/Song";
type Props = {
  currentItems: TabaleItemProps[];
  columns: string[];
};
const TBody = ({ currentItems, columns }: Props) => {
  return (
    <div className="table-row-group p-4">
      {currentItems.map((item: TabaleItemProps) => (
        <TableRow columns={columns} item={item} key={item.song} />
      ))}
    </div>
  );
};

export default TBody;
