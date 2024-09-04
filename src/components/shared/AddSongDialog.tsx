import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children?: React.ReactNode;
};
export function AlerSongtDialog({ open, setOpen, children }: Props) {
  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogContent>
        <AlertDialogDescription className="sr-only">
          Are you sure you want to edit a new song?
        </AlertDialogDescription>
        <AlertDialogHeader>
          <AlertDialogTitle>Add new song to your data</AlertDialogTitle>
          {children}
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
