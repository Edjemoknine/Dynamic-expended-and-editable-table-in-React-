import { Button } from "../ui/button";
import { AlerSongtDialog } from "./AddSongDialog";
import { useSongs } from "@/context/SongContext";
import { SongForm } from "./SongForm";

const AddSong = () => {
  const { open, setOpen } = useSongs();
  return (
    <div>
      <Button
        variant={"outline"}
        onClick={() => setOpen(open === true ? false : true)}
      >
        Add New Song
      </Button>
      <AlerSongtDialog setOpen={setOpen} open={open}>
        <SongForm setOpen={setOpen} />
      </AlerSongtDialog>
    </div>
  );
};

export default AddSong;
