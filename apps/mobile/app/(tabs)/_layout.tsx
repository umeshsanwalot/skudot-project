import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const items = [
  { name: "attention", title: "Attention", icon: "notifications-outline" as const },
  { name: "leads", title: "Leads", icon: "people-outline" as const },
  { name: "history", title: "History", icon: "time-outline" as const },
  { name: "account", title: "Account", icon: "person-circle-outline" as const },
];

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerStyle: { backgroundColor: "#FFFFFF" },
      headerTitleStyle: { color: "#17213A", fontWeight: "700" },
      tabBarActiveTintColor: "#3157D5",
      tabBarInactiveTintColor: "#7B8498",
      tabBarStyle: { height: 64, paddingTop: 7, paddingBottom: 8, borderTopColor: "#E8EAF1" },
      tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
    }}>
      {items.map((item) => (
        <Tabs.Screen key={item.name} name={item.name} options={{
          title: item.title,
          tabBarIcon: ({ color, size }) => <Ionicons name={item.icon} color={color} size={size} />,
        }} />
      ))}
    </Tabs>
  );
}
