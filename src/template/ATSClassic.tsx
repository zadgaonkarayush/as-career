import { View, Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";
import Spacing from "../utils/spacing";
import Typography from "../utils/typography";
Typography
const ATSClassic = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.contact}>
        {data.email} | {data.phone}
      </Text>

      <Section title="SKILLS">
        <Text>{data.skills.join(", ")}</Text>
      </Section>

      <Section title="PROJECTS">
        {data.projects.map((item: any, index: number) => (
          <View key={index} style={{ marginBottom: Spacing.sm }}>
            <Text style={styles.bold}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        ))}
      </Section>

      <Section title="EDUCATION">
        <Text>{data.education}</Text>
      </Section>
    </View>
  );
};

const Section = ({ title, children }: any) => (
  <View style={{ marginTop: Spacing.md }}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

export default ATSClassic;

const styles = StyleSheet.create({
  container: {
    padding: Spacing.lg,
    backgroundColor: Colors.white
  },
  name: {
    fontSize: Typography.h2,
    fontWeight: "700"
  },
  contact: {
    fontSize: Typography.small,
    marginBottom: Spacing.md
  },
  sectionTitle: {
    fontSize: Typography.small,
    fontWeight: "700",
    marginBottom: Spacing.xs
  },
  bold: {
    fontWeight: "700"
  }
});
