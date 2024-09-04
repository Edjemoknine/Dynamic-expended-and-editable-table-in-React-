import { TabaleItemProps } from "@/types/Song";

const TCell = ({ column, item }: { item: TabaleItemProps; column: string }) => {
  return (
    <div className="table-cell p-3">
      {item[column as keyof TabaleItemProps]}
    </div>
  );
};

export default TCell;
