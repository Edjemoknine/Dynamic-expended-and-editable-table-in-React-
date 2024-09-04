import { fakedata } from "@/consatnt/data";
import { TabaleItemProps } from "@/types/Song";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
// Define the initial type
type InitialState = {
  data: TabaleItemProps[];
  term: string;
  setData: (data: TabaleItemProps[]) => void;
  setTerm: (term: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  deleteSong: (id: number) => void;
  setSelected: (item: TabaleItemProps | null) => void;
  selected?: TabaleItemProps | null;
};
const SongContext = createContext<InitialState>({
  data: fakedata,
  term: "",
  open: false,
  setOpen: () => {},
  setData: () => {},
  setTerm: () => {},
  deleteSong: () => {},
  setSelected: () => {},
  selected: null,
});
// Function to fetch data from localStorage
const fetchData = (): TabaleItemProps[] => {
  const storedData = localStorage.getItem("data");
  if (storedData) {
    return JSON.parse(storedData) as TabaleItemProps[];
  }
  return fakedata; // Fallback to fakedata if no data in localStorage
};
const SongProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<TabaleItemProps[]>(() => fetchData());
  const [term, setTerm] = useState("");
  const [selected, setSelected] = useState<TabaleItemProps | null>(null);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(fakedata));
  }, []);

  const deleteSong = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <SongContext.Provider
      value={{
        data,
        setData,
        term,
        setTerm,
        open,
        setOpen,
        deleteSong,
        setSelected,
        selected,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export default SongProvider;

export const useSongs = () => {
  const SongData = useContext(SongContext);
  return SongData;
};
