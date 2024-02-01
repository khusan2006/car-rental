import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "./ui/button";
import { CopyIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type ConfirmAlertProp = { isAlertOpen: boolean };
const ConfirmAlert = ({ isAlertOpen }: ConfirmAlertProp) => {
  return (
    <Dialog open={isAlertOpen}>
   
    <DialogContent className="max-w-[80vw]">
      <DialogHeader>
        <DialogTitle>Share link</DialogTitle>
        <DialogDescription>
          Anyone who has this link will be able to view this.
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <Input
            id="link"
            defaultValue="https://ui.shadcn.com/docs/installation"
            readOnly
          />
        </div>
        <Button type="submit" size="sm" className="px-3">
          <span className="sr-only">Copy</span>
          <CopyIcon className="h-4 w-4" />
        </Button>
      </div>
      <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  );
};

export default ConfirmAlert;
