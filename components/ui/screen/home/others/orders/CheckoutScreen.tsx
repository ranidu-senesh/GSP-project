import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const paymentMethods = [
  { id: 'cod', name: 'Cash on Delivery', icon: 'local-atm' },
  { id: 'card', name: 'Credit/Debit Card', icon: 'credit-card' },
  { id: 'bank', name: 'Bank Transfer', icon: 'account-balance' },
];

const CheckoutScreen = ({ navigation, route }: any) => {
  // Get selected items and total from route params
  const { selectedItems = [], total = 0 } = route.params || {};

  // Example delivery address (replace with user data)
  const deliveryAddress = {
    name: 'Kasun Perera',
    street: '123 Galle Road',
    city: 'Colombo 03',
    zip: '00300',
    phone: '077-1234567',
  };

  const [selectedPayment, setSelectedPayment] = useState('cod');

  const formatLKR = (amount: number) =>
    new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 2,
    }).format(amount);

  const handlePlaceOrder = () => {
    Alert.alert(
      'Order Placed!',
      `Thank you for your order.\nPayment Method: ${
        paymentMethods.find((m) => m.id === selectedPayment)?.name
      }`,
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('OrderConfirmation'),
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#2E7D32" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      {/* Delivery Address */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <View style={styles.addressCard}>
          <MaterialIcons name="location-on" size={20} color="#2E7D32" />
          <View style={styles.addressText}>
            <Text style={styles.addressName}>{deliveryAddress.name}</Text>
            <Text>{deliveryAddress.street}</Text>
            <Text>
              {deliveryAddress.city}, {deliveryAddress.zip}
            </Text>
            <Text>Phone: {deliveryAddress.phone}</Text>
          </View>
        </View>
      </View>

      {/* Order Items */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Items</Text>
        {selectedItems.length === 0 ? (
          <Text style={{ color: '#888' }}>No items selected.</Text>
        ) : (
          selectedItems.map((item: any, idx: number) => (
            <View key={idx} style={styles.itemRow}>
              <Text style={styles.itemName}>
                {item.name} × {item.quantity}
              </Text>
              <Text style={styles.itemPrice}>{formatLKR(item.price * item.quantity)}</Text>
            </View>
          ))
        )}
        <View style={styles.divider} />
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>{formatLKR(total)}</Text>
        </View>
      </View>

      {/* Payment Methods */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.paymentMethod,
              selectedPayment === method.id && styles.selectedPayment,
            ]}
            onPress={() => setSelectedPayment(method.id)}
          >
            <MaterialIcons
              name={method.icon as any}
              size={24}
              color={selectedPayment === method.id ? '#2E7D32' : '#888'}
            />
            <Text
              style={[
                styles.paymentText,
                selectedPayment === method.id && { color: '#2E7D32', fontWeight: 'bold' },
              ]}
            >
              {method.name}
            </Text>
            {selectedPayment === method.id && (
              <MaterialIcons name="check-circle" size={20} color="#2E7D32" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Place Order Button */}
      <TouchableOpacity
        style={[
          styles.placeOrderButton,
          selectedItems.length === 0 && styles.disabledButton,
        ]}
        disabled={selectedItems.length === 0}
        onPress={handlePlaceOrder}
      >
        <Text style={styles.placeOrderButtonText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginLeft: 15,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 15,
  },
  addressCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    marginLeft: 10,
  },
  addressName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    color: '#555',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  totalLabel: {
    fontSize: 16,
    color: '#666',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedPayment: {
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
  },
  paymentText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  placeOrderButton: {
    backgroundColor: '#2E7D32',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: '#BDBDBD',
  },
  placeOrderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;