import { useState } from "react";
import { cn } from "@/lib/utils";

const Toggle = ({ onToggle }: { onToggle?: (toggled: boolean) => void }) => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled((prev) => !prev);
    if (onToggle) {
      onToggle(!toggled);
    }
  };

  return (
    <button
      className={`relative h-7 w-12 cursor-pointer rounded-full duration-200`}
      onClick={handleToggle}
      style={{
        backgroundColor: toggled ? "#4b5563" : "#24252d50",
      }}
    >
      <span
        className={cn(
          `absolute left-0 top-0 rounded-full bg-white shadow-lg transition-all duration-200`,
          toggled ? "translate-x-full transform" : "translate-x-0 transform",
          toggled ? "h-5 w-5" : "h-4 w-4",
          toggled ? "m-1" : "m-1.5"
        )}
      />
    </button>
  );
};

export default Toggle;
