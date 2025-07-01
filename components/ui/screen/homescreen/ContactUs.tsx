import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

const ContactUs = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Get In Touch</Text>
        <Text style={styles.heroSubtitle}>We'd love to hear from you</Text>
      </View>

      {/* Contact Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        
        <TouchableOpacity 
          style={styles.contactItem}
          onPress={() => Linking.openURL('mailto:contact@Freshly.lk')}
        >
          <MaterialIcons name="email" size={24} color="#2E7D32" />
          <Text style={styles.contactText}>contact@Freshly.lk</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.contactItem}
          onPress={() => Linking.openURL('tel:+94112345678')}
        >
          <MaterialIcons name="phone" size={24} color="#2E7D32" />
          <Text style={styles.contactText}>+94 112 345 678</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.contactItem}
          onPress={() => Linking.openURL('https://goo.gl/maps/example')}
        >
          <MaterialIcons name="location-on" size={24} color="#2E7D32" />
          <Text style={styles.contactText}>123 Organic Street, Colombo 05, Sri Lanka</Text>
        </TouchableOpacity>
        
        <View style={styles.socialContainer}>
          <TouchableOpacity 
            style={styles.socialIcon}
            onPress={() => Linking.openURL('https://facebook.com/organicconnect')}
          >
            <FontAwesome name="facebook" size={24} color="#2E7D32" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.socialIcon}
            onPress={() => Linking.openURL('https://twitter.com/organicconnect')}
          >
            <FontAwesome name="twitter" size={24} color="#2E7D32" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.socialIcon}
            onPress={() => Linking.openURL('https://instagram.com/organicconnect')}
          >
            <FontAwesome name="instagram" size={24} color="#2E7D32" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.socialIcon}
            onPress={() => Linking.openURL('https://linkedin.com/company/organicconnect')}
          >
            <FontAwesome name="linkedin" size={24} color="#2E7D32" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Contact Form */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Send Us a Message</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#999"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Subject"
          placeholderTextColor="#999"
        />
        
        <TextInput
          style={[styles.input, { height: 120, textAlignVertical: 'top' }]}
          placeholder="Your Message"
          placeholderTextColor="#999"
          multiline
        />
        
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Send Message</Text>
        </TouchableOpacity>
      </View>

      {/* FAQ Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        
        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I verify organic certification?</Text>
          <Text style={styles.faqAnswer}>
            All products on our platform are verified using blockchain technology. 
            You can scan the QR code on any product to view its complete certification history.
          </Text>
        </View>
        
        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>What are your delivery hours?</Text>
          <Text style={styles.faqAnswer}>
            We deliver 7 days a week from 8:00 AM to 8:00 PM. Same-day delivery is available 
            for orders placed before 12:00 PM.
          </Text>
        </View>
        
        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I become a seller on OrganicConnect?</Text>
          <Text style={styles.faqAnswer}>
            Farmers can apply through our website or mobile app. We'll verify your organic 
            certification and help you set up your digital storefront.
          </Text>
        </View>
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
    height: 150,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  heroSubtitle: {
    color: '#fff',
    fontSize: 16,
  },
  section: {
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
    flex: 1,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  socialIcon: {
    padding: 10,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#2E7D32',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  faqItem: {
    marginBottom: 20,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default ContactUs;