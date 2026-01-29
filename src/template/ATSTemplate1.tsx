import { View, Text, StyleSheet } from "react-native"
import { ResumeData } from "../types/resume"

const ATSTemplate1 = ({ resume }: { resume: ResumeData }) => {
  return (
    <View style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.name}>{resume.personal.name}</Text>
        <Text style={styles.contact}>
          {resume.personal.phone} | {resume.personal.email}
        </Text>
        <Text style={styles.contact}>
          {resume.personal.linkedin} | {resume.personal.location}
        </Text>
      </View>

      {/* SUMMARY */}
      {resume.summary && (
        <>
          <Text style={styles.sectionTitle}>OBJECTIVE</Text>
          <Text style={styles.paragraph}>{resume.summary}</Text>
        </>
      )}

      {/* SKILLS */}
      {resume.skills?.length && (
        <>
          <Text style={styles.sectionTitle}>SKILLS</Text>
          <View style={styles.skillBlock}>
            {resume.skills.map((s, i) => (
              <Text key={i} style={styles.bullet}>• {s}</Text>
            ))}
          </View>
        </>
      )}

      {/* EXPERIENCE */}
      <Text style={styles.sectionTitle}>EXPERIENCE</Text>
      {resume.experience.map((exp, i) => (
        <View key={i} style={styles.block}>
          <View style={styles.row}>
            <Text style={styles.bold}>{exp.company}</Text>
            <Text style={styles.muted}>{exp.startDate} – {exp.endDate}</Text>
          </View>
          <Text style={styles.italic}>{exp.role}</Text>
          {exp.points.map((p, idx) => (
            <Text key={idx} style={styles.bullet}>• {p}</Text>
          ))}
        </View>
      ))}

      {/* EDUCATION */}
      {resume.education?.length && (
        <>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          {resume.education.map((edu, i) => (
            <View key={i} style={styles.block}>
              <View style={styles.row}>
                <Text style={styles.bold}>{edu.institute}</Text>
                <Text style={styles.muted}>{edu.startDate} – {edu.endDate}</Text>
              </View>
              <Text style={styles.italic}>{edu.degree}</Text>
            </View>
          ))}
        </>
      )}

      {/* CERTIFICATIONS */}
      {resume.certifications?.length && (
        <>
          <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
          {resume.certifications.map((c, i) => (
            <Text key={i} style={styles.bullet}>• {c}</Text>
          ))}
        </>
      )}
    </View>
  )
}

export default ATSTemplate1
const A4_WIDTH = 794; // approx A4 width in px @ 96dpi

const styles = StyleSheet.create({
  /** FULL PAGE (A4) **/
  page: {
    backgroundColor: "#ffffff",

    // A4 width
    width: A4_WIDTH,
    alignSelf: "center",

    // ATS-friendly margins (converted from mm)
    paddingTop: 24,     // ~22mm
    paddingBottom: 24,  // ~22mm
    paddingHorizontal: 28, // ~18–20mm

    // IMPORTANT
    minHeight: 1123, // A4 height reference
  },

  /** HEADER **/
  header: {
    alignItems: "center",
    marginBottom: 16,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 4,
    letterSpacing: 0.2,
  },

  contact: {
    fontSize: 11,
    color: "#374151",
    lineHeight: 16,
  },

  /** SECTION **/
  sectionTitle: {
    marginTop: 18,
    marginBottom: 6,
    fontSize: 14,
    fontWeight: "700",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingBottom: 2,
  },

  /** TEXT **/
  paragraph: {
    fontSize: 12,
    lineHeight: 18,
    color: "#111827",
  },

  block: {
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bold: {
    fontSize: 12,
    fontWeight: "700",
  },

  italic: {
    fontSize: 12,
    fontStyle: "italic",
    marginBottom: 4,
  },

  muted: {
    fontSize: 11,
    color: "#4b5563",
  },

  bullet: {
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 8,
  },

  skillBlock: {
    marginTop: 4,
  },
});

