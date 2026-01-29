import { View, Text, StyleSheet } from "react-native"
import { ResumeData } from "../types/resume"

/**
 * A4 size in pixels (96 DPI)
 * Used by most resume builders
 */
const A4_WIDTH = 794
const A4_MIN_HEIGHT = 1123
const SIDEBAR_WIDTH = 220

const ATSTemplateSidebar = ({ resume }: { resume: ResumeData }) => {
  return (
    <View style={styles.page}>
      {/* SIDEBAR */}
      <View style={styles.sidebar}>
        <Text style={styles.name}>{resume.personal.name}</Text>
        <Text style={styles.role}>{resume.personal.title}</Text>

        {!!resume.skills?.length && (
          <View style={styles.sideBlock}>
            <Text style={styles.sideTitle}>SKILLS</Text>
            {resume.skills.map((s, i) => (
              <Text key={i} style={styles.sideText}>• {s}</Text>
            ))}
          </View>
        )}

        {!!resume.achievements?.length && (
          <View style={styles.sideBlock}>
            <Text style={styles.sideTitle}>ACHIEVEMENTS</Text>
            {resume.achievements.map((a, i) => (
              <Text key={i} style={styles.sideText}>• {a}</Text>
            ))}
          </View>
        )}
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.main}>
        {!!resume.summary && (
          <Section title="SUMMARY">
            <Text style={styles.paragraph}>{resume.summary}</Text>
          </Section>
        )}

        {!!resume.experience?.length && (
          <Section title="EXPERIENCE">
            {resume.experience.map((exp, i) => (
              <View key={i} style={styles.block}>
                <Text style={styles.bold}>{exp.role}</Text>
                <Text style={styles.muted}>
                  {exp.company} | {exp.startDate} – {exp.endDate}
                </Text>

                {exp.points.map((p, j) => (
                  <Text key={j} style={styles.bullet}>• {p}</Text>
                ))}
              </View>
            ))}
          </Section>
        )}

        {!!resume.education?.length && (
          <Section title="EDUCATION">
            {resume.education.map((edu, i) => (
              <View key={i} style={styles.block}>
                <Text style={styles.bold}>{edu.degree}</Text>
                <Text style={styles.muted}>{edu.institute}</Text>
              </View>
            ))}
          </Section>
        )}
      </View>
    </View>
  )
}

const Section = ({ title, children }: { title: string; children: any }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
)

export default ATSTemplateSidebar

const styles = StyleSheet.create({
  /* PAGE */
  page: {
    flexDirection: "row",
    width: A4_WIDTH,
    minHeight: A4_MIN_HEIGHT,
    backgroundColor: "#ffffff",
    alignSelf: "center",

    // 🔑 allows page to grow vertically
    alignItems: "stretch",
  },

  /* SIDEBAR */
  sidebar: {
    width: SIDEBAR_WIDTH,
    backgroundColor: "#1F2937",
    padding: 20,

    // 🔑 prevents collapse
    flexShrink: 0,
  },

  sideBlock: {
    marginTop: 16,
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ffffff",
    lineHeight: 26,
  },

  role: {
    fontSize: 12,
    color: "#93C5FD",
    marginTop: 4,
    marginBottom: 16,
  },

  sideTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#ffffff",
    borderBottomWidth: 1,
    borderColor: "#93C5FD",
    paddingBottom: 2,
    marginBottom: 6,
  },

  sideText: {
    fontSize: 11,
    color: "#E5E7EB",
    marginTop: 6,
    lineHeight: 16,
  },

  /* MAIN */
  main: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingVertical: 24,
  },

  section: {
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 6,
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingBottom: 2,
  },

  paragraph: {
    fontSize: 12,
    lineHeight: 18,
    color: "#111827",
  },

  block: {
    marginBottom: 12,
  },

  bold: {
    fontSize: 12,
    fontWeight: "700",
    color: "#111827",
  },

  muted: {
    fontSize: 11,
    color: "#4B5563",
    marginBottom: 4,
  },

  bullet: {
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 8,
    color: "#111827",
  },
})
