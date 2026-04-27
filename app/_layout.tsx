import { Stack, Tabs } from "expo-router";
import "remixicon/fonts/remixicon.css";
import "../global.css";
import { BgColor } from "@/services/_index/_colors";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: "none",
        },
      }}
    />
  );
}
