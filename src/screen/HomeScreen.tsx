import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';

import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

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

const HomeScreen = () => {
  const navigation = useNavigation();
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://remotive.com/api/remote-jobs');

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

      setJobs(formattedJobs.slice(0, 3));
    } catch (err) {
      console.log('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100' }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.greeting}>Hello,</Text>
              <Text style={styles.name}>User</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.bell}>
            <Ionicons name='notifications-outline' size={22} color='#000' />
            <View style={styles.dot} />
          </TouchableOpacity>
        </View>

        {/* QUICK ACTIONS */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.quickRow}>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Add-Form' as never)}
          style={[styles.quickCard, { backgroundColor: '#FF7A00' }]}>
            <View style={styles.quickIcon}>
              <Ionicons name='document-text-outline' size={22} color='#fff' />
            </View>
            <Text style={styles.quickText}>Create{`\n`}Resume</Text>
          </TouchableOpacity>

          <View style={[styles.quickCard, { backgroundColor: '#00C2A8' }]}>
            <View style={styles.quickIcon}>
              <Ionicons name='grid-outline' size={22} color='#fff' />
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Resume' as never)}
            >
                          <Text style={styles.quickText}>View{`\n`}Templates</Text>

            </TouchableOpacity>
          </View>
        </View>

        {/* JOB HIGHLIGHTS */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Job Highlights</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Job' as never)}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        {jobs.map((item) => (
          <JobCard
            key={item.id}
            title={item.title}
            company={`${item.company} • ${item.location}`}
            tag={item.tag}
            salary={item.salary}
            date={item.date}
            image={item.image}
            url={item.url}
          />
        ))}

        {/* BANNER */}
        <View style={styles.banner}>
          <View>
            <Text style={styles.bannerTag}>LIMITED OFFER</Text>
            <Text style={styles.bannerTitle}>Get AI Resume Scan</Text>
            <Text style={styles.bannerSub}>
              Analyze your resume for free today.
            </Text>
          </View>

          <TouchableOpacity style={styles.bannerBtn}>
            <Text style={styles.bannerBtnText}>Try Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

/* JOB CARD COMPONENT */
const JobCard = ({ title, company, tag, salary, image, date, url }: any) => (
  <View style={styles.card}>
    <View style={{ flex: 1 }}>
      <Text style={styles.jobTitle}>{title}</Text>
      <Text style={styles.company}>{company}</Text>

      <View style={styles.badges}>
        <Text style={styles.badge}>{tag}</Text>
        <Text style={styles.salary}>{salary}</Text>
      </View>

      <Text style={styles.date}>{formatDate(date)}</Text>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyText}>Quick Apply</Text>
        <Ionicons name='chevron-forward' size={14} color='#000' />
      </TouchableOpacity>
    </View>

    <Image source={{ uri: image }} style={styles.jobImage} />
  </View>
);

/* STYLES */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 44, height: 44, borderRadius: 22, marginRight: 12 },
  greeting: { color: '#777', fontSize: 13 },
  name: { fontSize: 17, fontWeight: '700' },
  bell: { position: 'relative' },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#FF7A00',
    borderRadius: 4,
    position: 'absolute',
    top: 0,
    right: 0,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 20,
    marginBottom: 12,
  },

  quickRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  quickCard: {
    flex: 1,
    borderRadius: 20,
    padding: 18,
    marginRight: 12,
    justifyContent: 'space-between',
  },
  quickIcon: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickText: { color: '#fff', fontSize: 16, fontWeight: '700' },

  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  seeAll: { color: '#FF7A00', fontWeight: '600' },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    elevation: 2,
  },
  jobTitle: { fontSize: 16, fontWeight: '700' },
  company: { color: '#777', marginVertical: 6 },
  badges: { flexDirection: 'row', marginBottom: 8 },
  badge: {
    backgroundColor: '#FFE8D6',
    color: '#FF7A00',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
    fontSize: 12,
    fontWeight: '600',
  },
  salary: {
    backgroundColor: '#EEF2F7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: '600',
  },
  applyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  applyText: { fontWeight: '700', marginRight: 4 },

  jobImage: {
    width: 90,
    height: 90,
    borderRadius: 14,
    marginLeft: 12,
  },

  banner: {
    backgroundColor: '#111',
    margin: 20,
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerTag: { color: '#FF7A00', fontWeight: '700', fontSize: 12 },
  bannerTitle: { color: '#fff', fontSize: 18, fontWeight: '700' },
  bannerSub: { color: '#aaa', fontSize: 12, marginTop: 4 },
  bannerBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  bannerBtnText: { fontWeight: '700' },
  date: {
    fontSize: 12,
    color: '#999',
    marginBottom: 6,
  },
});
