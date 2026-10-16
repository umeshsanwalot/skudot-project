import { StyleSheet, Text, View } from "react-native";
export default function HistoryScreen() {
  return <View style={s.page}><Text style={s.heading}>History</Text><Text style={s.sub}>Won and lost purchases stay separate from active leads.</Text><View style={s.card}><Text style={s.title}>Purchase history connects to your backend</Text><Text style={s.copy}>No purchase records are fabricated. Once the existing history endpoint is identified, verified records will be displayed here.</Text></View></View>;
}
const s = StyleSheet.create({ page: { flex: 1, padding: 22, paddingTop: 30, gap: 12 }, heading: { color: "#17213A", fontSize: 30, fontWeight: "800" }, sub: { color: "#6D778D", fontSize: 14, lineHeight: 20 }, card: { marginTop: 12, padding: 18, backgroundColor: "#FFFFFF", borderRadius: 16, borderWidth: 1, borderColor: "#E8EAF1", gap: 8 }, title: { color: "#17213A", fontSize: 16, fontWeight: "700" }, copy: { color: "#6D778D", fontSize: 13, lineHeight: 20 } });
