import { Color1, Color3 } from "@/services/hooks/_colors";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import Icon, { IconName } from "react-native-remix-icon";

interface LinkButtonProps {
  label: string | null;
  icon: IconName;
  summary: number | null;
  style: string | null;
}

const LinkButton = ({ label, icon, summary, style }: LinkButtonProps) => {
  const router = useRouter();
  return (
    <View
      className={`w-[30%] rounded-lg p-3 shadow-lg flex flex-col gap-2`}
      style={{
        backgroundColor: Color3,
        shadowColor: Color1,
      }}
    >
      <View>
        <Icon name={icon} size={25} color={style as any} />
      </View>
      <View>
        <Text className="font-semibold">{label}</Text>
      </View>
      <View>
        <Text className="text-2xl">{summary}</Text>
      </View>
    </View>
  );
};

export default LinkButton;
