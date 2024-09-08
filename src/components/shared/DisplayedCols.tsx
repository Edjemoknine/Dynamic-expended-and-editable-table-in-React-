import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { SetStateAction } from "react";

interface Props {
  value: string[];
  onChange: React.Dispatch<SetStateAction<string[]>>;
  columns: string[];
}
export function SelectedCols({ value, onChange, columns }: Props) {
  const handleOptions = (value: string) => {
    onChange((prev) => {
      const isSelected = prev.includes(value);
      const updatedSelection = isSelected
        ? prev.filter((value) => value !== value)
        : [...prev, value];

      return updatedSelection;
    });
  };

  console.log(value);

  return (
    <Select onValueChange={handleOptions} value="columns">
      <SelectTrigger className="">
        <SelectValue defaultValue={5} placeholder="Columns" />
      </SelectTrigger>
      <SelectContent className="bg-black text-whie">
        <SelectGroup>
          {columns.map((column) => (
            <SelectItem key={column} value={column}>
              {column}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
