import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  value: number;
  onChange: (value: string) => void;
}
export function SelectPgae({ value, onChange }: Props) {
  return (
    <Select onValueChange={onChange} value={value.toString()}>
      <SelectTrigger className="w-[70px]">
        <SelectValue defaultValue={5} placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={"5"}>5</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="15">15</SelectItem>
          <SelectItem value="20">20</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
