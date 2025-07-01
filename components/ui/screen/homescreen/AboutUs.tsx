import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AboutUs = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Our Story</Text>
          <Text style={styles.heroSubtitle}>Connecting farmers and consumers through technology</Text>
        </View>
      </View>

      {/* Mission Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          OrganicConnect was founded with a simple yet powerful mission: to create a transparent, 
          efficient marketplace that connects organic farmers directly with consumers. We aim to 
          eliminate middlemen, ensure fair prices for farmers, and provide consumers with authentic, 
          fresh organic produce.
        </Text>
      </View>

      {/* Vision Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Vision</Text>
        <Text style={styles.sectionText}>
          We envision a world where sustainable agriculture thrives, where consumers have easy access 
          to certified organic products, and where technology bridges the gap between producers and 
          consumers in an ethical, environmentally-friendly way.
        </Text>
      </View>

      {/* Team Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>The Team</Text>
        <View style={styles.teamMember}>
          <MaterialIcons name="person" size={24} color="#2E7D32" />
          <View style={styles.teamInfo}>
            <Text style={styles.memberName}>M.M.S Vimukthi Fernando</Text>
            <Text style={styles.memberRole}>Co-Founder & CEO</Text>
          </View>
        </View>
        <View style={styles.teamMember}>
          <MaterialIcons name="person" size={24} color="#2E7D32" />
          <View style={styles.teamInfo}>
            <Text style={styles.memberName}>A Gewmini S.M. Gunarathna</Text>
            <Text style={styles.memberRole}>Co-Founder & CTO</Text>
          </View>
        </View>
        <View style={styles.teamMember}>
          <MaterialIcons name="person" size={24} color="#2E7D32" />
          <View style={styles.teamInfo}>
            <Text style={styles.memberName}>J.A.D Minindi Wimandika</Text>
            <Text style={styles.memberRole}>Head of Operations</Text>
          </View>
        </View>
        <View style={styles.teamMember}>
          <MaterialIcons name="person" size={24} color="#2E7D32" />
          <View style={styles.teamInfo}>
            <Text style={styles.memberName}>W.D Anjala Senani Wickramasingha</Text>
            <Text style={styles.memberRole}>Marketing Director</Text>
          </View>
        </View>
        <View style={styles.teamMember}>
          <MaterialIcons name="person" size={24} color="#2E7D32" />
          <View style={styles.teamInfo}>
            <Text style={styles.memberName}>W.A. Ranidu Seneesh Wilwara Arachehi</Text>
            <Text style={styles.memberRole}>Product Manager</Text>
          </View>
        </View>
      </View>

      {/* Impact Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Impact</Text>
        <View style={styles.statContainer}>
          <View style={styles.statItem}>
            <MaterialIcons name="attach-money" size={32} color="#2E7D32" />
            <Text style={styles.statNumber}>30-50%</Text>
            <Text style={styles.statLabel}>Higher farmer income</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialIcons name="local-shipping" size={32} color="#2E7D32" />
            <Text style={styles.statNumber}>40%</Text>
            <Text style={styles.statLabel}>Cost savings for consumers</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialIcons name="eco" size={32} color="#2E7D32" />
            <Text style={styles.statNumber}>25%</Text>
            <Text style={styles.statLabel}>Lower carbon footprint</Text>
          </View>
        </View>
      </View>

      {/* Call to Action */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaText}>Join us in revolutionizing organic food distribution</Text>
        <Text 
          style={styles.ctaLink}
          onPress={() => Linking.openURL('mailto:contact@organicconnect.lk')}
        >
          Get in touch →
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  heroSection: {
    height: 250,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  section: {
    padding: 20,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 15,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 15,
  },
  teamMember: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  teamInfo: {
    marginLeft: 15,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  memberRole: {
    fontSize: 14,
    color: '#666',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  statItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#E8F5E9',
    borderRadius: 10,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  ctaSection: {
    padding: 30,
    alignItems: 'center',
  },
  ctaText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  ctaLink: {
    fontSize: 18,
    color: '#2E7D32',
    fontWeight: 'bold',
  },
});

export default AboutUs;