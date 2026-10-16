import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#F6F7FB" } }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="lead/[id]" options={{ headerShown: true, title: "Lead details", headerTintColor: "#17213A" }} />
        <Stack.Screen name="add-lead" options={{ headerShown: true, title: "Add lead", headerTintColor: "#17213A" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
