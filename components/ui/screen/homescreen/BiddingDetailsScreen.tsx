import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const mockBids = [
  {
    id: 1,
    product: 'Organic Mangoes (50kg)',
    currentBid: 'Rs. 12,000',
    endTime: 'Ends in 2 days',
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Fresh, juicy, and sweet mangoes from Kandy. Ideal for juice bars, hotels, and bulk buyers.',
    farmer: 'Green Valley Organic Farm',
  },
  {
    id: 2,
    product: 'Organic Tea Leaves (100kg)',
    currentBid: 'Rs. 25,000',
    endTime: 'Ends in 5 days',
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Premium Ceylon tea leaves, handpicked from Nuwara Eliya. Perfect for export or local tea shops.',
    farmer: 'Eco Harvest Farm',
  },
  {
    id: 3,
    product: 'Organic Pineapples (200kg)',
    currentBid: 'Rs. 40,000',
    endTime: 'Ends in 1 day',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Sweet, ripe pineapples from Galle. Bulk lot for supermarkets and juice manufacturers.',
    farmer: 'Pure Nature Organics',
  },
];

const BiddingDetailsScreen = ({ route, navigation }: any) => {
  const { biddingId } = route.params;
  const bid = mockBids.find(b => b.id === biddingId);

  const [yourBid, setYourBid] = useState('');

  const handlePlaceBid = () => {
    if (!yourBid) {
      Alert.alert('Please enter your bid amount.');
      return;
    }
    Alert.alert('Bid Placed', `Your bid of Rs. ${yourBid} has been submitted!`);
    setYourBid('');
  };

  if (!bid) {
    return (
      <View style={styles.centered}>
        <Text>Opportunity not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: bid.image }} style={styles.image} />
      <Text style={styles.product}>{bid.product}</Text>
      <Text style={styles.farmer}>Farmer: {bid.farmer}</Text>
      <Text style={styles.description}>{bid.description}</Text>
      <Text style={styles.currentBid}>Current Bid: {bid.currentBid}</Text>
      <Text style={styles.endTime}>{bid.endTime}</Text>
      <View style={styles.inputRow}>
        <MaterialIcons name="attach-money" size={24} color="#2E7D32" />
        <TextInput
          style={styles.input}
          placeholder="Enter your bid (Rs.)"
          keyboardType="numeric"
          value={yourBid}
          onChangeText={setYourBid}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePlaceBid}>
        <Text style={styles.buttonText}>Submit Bid</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={20} color="#2E7D32" />
        <Text style={styles.backText}>Back to Bulk Buying</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
    alignItems: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 150,
    borderRadius: 12,
    marginBottom: 20,
  },
  product: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
    textAlign: 'center',
  },
  farmer: {
    fontSize: 15,
    color: '#2E7D32',
    fontWeight: '600',
    marginBottom: 3,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  currentBid: {
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  endTime: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 44,
    fontSize: 16,
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#2E7D32',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  backText: {
    color: '#2E7D32',
    marginLeft: 5,
    fontSize: 15,
    fontWeight: '500',
  },
});

export default BiddingDetailsScreen;