import { View, Text, FlatList, StyleSheet } from "react-native";
import TemplateCard from "../components/TemplateCard";
import { useNavigation } from "@react-navigation/native";

const templates = [
  {
    id: "1",
    name: "ATS Marketing Resume",
    screen: "ATSPreview",
  },
  
];

const TemplateScreen = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose a Resume Template</Text>

      <FlatList
        data={templates}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TemplateCard
            title={item.name}
            onPress={() =>
              navigation.navigate(item.screen)
            }
          />
        )}
      />
    </View>
  );
};

export default TemplateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },

  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
});
