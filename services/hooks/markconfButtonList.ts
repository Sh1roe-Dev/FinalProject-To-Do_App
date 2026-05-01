import { handleToMarkAll } from "../_index/handleToMarkAll";

interface ButtoProps {
  setIsOpenMark: (value: boolean) => void;
}

export const buttonList = ({ setIsOpenMark }: ButtoProps) => {
  return [
    {
      label: "Cancel",
      action: () => setIsOpenMark(false),
      bgcolor: "bg-red-400",
    },
    {
      label: "Mark All",
      action: () => handleToMarkAll({ setIsOpenMark }),
      bgcolor: "bg-green-400",
    },
  ];
};
