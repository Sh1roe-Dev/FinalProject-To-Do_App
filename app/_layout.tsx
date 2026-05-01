import { Tabs } from "expo-router";
import "remixicon/fonts/remixicon.css";
import "../global.css";

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
