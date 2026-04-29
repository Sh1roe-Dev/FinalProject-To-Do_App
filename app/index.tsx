import Header from "@/components/_index/header/Header";
import CarousellIndex1 from "@/components/_index/summary_section/CarousellIndex1";
import AddButton from "@/components/add/AddButton";
import AddWindow from "@/components/add/AddWindow";
import TaskTable from "@/components/table/TaskTable";
import { BgColor } from "@/services/_index/_colors";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function Index() {
  const [isOpen, setisOpen] = useState<boolean | null>(false);

  return (
    <View className="relative" style={{ flex: 1, backgroundColor: BgColor }}>
      <View className="pt-16 w-full border-b bg-transparent">
        <Header />
      </View>
      {/* Summary */}
      <CarousellIndex1 />
      {/* button area */}
      <ScrollView className="pt-2 pb-10 relative">
        {/* task table */}
        <TaskTable />
      </ScrollView>
      {/* add task window */}
      {isOpen && <AddWindow setIsOpen={setisOpen} />}
      {/* add task */}
      <AddButton isOpen={isOpen} setIsOpen={setisOpen} />
    </View>
  );
}
