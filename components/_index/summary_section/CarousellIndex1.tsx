import { summaryInfo } from "@/services/hooks/SummaryInfo";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { IconName } from "react-native-remix-icon";
import LinkButton from "./LinkCarousell";

const CarousellIndex1 = () => {
  const [taskData, setTaskData] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await summaryInfo();
      setTaskData(data);
    };

    loadData();
  }, [taskData]);

  return (
    <View className="w-full py-5 flex flex-row justify-evenly bg-transparent">
      {taskData.map((info: any) => (
        <LinkButton
          key={info.label}
          label={info.label}
          icon={info.icon as IconName}
          summary={info.summary}
          style={info.style}
        />
      ))}
    </View>
  );
};

export default CarousellIndex1;
