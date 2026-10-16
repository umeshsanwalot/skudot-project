import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function LeadDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <View style={s.page}><Text style={s.title}>Lead details</Text><Text style={s.copy}>Lead reference: {id}</Text><Text style={s.copy}>Current details and AgentX controls will load from authorized APIs only. No cached notification text is treated as current truth.</Text></View>;
}
const s = StyleSheet.create({ page: { flex: 1, padding: 22, gap: 12, backgroundColor: "#F6F7FB" }, title: { color: "#17213A", fontSize: 25, fontWeight: "800" }, copy: { color: "#6D778D", fontSize: 14, lineHeight: 21, backgroundColor: "#FFFFFF", padding: 16, borderRadius: 14 } });
