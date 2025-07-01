import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const PaymentDetails = ({navigation}:any) => {
  const paymentMethods = [
    {
      id: 1,
      name: 'Credit/Debit Card',
      icon: 'credit-card',
      image: 'https://cdn-icons-png.flaticon.com/512/179/179457.png',
      description: 'Visa, Mastercard, American Express'
    },
    {
      id: 2,
      name: 'PayPal',
      icon: 'paypal',
      image: 'https://cdn-icons-png.flaticon.com/512/174/174861.png',
      description: 'Secure online payments'
    },
    {
      id: 3,
      name: 'Bank Transfer',
      icon: 'account-balance',
      image: 'https://cdn-icons-png.flaticon.com/512/2659/2659360.png',
      description: 'Direct bank to bank transfer'
    },
    {
      id: 4,
      name: 'Cash on Delivery',
      icon: 'local-atm',
      image: 'https://cdn-icons-png.flaticon.com/512/2703/2703533.png',
      description: 'Pay when you receive your order'
    },
  ];
  const handlePaymentMethodPress = (method: any) => {
    if (method.name === 'Cash on Delivery') {
    navigation.navigate('CashOnDelivery');
  } else {
    alert(`Selected: ${method.name}`);
  }
};

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Payment Options</Text>
        <Text style={styles.heroSubtitle}>Secure and convenient payment methods</Text>
      </View>

      {/* Payment Methods */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Available Payment Methods</Text>
        
        {paymentMethods.map(method => (
          <TouchableOpacity key={method.id}
           style={styles.paymentMethod}
            onPress={() => handlePaymentMethodPress(method)}
        >
            <View style={styles.methodLeft}>
              <Image 
                source={{ uri: method.image }} 
                style={styles.methodImage} 
                resizeMode="contain"
              />
              <View style={styles.methodInfo}>
                <Text style={styles.methodName}>{method.name}</Text>
                <Text style={styles.methodDesc}>{method.description}</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#666" />
           
          </TouchableOpacity>
        ))}
      </View>

      {/* Security Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Security</Text>
        <View style={styles.securityItem}>
          <MaterialIcons name="security" size={24} color="#2E7D32" />
          <Text style={styles.securityText}>All payments are encrypted and processed securely</Text>
        </View>
        <View style={styles.securityItem}>
          <MaterialIcons name="verified-user" size={24} color="#2E7D32" />
          <Text style={styles.securityText}>We don't store your credit card details</Text>
        </View>
        <View style={styles.securityItem}>
          <MaterialIcons name="lock" size={24} color="#2E7D32" />
          <Text style={styles.securityText}>SSL secured checkout</Text>
        </View>
      </View>

      {/* Refund Policy */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Refund Policy</Text>
        <Text style={styles.policyText}>
          If you're not satisfied with your purchase, we offer a 7-day money-back guarantee 
          for all products. Please contact our customer support to initiate a refund.
        </Text>
        <Text style={styles.policyText}>
          Refunds for digital products will be processed within 3-5 business days. 
          For physical products, please return the items in their original condition.
        </Text>
      </View>

      {/* Help Section */}
      <View style={styles.helpSection}>
        <Text style={styles.helpText}>Need help with payments?</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpButtonText}>Contact Support</Text>
        </TouchableOpacity>
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
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  methodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  methodImage: {
    width: 40,
    height: 40,
  },
  methodInfo: {
    marginLeft: 15,
  },
  methodName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  methodDesc: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },
  securityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  securityText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
    flex: 1,
  },
  policyText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 15,
  },
  helpSection: {
    backgroundColor: '#E8F5E9',
    margin: 15,
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    elevation: 2,
  },
  helpText: {
    fontSize: 18,
    color: '#2E7D32',
    marginBottom: 15,
    textAlign: 'center',
  },
  helpButton: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  helpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentDetails;
