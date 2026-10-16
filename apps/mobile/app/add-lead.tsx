import { StyleSheet, Text, View } from "react-native";
export default function AddLeadScreen() {
  return <View style={s.page}><Text style={s.title}>Add a lead</Text><Text style={s.copy}>Lead creation is intentionally disabled until the existing customer matching, phone normalization, and lead creation API contracts are inspected. This avoids duplicate customers and invented business rules.</Text></View>;
}
const s = StyleSheet.create({ page: { flex: 1, padding: 22, gap: 12, backgroundColor: "#F6F7FB" }, title: { color: "#17213A", fontSize: 25, fontWeight: "800" }, copy: { color: "#6D778D", fontSize: 14, lineHeight: 21, backgroundColor: "#FFFFFF", padding: 18, borderRadius: 16 } });
