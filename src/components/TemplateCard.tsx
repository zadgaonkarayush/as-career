import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TemplateCard = ({ title, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Fake preview */}
      <View style={styles.preview}>
        <View style={styles.lineLarge} />
        <View style={styles.lineSmall} />
        <View style={styles.lineSmall} />
        <View style={styles.block} />
        <View style={styles.block} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TemplateCard;

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
  },

  preview: {
    height: 140,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 6,
  },

  lineLarge: {
    height: 10,
    backgroundColor: "#000",
    marginBottom: 6,
    width: "80%",
  },

  lineSmall: {
    height: 6,
    backgroundColor: "#555",
    marginBottom: 4,
    width: "60%",
  },

  block: {
    height: 8,
    backgroundColor: "#aaa",
    marginBottom: 5,
    width: "100%",
  },

  title: {
    marginTop: 10,
    fontWeight: "600",
    textAlign: "center",
  },
});
