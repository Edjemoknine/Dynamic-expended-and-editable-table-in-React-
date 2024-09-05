/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  type: string;
  name: string;
  value: string | number;
  setValue: (item: any) => void;
  setIsRowChange: (item: boolean) => void;
};
const TCell = ({ type, name, value, setValue, setIsRowChange }: Props) => {
  const handelChange = (e) => {
    setIsRowChange(true);
    setValue(e.target.value);
  };
  return (
    <div className="table-cell p-3">
      <input
        name={name}
        type={type}
        value={value}
        onChange={handelChange}
        className="bg-transparent border-none outline-none"
      />
    </div>
  );
};

export default TCell;
