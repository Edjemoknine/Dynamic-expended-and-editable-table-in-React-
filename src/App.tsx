import "./App.css";
import { Toaster } from "@/components/ui/toaster";
import Table2 from "./components/shared/Table2";
import { useSongs } from "./context/SongContext";

function App() {
  const { data } = useSongs();
  const columns = Object.keys(data[0]);
  return (
    <main className="pt-32">
      <Table2 data={data} columns={columns} />
      <Toaster />
    </main>
  );
}

export default App;
