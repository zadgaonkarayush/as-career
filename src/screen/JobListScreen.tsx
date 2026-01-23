import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";

const categories = ["All Jobs", "IT", "Banking", "Govt"];

const JobListScreen = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All Jobs");

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jobicy.com/jobs-rss-feed"
      );

      // Take all jobs as they are, no filters
      const allJobs = (response.data.jobs || []).map((job: any) => ({
        id: `arbeitnow-${job.slug}`,
        title: job.title,
        company_name: job.company_name,
        category: job.category || "IT",
        url: job.url,
        salary: job.salary || "Not Disclosed",
      }));

      setJobs(allJobs);
    } catch (error) {
      console.log("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  console.log(jobs)

  const filteredJobs =
    activeCategory === "All Jobs"
      ? jobs
      : jobs.filter((job) =>
          job.category?.toLowerCase().includes(activeCategory.toLowerCase())
        );

  const applyJob = (url: string) => Linking.openURL(url);

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  if (!jobs.length) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>No jobs found 😔</Text>
        <TouchableOpacity onPress={fetchJobs} style={{ marginTop: 12 }}>
          <Text style={{ color: "#FF7A00", fontWeight: "bold" }}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#F6F7FB" }}>
      <Text style={styles.header}>Latest Job Openings</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}
      >
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setActiveCategory(cat)}
            style={[styles.tab, activeCategory === cat && styles.activeTab]}
          >
            <Text
              style={[
                styles.tabText,
                activeCategory === cat && styles.activeTabText,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, paddingBottom: 120 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.category}>{item.category || "IT"}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.company}>
              {item.company_name} • Remote / India
            </Text>
            <View style={styles.row}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>FULL-TIME</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>₹ {item.salary}</Text>
              </View>
              <TouchableOpacity
                onPress={() => applyJob(item.url)}
                style={styles.applyBtn}
              >
                <Text style={styles.applyText}>Apply Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.adBanner}>
        <Text style={{ fontWeight: "bold" }}>
          Boost Your Profile to 10x Exposure!
        </Text>
        <Text style={{ color: "#666", fontSize: 12 }}>
          Upgrade to Premium for early access
        </Text>
      </View>
    </View>
  );
};

export default JobListScreen;

const styles = StyleSheet.create({
  header: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginTop: 16 },
  tabs: { marginVertical: 12, paddingHorizontal: 10 },
  tab: { backgroundColor: "#E9EEF6", paddingHorizontal: 18, paddingVertical: 8, borderRadius: 20, marginRight: 10 },
  activeTab: { backgroundColor: "#FF7A00" },
  tabText: { color: "#333", fontWeight: "500" },
  activeTabText: { color: "#fff" },
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 14, marginBottom: 14, elevation: 2 },
  category: { color: "#009688", fontWeight: "bold", fontSize: 12 },
  title: { fontSize: 17, fontWeight: "bold", marginVertical: 4 },
  company: { color: "#666", marginBottom: 10 },
  row: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },
  tag: { backgroundColor: "#EEF2F7", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, marginRight: 8 },
  tagText: { fontSize: 12, color: "#333" },
  applyBtn: { marginLeft: "auto", backgroundColor: "#FF7A00", paddingHorizontal: 14, paddingVertical: 8, borderRadius: 8 },
  applyText: { color: "#fff", fontWeight: "bold" },
  adBanner: { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "#EEF2F7", padding: 12, borderTopWidth: 1, borderColor: "#ddd" },
});
