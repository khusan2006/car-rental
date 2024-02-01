import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";
import ConfirmDescription from "./ConfirmDescription";
import ConfirmForm from "./ConfirmForm";
import { Separator } from "./ui/separator";

type ConfirmAlertProp = {
  isAlertOpen: boolean;
  setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConfirmAlert = ({ isAlertOpen, setIsAlertOpen }: ConfirmAlertProp) => {
  return (
    <Dialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
      <DialogContent className="max-w-[80vw] max-h-[95vh] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-white bg-orange-600 uppercase mt-2 p-4 font-poppins text-2xl">
            Complete reservation
          </DialogTitle>
          <DialogDescription className="bg-red-100 py-6 px-4 flex flex-col gap-3">
            <p className="flex gap-2 items-center text-orange-600 font-poppins font-bold text-[1.125rem]">
              <Info /> Upon completing this reservation enquiry, you will
              receive:
            </p>
            <p className="font-poppins text-base text-gray-600">
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </DialogDescription>
        </DialogHeader>
        <ConfirmDescription />
        <Separator className="my-2 bg-gray-600" />
        <ConfirmForm />
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmAlert;
