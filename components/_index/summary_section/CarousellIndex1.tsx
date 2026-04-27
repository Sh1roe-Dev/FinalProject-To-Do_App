import { summaryInfo } from "@/services/_index/SummaryInfo";
import React from "react";
import { View } from "react-native";
import { IconName } from "react-native-remix-icon";
import LinkButton from "./LinkCarousell";

const CarousellIndex1 = () => {
  return (
    <View className="w-full py-10 flex flex-row justify-evenly bg-transparent">
      {summaryInfo.map((info) => (
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
