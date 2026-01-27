import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../utils/colors";
import Spacing from "../utils/spacing";
import Typography from "../utils/typography";
import {wp} from "../utils/dimensions"

export default function ProfileScreen() {
  // Static user data
  const user = {
    name: "Ayush Zadgaonkar",
    role: "React Native Developer",
    email: "zadgaonkarayush@gmail.com",
  };

  const handleLogout = () => {
    console.log("Logout pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
        <View style={{ width: 40 }} /> {/* Placeholder for alignment */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* PROFILE IMAGE */}
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/921/921071.png",
            }}
            style={styles.avatar}
          />
        </View>

        {/* NAME & ROLE */}
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.role}>{user.role}</Text>

        {/* CONTACT CARD */}
        <View style={styles.contactCard}>
          <View style={styles.row}>
            <Ionicons name="people" size={22} color={Colors.primary} />
            <Text style={styles.rowText}>{user.name}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Ionicons name="mail-outline" size={22} color={Colors.primary} />
            <Text style={styles.rowText}>{user.email}</Text>
          </View>
        </View>

        {/* LOGOUT BUTTON */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    height: Spacing.vLg * 2.5,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Spacing.md,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    color: Colors.white,
    fontSize: Typography.h2,
    fontWeight: "700",
  },
  scrollContent: {
    padding: Spacing.md,
    paddingBottom: 60,
    alignItems: "center",
    marginTop:Spacing.xl*4,
  },
  avatarContainer: {
    marginTop: -Spacing.vLg,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: Colors.secondary,
    overflow: "hidden",
  },
  avatar: {
    width: wp(30),
    height: wp(30),
    borderRadius: 100,
  },
  name: {
    fontSize: Typography.h2,
    fontWeight: "700",
    color: Colors.text,
    marginTop: Spacing.vMd,
  },
  role: {
    fontSize: Typography.body,
    color: Colors.gray,
    marginBottom: Spacing.vLg,
  },
  contactCard: {
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: Spacing.md,
    shadowColor: Colors.gray,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    marginBottom: Spacing.vLg,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.sm,
    paddingVertical: Spacing.sm,
  },
  rowText: {
    fontSize: Typography.body,
    color: Colors.text,
    marginLeft: Spacing.sm,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.gray,
    marginVertical: Spacing.sm,
  },
  logoutBtn: {
    backgroundColor: Colors.secondary,
    paddingVertical: Spacing.vMd,
    paddingHorizontal: Spacing.lg,
    borderRadius: 12,
    alignItems: "center",
    width: "80%",
  },
  logoutText: {
    color: Colors.white,
    fontSize: Typography.body,
    fontWeight: "600",
  },
});

