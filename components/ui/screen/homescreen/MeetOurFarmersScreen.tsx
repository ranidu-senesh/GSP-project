import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const farmers = [
  {
    id: 1,
    name: 'Green Valley Organic Farm',
    location: 'Kandy, Sri Lanka',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    certified: true,
    products: ['Vegetables', 'Fruits', 'Herbs'],
    description: 'A family-run organic farm in the hills of Kandy, supplying fresh produce to the island.'
  },
  {
    id: 2,
    name: 'Eco Harvest Farm',
    location: 'Nuwara Eliya, Sri Lanka',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    certified: true,
    products: ['Tea', 'Vegetables'],
    description: 'Specializing in premium Ceylon tea and organic vegetables, grown at high altitude.'
  },
  {
    id: 3,
    name: 'Pure Nature Organics',
    location: 'Galle, Sri Lanka',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    certified: true,
    products: ['Spices', 'Coconut Products'],
    description: 'Producers of organic spices and coconut products, supporting local communities in Galle.'
  },
  {
    id: 4,
    name: 'Sunrise Agro Farm',
    location: 'Kurunegala, Sri Lanka',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    certified: false,
    products: ['Rice', 'Pulses'],
    description: 'Known for sustainable rice and pulse cultivation using traditional methods.'
  },
  {
    id: 5,
    name: 'Hilltop Organic Estate',
    location: 'Badulla, Sri Lanka',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    certified: true,
    products: ['Tea', 'Herbs'],
    description: 'A scenic estate producing organic tea and medicinal herbs in the central hills.'
  },
  {
    id: 6,
    name: 'Coconut Grove Farms',
    location: 'Puttalam, Sri Lanka',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    certified: false,
    products: ['Coconut', 'King Coconut'],
    description: 'Supplying fresh coconuts and king coconuts to local and export markets.'
  },
  {
    id: 7,
    name: 'Spice Island Organics',
    location: 'Matale, Sri Lanka',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    certified: true,
    products: ['Spices', 'Pepper', 'Cardamom'],
    description: 'Matale’s finest organic spice producer, famous for pepper and cardamom.'
  },
  {
    id: 8,
    name: 'Tropical Fruits Farm',
    location: 'Anuradhapura, Sri Lanka',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    certified: false,
    products: ['Banana', 'Papaya', 'Mango'],
    description: 'A large fruit farm offering a variety of tropical fruits grown organically.'
  },
];

const MeetOurFarmersScreen = ({ navigation }: any) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<MaterialIcons key={`full-${i}`} name="star" size={16} color="#FFD700" />);
    }
    if (hasHalfStar) {
      stars.push(<MaterialIcons key="half" name="star-half" size={16} color="#FFD700" />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<MaterialIcons key={`empty-${i}`} name="star-outline" size={16} color="#FFD700" />);
    }
    return stars;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meet Our Farmers</Text>
      <Text style={styles.subtitle}>
        Discover the passionate Sri Lankan farmers who bring you fresh, organic produce.
      </Text>
      {farmers.map(farmer => (
        <View key={farmer.id} style={styles.card}>
          <Image source={{ uri: farmer.image }} style={styles.image} />
          <View style={styles.info}>
            <View style={styles.headerRow}>
              <Text style={styles.name}>{farmer.name}</Text>
              {farmer.certified && (
                <MaterialIcons name="verified" size={18} color="#2E7D32" style={{ marginLeft: 5 }} />
              )}
            </View>
            <Text style={styles.location}>{farmer.location}</Text>
            <View style={styles.ratingRow}>
              {renderStars(farmer.rating)}
              <Text style={styles.ratingText}>{farmer.rating.toFixed(1)}</Text>
            </View>
            <Text style={styles.products}>Products: {farmer.products.join(', ')}</Text>
            <Text style={styles.description}>{farmer.description}</Text>
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={20} color="#2E7D32" />
        <Text style={styles.backText}>Back to Home</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: '#555',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 18,
    flexDirection: 'row',
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    width: 110,
    height: 110,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  location: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 5,
  },
  products: {
    fontSize: 13,
    color: '#2E7D32',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#555',
    fontStyle: 'italic',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  backText: {
    color: '#2E7D32',
    marginLeft: 5,
    fontSize: 15,
    fontWeight: '500',
  },
});

export default MeetOurFarmersScreen;