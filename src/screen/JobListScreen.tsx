import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  StyleSheet,
 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const formatDate = (dateString: string) => {
  const posted = new Date(dateString);
  const now = new Date();
  const diff = Math.floor(
    (now.getTime() - posted.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (diff === 0) return 'Today';
  if (diff === 1) return '1 day ago';
  return `${diff} days ago`;
};

const JobListScreen = () => {
  const navigation = useNavigation();
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://remotive.com/api/remote-jobs");
const formattedJobs = res.data.jobs.map((job: any) => ({
        id: job.id.toString(),
        title: job.title,
        company: job.company_name,
        location: job.candidate_required_location || 'Remote',
        tag: job.job_type || 'FULL-TIME',
        salary: job.salary || 'Not Disclosed',
        date: job.publication_date,
        image: 'https://picsum.photos/200', // placeholder
        url: job.url,
      }));

      setJobs(formattedJobs);
    } catch (err) {
      console.log("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const applyJob = (url: string) => Linking.openURL(url);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#FF7A00" />
        <Text style={{ marginTop: 10 }}>Loading jobs...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Latest Jobs</Text>

        <View style={{ width: 24 }} />
      </View>

      {/* JOB LIST */}
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.category}>{item.category}</Text>

            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>

            <Text style={styles.company}>{item.company} • Remote</Text>
                  <Text style={styles.date}>{formatDate(item.date)}</Text>
            
            <View style={styles.footer}>
              <Text style={styles.salary}>₹ {item.salary}</Text>

              <TouchableOpacity
                style={styles.applyBtn}
                onPress={() => applyJob(item.url)}
              >
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* BOTTOM CTA / AD PLACEHOLDER */}
      <View style={styles.bottomBanner}>
        <Text style={{ fontWeight: "600" }}>
          Build Resume & Apply Faster 🚀
        </Text>
        <Text style={{ fontSize: 12, color: "#666" }}>
          Upgrade to Premium for early access
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default JobListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  category: {
    color: "#009688",
    fontWeight: "700",
    fontSize: 12,
    marginBottom: 4,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },

  company: {
    color: "#666",
    fontSize: 13,
    marginBottom: 12,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  salary: {
    fontSize: 13,
    color: "#444",
  },

  applyBtn: {
    backgroundColor: "#FF7A00",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 8,
  },

  applyText: {
    color: "#fff",
    fontWeight: "700",
  },

  bottomBanner: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#EEF2F7",
    padding: 14,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
   date: {
    fontSize: 12,
    color: '#999',
    marginBottom: 6,
  },
});
