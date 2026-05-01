import { handeToDeleteAll } from "../_index/handleToDeleteAll";

interface ButtonList {
  setIsOpenDelete: (value: boolean) => void;
}

export const deleteButton = ({ setIsOpenDelete}: ButtonList) => {
  return [
    {
      label: "Cancel",
      action: () => setIsOpenDelete(false),
      bgcolor: "bg-red-400",
    },
    {
      label: "Delete",
      action: () => handeToDeleteAll(setIsOpenDelete),
      bgcolor: "bg-green-400",
    },
  ];
};
