import { View, Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";
import Spacing from "../utils/spacing";
import Typography from "../utils/typography";
const ATSMarketingTemplate = ({ data }: any) => {
  return (
    <View style={styles.container}>
      {/* ---------- HEADER ---------- */}
      <Text style={styles.name}>{data.name}</Text>

      <Text style={styles.title}>
        {data.title}
      </Text>

      <Text style={styles.contact}>
        {data.location} | {data.email} | {data.phone} | {data.linkedin}
      </Text>

      {/* ---------- SUMMARY ---------- */}
      <Section title="PROFESSIONAL SUMMARY">
        <Text style={styles.text}>{data.summary}</Text>
      </Section>

      {/* ---------- EXPERIENCE ---------- */}
      <Section title="WORK EXPERIENCE">
        {data.experience.map((job: any, index: number) => (
          <View key={index} style={styles.block}>
            <View style={styles.row}>
              <Text style={styles.bold}>{job.role}</Text>
              <Text style={styles.date}>{job.duration}</Text>
            </View>

            <Text style={styles.company}>
              {job.company}, {job.location}
            </Text>

            {job.points.map((p: string, i: number) => (
              <Text key={i} style={styles.bullet}>• {p}</Text>
            ))}
          </View>
        ))}
      </Section>

      {/* ---------- EDUCATION ---------- */}
      <Section title="EDUCATION">
        <View style={styles.row}>
          <Text style={styles.bold}>{data.education.degree}</Text>
          <Text style={styles.date}>{data.education.year}</Text>
        </View>
        <Text style={styles.company}>
          {data.education.college}, {data.education.location}
        </Text>
      </Section>

      {/* ---------- SKILLS ---------- */}
      <Section title="SKILLS">
        {data.skills.map((s: string, i: number) => (
          <Text key={i} style={styles.bullet}>• {s}</Text>
        ))}
      </Section>

      {/* ---------- CERTIFICATIONS ---------- */}
      <Section title="CERTIFICATIONS">
        {data.certifications.map((c: string, i: number) => (
          <Text key={i} style={styles.bullet}>• {c}</Text>
        ))}
      </Section>
    </View>
  );
};

export default ATSMarketingTemplate;

/* ---------- SECTION COMPONENT ---------- */
const Section = ({ title, children }: any) => (
  <View style={{ marginTop: Spacing.md }}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.divider} />
    {children}
  </View>
);

/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: Spacing.lg,
  },

  name: {
    fontSize: Typography.h1,
    fontWeight: "700",
    textAlign: "center",
    color: Colors.text,
  },

  title: {
    textAlign: "center",
    marginTop: Spacing.xs,
    fontSize: Typography.body,
  },

  contact: {
    textAlign: "center",
    fontSize: Typography.caption,
    marginTop: Spacing.xs,
    color: Colors.gray,
  },

  sectionTitle: {
    fontSize: Typography.small,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: Spacing.xs,
  },

  divider: {
    height: 1,
    backgroundColor: "#000",
    marginBottom: Spacing.sm,
  },

  text: {
    fontSize: Typography.body,
    lineHeight: 22,
  },

  block: {
    marginBottom: Spacing.md,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bold: {
    fontWeight: "700",
    fontSize: Typography.body,
  },

  company: {
    fontSize: Typography.small,
    marginBottom: Spacing.xs,
  },

  date: {
    fontSize: Typography.small,
  },

  bullet: {
    fontSize: Typography.body,
    lineHeight: 22,
  },
});
