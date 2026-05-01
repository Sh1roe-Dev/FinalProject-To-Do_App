interface ButtonListProps {
  isOpenDelete: boolean | null;
  setIsOpenDelete: (value: boolean) => void;
  isOpenMark: boolean | null;
  setIsOpenMark: (value: boolean) => void;
  setisOpen: (value: boolean) => void;
}

export const buttonList = ({
  isOpenDelete,
  setIsOpenDelete,
  isOpenMark,
  setIsOpenMark,
  setisOpen,
}: ButtonListProps) => {
  return [
    {
      label: "Mark all",
      icon: "ri-checkbox-blank-circle-line",
      action: () => {
        setIsOpenMark(!isOpenDelete);
        setisOpen(false);
      },
      textcolor: "text-blue-500",
    },
    {
      label: "Delete all",
      icon: "ri-delete-bin-line",
      action: () => {
        setIsOpenDelete(!isOpenMark);
        setisOpen(false);
      },
      textcolor: "text-red-500",
    },
  ];
};
