import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

const ink = "#17213A";
const muted = "#6D778D";
const blue = "#3157D5";

function Notice({ title, body, action, onPress }: { title: string; body: string; action: string; onPress: () => void }) {
  return <View style={styles.card}>
    <View style={styles.dot} />
    <View style={{ flex: 1, gap: 7 }}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Pressable accessibilityRole="button" onPress={onPress} style={styles.action}>
        <Text style={styles.actionText}>{action}  →</Text>
      </Pressable>
    </View>
  </View>;
}

export default function AttentionScreen() {
  return <ScrollView contentContainerStyle={styles.page}>
    <Text style={styles.eyebrow}>AGENTX SALES COMPANION</Text>
    <Text style={styles.heading}>Needs attention</Text>
    <Text style={styles.subheading}>The important things, without the noise.</Text>
    <View style={styles.notice}>
      <Text style={styles.noticeTitle}>Connect your sales API</Text>
      <Text style={styles.body}>This workspace has no existing FastAPI source or OpenAPI schema available yet. Live tasks will appear here after the real notification and authentication routes are verified. No sample customer data is shown.</Text>
    </View>
    <Notice title="Your next action" body="Connect to the existing AgentX backend to load assigned follow-ups and customer replies." action="View leads" onPress={() => router.navigate("/(tabs)/leads")} />
    <Text style={styles.footer}>Private by design · Data comes from your authorized backend</Text>
  </ScrollView>;
}

const styles = StyleSheet.create({
  page: { padding: 22, paddingTop: 30, gap: 14 },
  eyebrow: { color: blue, fontSize: 11, fontWeight: "800", letterSpacing: 1.4 },
  heading: { color: ink, fontSize: 30, fontWeight: "800", letterSpacing: -0.7 },
  subheading: { color: muted, fontSize: 14, marginBottom: 7 },
  notice: { padding: 17, borderRadius: 16, backgroundColor: "#EEF2FF", borderWidth: 1, borderColor: "#DCE4FF", gap: 8 },
  noticeTitle: { color: ink, fontSize: 16, fontWeight: "800" },
  body: { color: muted, fontSize: 13, lineHeight: 19 },
  card: { flexDirection: "row", gap: 12, padding: 17, borderRadius: 16, backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#E9ECF3" },
  dot: { width: 9, height: 9, borderRadius: 5, backgroundColor: blue, marginTop: 5 },
  cardTitle: { color: ink, fontSize: 15, fontWeight: "700" },
  action: { alignSelf: "flex-start", paddingVertical: 7 },
  actionText: { color: blue, fontSize: 13, fontWeight: "800" },
  footer: { color: muted, fontSize: 11, textAlign: "center", marginTop: 12 },
});
