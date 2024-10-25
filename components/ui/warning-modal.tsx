import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel
} from "@/components/ui";
import { WarningModalProps } from "@/types/warning-modal";

const WarningModal = ({ open, onReset }: WarningModalProps) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Warning: Rover Hit the Wall!</AlertDialogTitle>
          <AlertDialogDescription>
            The rover has crashed. We will reset the game to allow you to try again.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onReset} className="bg-green-500 text-white">Confirm Reset</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default WarningModal;
