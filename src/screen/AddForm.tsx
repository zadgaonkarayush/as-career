import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../utils/colors";
import Spacing from "../utils/spacing";
import Typography from "../utils/typography";

const AddForm = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* ---------- HEADER ---------- */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add Resume Info</Text>

        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ---------- BANNER ---------- */}
        <View style={styles.banner}>
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTag}>ATS RESUME</Text>
            <Text style={styles.bannerTitle}>
              Improve your resume score 🚀
            </Text>
            <Text style={styles.bannerSub}>
              Fill correct details to pass screening systems
            </Text>
          </View>

          <TouchableOpacity style={styles.bannerBtn}>
            <Text style={styles.bannerBtnText}>Tips</Text>
          </TouchableOpacity>
        </View>

        {/* ---------- FORM ---------- */}
        <View style={styles.form}>
          <Text style={styles.sectionTitle}>Personal Details</Text>

          <Input label="Full Name" placeholder="Enter your name" />
          <Input label="Email" placeholder="Enter email address" />
          <Input label="Phone" placeholder="Enter phone number" />

          <Text style={styles.sectionTitle}>Professional Details</Text>

          <Input
            label="Skills"
            placeholder="React, JavaScript, HTML, CSS"
          />
          <Input
            label="Projects / Experience"
            placeholder="Resume App, Portfolio Website"
            multiline
          />

          <Text style={styles.sectionTitle}>Education</Text>

          <Input
            label="Education"
            placeholder="B.E Computer Science, 2024"
          />

          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitText}>Save & Check Score</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/* ---------- INPUT COMPONENT ---------- */
const Input = ({ label, ...props }: any) => (
  <View style={styles.inputWrapper}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholderTextColor={Colors.gray}
      {...props}
    />
  </View>
);

export default AddForm;

/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Spacing.md,
    alignItems: "center",
  },

  headerTitle: {
    fontSize: Typography.h3,
    fontWeight: "700",
    color: Colors.text,
  },

  banner: {
    backgroundColor: "#111",
    marginHorizontal: Spacing.md,
    borderRadius: 20,
    padding: Spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.md,
  },

  bannerTag: {
    color: Colors.primary,
    fontWeight: "700",
    fontSize: Typography.caption,
  },

  bannerTitle: {
    color: Colors.white,
    fontSize: Typography.h3,
    fontWeight: "700",
    marginTop: Spacing.xs,
  },

  bannerSub: {
    color: "#B5B5B5",
    fontSize: Typography.small,
    marginTop: Spacing.xs,
  },

  bannerBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: 14,
  },

  bannerBtnText: {
    color: Colors.white,
    fontWeight: "700",
    fontSize: Typography.small,
  },

  form: {
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.md,
  },

  sectionTitle: {
    fontSize: Typography.body,
    fontWeight: "700",
    marginBottom: Spacing.sm,
    marginTop: Spacing.md,
    color: Colors.text,
  },

  inputWrapper: {
    marginBottom: Spacing.md,
  },

  inputLabel: {
    fontSize: Typography.small,
    color: Colors.gray,
    marginBottom: Spacing.xs,
  },

  input: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    fontSize: Typography.body,
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },

  submitBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: 18,
    marginVertical: Spacing.lg,
    alignItems: "center",
  },

  submitText: {
    color: Colors.white,
    fontSize: Typography.body,
    fontWeight: "700",
  },
});
