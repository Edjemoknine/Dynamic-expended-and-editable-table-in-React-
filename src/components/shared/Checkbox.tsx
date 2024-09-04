import { Input } from "../ui/input";
type Props = {
  id: string;
  checked: boolean;
  handleCheck: (id: string, checked: boolean) => void;
};
const Checkbox = ({ id, checked, handleCheck }: Props) => {
  return (
    <Input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={(e) => handleCheck(e.target.id, e.target.checked)}
      className=" bg-zinc-700 w-4 translate-y-3 mx-3"
    />
  );
};

export default Checkbox;
