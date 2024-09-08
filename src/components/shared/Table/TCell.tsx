import { TabaleItemProps } from "@/types/Song";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  type: string;
  name: string;
  value: string | number | undefined | any;
  setValue: (item: any) => void;
  setIsRowChange: (item: boolean) => void;
  isEditable: boolean;
  item: TabaleItemProps;
  column: string;
};
const TCell = ({
  type,
  name,
  value,
  setValue,
  setIsRowChange,
  isEditable,
}: Props) => {
  // -------------
  // const handelChange = (e: { target: { value: any } }) => {
  //   setIsRowChange(true);
  //   setValue(e.target.value);
  // };
  return (
    <div className="table-cell p-3">
      <input
        disabled={!isEditable}
        name={name}
        type={type}
        value={value}
        // value={item[column as keyof TabaleItemProps] as string}
        onChange={(e) => {
          setIsRowChange(true);
          setValue(e);
        }}
        className="bg-transparent border-none outline-none"
      />
    </div>
  );
};

export default TCell;
