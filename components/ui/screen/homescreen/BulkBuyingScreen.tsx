import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const bulkOpportunities = [
  {
    id: 1,
    product: 'Organic Mangoes (50kg)',
    currentBid: 'Rs. 12,000',
    endTime: 'Ends in 2 days',
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    product: 'Organic Tea Leaves (100kg)',
    currentBid: 'Rs. 25,000',
    endTime: 'Ends in 5 days',
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    product: 'Organic Pineapples (200kg)',
    currentBid: 'Rs. 40,000',
    endTime: 'Ends in 1 day',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
];

const BulkBuyingScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bulk Buying Opportunities</Text>
      <Text style={styles.subtitle}>
        Bid on large lots of fresh, organic produce directly from Sri Lankan farmers.
      </Text>
      <View style={styles.biddingContainer}>
        {bulkOpportunities.map(opportunity => (
          <TouchableOpacity
            key={opportunity.id}
            style={styles.biddingCard}
            onPress={() => navigation.navigate('BiddingDetails', { biddingId: opportunity.id })}
          >
            <Image source={{ uri: opportunity.image }} style={styles.biddingImage} />
            <View style={styles.biddingInfo}>
              <Text style={styles.biddingProduct}>{opportunity.product}</Text>
              <Text style={styles.biddingCurrent}>Current Bid: {opportunity.currentBid}</Text>
              <Text style={styles.biddingTime}>{opportunity.endTime}</Text>
              <TouchableOpacity
  style={styles.biddingButton}
  onPress={() => navigation.navigate('BiddingDetails', { biddingId: opportunity.id })}
>
  <Text style={styles.biddingButtonText}>Place Bid</Text>
</TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.infoBox}>
        <MaterialIcons name="info" size={24} color="#2E7D32" />
        <Text style={styles.infoText}>
          Bulk buying helps you save more and supports local organic farmers!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginLeft: 15,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: '#555',
    marginLeft: 15,
    marginBottom: 15,
    marginRight: 15,
  },
  biddingContainer: {
    paddingHorizontal: 15,
  },
  biddingCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2,
    flexDirection: 'row',
  },
  biddingImage: {
    width: 100,
    height: 120,
  },
  biddingInfo: {
    flex: 1,
    padding: 12,
  },
  biddingProduct: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  biddingCurrent: {
    fontSize: 14,
    color: '#2E7D32',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  biddingTime: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  biddingButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
    width: 120,
  },
  biddingButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    margin: 15,
    padding: 15,
    borderRadius: 8,
  },
  infoText: {
    marginLeft: 10,
    color: '#2E7D32',
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default BulkBuyingScreen;