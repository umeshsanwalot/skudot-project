import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

export default function LeadsScreen() {
  return <ScrollView contentContainerStyle={s.page}>
    <Text style={s.heading}>Leads</Text>
    <Text style={s.sub}>Your active customer relationships.</Text>
    <View style={s.empty}>
      <Text style={s.icon}>↗</Text>
      <Text style={s.title}>Live leads will appear here</Text>
      <Text style={s.copy}>The mobile app must use the existing FastAPI lead and assignment rules. The repository currently contains no API implementation or OpenAPI contract to safely connect.</Text>
    </View>
    <Pressable onPress={() => router.push("/add-lead")} style={s.button}><Text style={s.buttonText}>＋  Add a lead</Text></Pressable>
  </ScrollView>;
}
const s = StyleSheet.create({
  page: { padding: 22, paddingTop: 30, gap: 12 },
  heading: { color: "#17213A", fontSize: 30, fontWeight: "800" },
  sub: { color: "#6D778D", fontSize: 14 },
  empty: { marginTop: 16, backgroundColor: "#FFFFFF", borderColor: "#E8EAF1", borderWidth: 1, borderRadius: 18, padding: 22, gap: 10 },
  icon: { color: "#3157D5", fontSize: 26, fontWeight: "800" },
  title: { color: "#17213A", fontSize: 17, fontWeight: "800" },
  copy: { color: "#6D778D", fontSize: 13, lineHeight: 20 },
  button: { marginTop: 4, backgroundColor: "#3157D5", padding: 16, borderRadius: 13, alignItems: "center" },
  buttonText: { color: "#FFFFFF", fontWeight: "800", fontSize: 14 },
});
