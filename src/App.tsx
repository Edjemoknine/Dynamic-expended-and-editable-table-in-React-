import "./App.css";
import { Toaster } from "@/components/ui/toaster";
import Table2 from "./components/shared/Table2";
import { useSongs } from "./context/SongContext";
import { useState } from "react";

function App() {
  const { data } = useSongs();
  const columns = Object.keys(data[0]);
  const [isExpended, setIsExpended] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  return (
    <main className="pt-32">
      <Table2
        data={data}
        columns={columns}
        isExpended={isExpended}
        isEditable={isEditable}
      />
      <Toaster />
    </main>
  );
}

export default App;
