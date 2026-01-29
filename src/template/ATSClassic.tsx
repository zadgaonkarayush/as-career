import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from "../utils/colors";
import Spacing from "../utils/spacing";
import Typography from "../utils/typography";
import { ResumeData } from "../types/resume";

const ATSColorful = ({ data }: {data:ResumeData}) => {
  return (
    <ScrollView style={styles.page}>
      {/* NAVBAR */}
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>RESUME</Text>
      </View>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.personal.name}</Text>
        <Text style={styles.title}>{data.personal.title}</Text>
        <Text style={styles.contact}>
          {data.personal.email} | {data.personal.phone} | {data.personal.location}
        </Text>
        <Text style={styles.linkedin}>{data.personal.linkedin}</Text>
      </View>

      {/* SUMMARY */}
      <Section title="SUMMARY">
        <Text style={styles.text}>{data.summary}</Text>
      </Section>

      {/* SKILLS */}
      <Section title="SKILLS">
        <View style={styles.skillBlock}>
          {data.skills?.map((skill: string, i: number) => (
            <Text key={i} style={styles.skillText}>• {skill}</Text>
          ))}
        </View>
      </Section>

      {/* EXPERIENCE */}
      <Section title="EXPERIENCE">
        {data.experience.map((exp: any, i: number) => (
          <View key={i} style={styles.block}>
            <Text style={styles.jobTitle}>{exp.role}</Text>
            <Text style={styles.company}>
              {exp.company} | {exp.startDate} – {exp.endDate}
            </Text>
            {exp.points.map((p: string, j: number) => (
              <Text key={j} style={styles.text}>• {p}</Text>
            ))}
          </View>
        ))}
      </Section>

      {/* EDUCATION */}
      <Section title="EDUCATION">
        {data.education?.map((edu: any, i: number) => (
          <View key={i} style={styles.block}>
            <Text style={styles.jobTitle}>{edu.degree}</Text>
            <Text style={styles.company}>
              {edu.institute} | {edu.startDate} – {edu.endDate}
            </Text>
          </View>
        ))}
      </Section>

      {/* CERTIFICATIONS */}
      {data.certifications?.length > 0 && (
        <Section title="CERTIFICATIONS">
          {data.certifications.map((c: string, i: number) => (
            <Text key={i} style={styles.text}>• {c}</Text>
          ))}
        </Section>
      )}

      {/* ACHIEVEMENTS */}
      {data.achievements?.length > 0 && (
        <Section title="ACHIEVEMENTS">
          {data.achievements.map((a: string, i: number) => (
            <Text key={i} style={styles.text}>• {a}</Text>
          ))}
        </Section>
      )}

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Generated with Expo Resume Builder</Text>
      </View>
    </ScrollView>
  );
};

const Section = ({ title, children }: any) => (
  <View style={{ marginTop: Spacing.lg }}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

export default ATSColorful;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.gray,
    padding: Spacing.lg,
  },

  /** NAVBAR **/
  navbar: {
    width: "100%",
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    borderRadius: 4,
  },
  navbarText: {
    color: Colors.white,
    fontSize: Typography.h3,
    fontWeight: "700",
    textAlign: "center",
  },

  /** HEADER **/
  header: {
    alignItems: "center",
    backgroundColor: Colors.secondaryLight,
    padding: Spacing.md,
    borderRadius: 8,
    marginBottom: Spacing.lg,
  },
  name: {
    fontSize: Typography.h2,
    fontWeight: "700",
    color: Colors.primary,
  },
  title: {
    fontSize: Typography.h3,
    fontWeight: "600",
    color: Colors.text,
    marginVertical: 2,
    textAlign: "center",
  },
  contact: {
    fontSize: Typography.small,
    color: Colors.text,
    marginVertical: 1,
    textAlign: "center",
  },
  linkedin: {
    fontSize: Typography.small,
    color: Colors.accent,
    textAlign: "center",
    textDecorationLine: "underline",
  },

  /** SECTION **/
  sectionTitle: {
    fontSize: Typography.small,
    fontWeight: "700",
    color: Colors.accent,
    marginBottom: Spacing.sm,
    borderBottomWidth: 1,
    borderColor: Colors.accentLight,
    paddingBottom: 2,
  },

  /** TEXT **/
  text: {
    fontSize: Typography.small,
    color: Colors.text,
    lineHeight: 18,
    marginBottom: 2,
  },
  bold: {
    fontWeight: "700",
  },
  jobTitle: {
    fontSize: Typography.small,
    fontWeight: "700",
    color: Colors.primary,
  },
  company: {
    fontSize: Typography.small,
    color: Colors.muted,
    marginBottom: 4,
  },

  /** SKILLS **/
  skillBlock: {
    marginTop: Spacing.xs,
  },
  skillText: {
    fontSize: Typography.small,
    color: Colors.text,
    marginLeft: Spacing.xs,
    marginBottom: 2,
  },

  /** FOOTER **/
  footer: {
    marginTop: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderTopWidth: 1,
    borderColor: Colors.muted,
  },
  footerText: {
    fontSize: Typography.small,
    color: Colors.muted,
    textAlign: "center",
  },
});
