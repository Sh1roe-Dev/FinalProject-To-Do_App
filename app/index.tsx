import Header from "@/components/_index/header/Header";
import CarousellIndex1 from "@/components/_index/summary_section/CarousellIndex1";
import AddButton from "@/components/add/AddButton";
import ButtonList from "@/components/button_list/action/ButtonList";
import TaskTable from "@/components/table/TaskTable";
import AddWindow from "@/components/window/AddWindow";
import DeleteConfirmation from "@/components/window/DeleteConfirmation";
import MarkAllConfirmation from "@/components/window/MarkAllConfirmation";
import { Color5 } from "@/services/hooks/_colors";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function Index() {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
  const [isOpenMark, setIsOpenMark] = useState<boolean>(false);

  return (
    <View className="relative" style={{ flex: 1, backgroundColor: Color5 }}>
      <View className="pt-16 w-full border-b bg-transparent">
        <Header />
      </View>
      {/* Summary */}
      <CarousellIndex1 />
      {/* button area */}
      <ButtonList
        isOpenDelete={isOpenDelete}
        setIsOpenDelete={setIsOpenDelete}
        isOpenMark={isOpenMark}
        setIsOpenMark={setIsOpenMark}
        setisOpen={setisOpen}
      />
      <ScrollView className="pt-2 pb-10 relative">
        {/* task table */}
        <TaskTable />
      </ScrollView>
      {/* add task */}
      <AddButton
        isOpen={isOpen}
        setIsOpen={setisOpen}
        setIsOpenDelete={setIsOpenDelete}
        setIsOpenMark={setIsOpenMark}
      />
      {/* window add task  */}
      {isOpen && <AddWindow setIsOpen={setisOpen} />}
      {/* window delete confirmation */}
      {isOpenDelete && <DeleteConfirmation setIsOpenDelete={setIsOpenDelete} />}
      {/* window mark all confirmation */}
      {isOpenMark && <MarkAllConfirmation setIsOpenMark={setIsOpenMark} />}
    </View>
  );
}
