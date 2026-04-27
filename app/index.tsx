import Header from "@/components/_index/header/Header";
import CarousellIndex1 from "@/components/_index/summary_section/CarousellIndex1";
import AddButton from "@/components/add/AddButton";
import AddWindow from "@/components/add/AddWindow";
import { BgColor } from "@/services/_index/_colors";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function Index() {
  const [isOpen, setisOpen] = useState<boolean | null>(true);
  return (
    <View style={{ flex: 1, backgroundColor: BgColor }}>
      <ScrollView className="py-16 px-2 relative">
        <View className="w-full border-b py-2 bg-transparent">
          <Header />
        </View>
        {/* Summary */}
        <CarousellIndex1 />
        {/* add task window */}
        {isOpen && <AddWindow />}
      </ScrollView>

      {/* add task */}
      <AddButton isOpen={isOpen} setIsOpen={setisOpen} />
    </View>
  );
}
