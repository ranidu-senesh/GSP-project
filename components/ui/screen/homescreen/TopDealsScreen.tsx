import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const topDeals = [
  {
    id: 1,
    name: 'Organic King Coconut (Pack of 3)',
    price: 'Rs. 900',
    originalPrice: 'Rs. 1,200',
    discount: '25% OFF',
    image: 'https://images.unsplash.com/photo-1601493715053-4fe5ff5d8073?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    farmer: 'Green Valley Farm',
    rating: 4.7,
    deliveryTime: 'Same day delivery'
  },
  {
    id: 2,
    name: 'Premium Ceylon Cinnamon (100g)',
    price: 'Rs. 1,100',
    originalPrice: 'Rs. 1,500',
    discount: '27% OFF',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    farmer: 'Matara Spice Garden',
    rating: 4.8,
    deliveryTime: 'Next day delivery'
  },
  {
    id: 3,
    name: 'Organic Red Rice (5kg)',
    price: 'Rs. 2,200',
    originalPrice: 'Rs. 2,800',
    discount: '21% OFF',
    image: 'https://www.srilankabusiness.com/blog/wp-content/uploads/2020/07/red-rice.jpg',
    farmer: 'Kandy Organic Farms',
    rating: 4.6,
    deliveryTime: 'Same day delivery'
  },
];

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

const TopDealsScreen = ({ navigation }: any) => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Top Deals</Text>
    {topDeals.map(deal => (
      <View key={deal.id} style={styles.card}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate('ProductDetails', { productId: deal.id })}
        >
          <Image source={{ uri: deal.image }} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.info}>
          <Text style={styles.name}>{deal.name}</Text>
          <Text style={styles.farmer}>By {deal.farmer}</Text>
          <View style={styles.ratingRow}>
            {renderStars(deal.rating)}
            <Text style={styles.ratingText}>{deal.rating.toFixed(1)}</Text>
          </View>
          <Text style={styles.deliveryTime}>
            <MaterialIcons name="delivery-dining" size={14} color="#666" /> {deal.deliveryTime}
          </Text>
          <Text style={styles.price}>
            {deal.price}{' '}
            <Text style={styles.originalPrice}>{deal.originalPrice}</Text>{' '}
            <Text style={styles.discount}>{deal.discount}</Text>
          </Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.cartBtn}
              onPress={() => {/* Add to cart logic here */}}
            >
              <MaterialIcons name="add-shopping-cart" size={18} color="#fff" />
              <Text style={styles.btnText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buyBtn}
              onPress={() => {/* Buy now logic here */}}
            >
              <MaterialIcons name="shopping-bag" size={18} color="#fff" />
              <Text style={styles.btnText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ))}
    <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
      <MaterialIcons name="arrow-back" size={20} color="#2E7D32" />
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', padding: 15 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2E7D32', marginBottom: 15 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 18,
    elevation: 2,
    overflow: 'hidden',
  },
  image: { width: 110, height: 110, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 },
  info: { flex: 1, padding: 12, justifyContent: 'center' },
  name: { fontSize: 17, fontWeight: 'bold', color: '#333' },
  farmer: { fontSize: 13, color: '#666', marginBottom: 4 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  ratingText: { fontSize: 13, color: '#666', marginLeft: 5 },
  deliveryTime: { fontSize: 13, color: '#2E7D32', marginBottom: 4 },
  price: { fontSize: 16, fontWeight: 'bold', color: '#2E7D32' },
  originalPrice: { color: '#888', textDecorationLine: 'line-through', fontSize: 12 },
  discount: { color: '#E53935', fontWeight: 'bold', fontSize: 12 },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  cartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#388e3c',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  buyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e53935',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 14,
  },
  backBtn: { flexDirection: 'row', alignItems: 'center', marginTop: 10, alignSelf: 'flex-start' },
  backText: { color: '#2E7D32', marginLeft: 5, fontSize: 15, fontWeight: '500' },
});

export default TopDealsScreen;