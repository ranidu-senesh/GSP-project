import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'react-native-paper';
import { COLORS } from '@/constants/colorpallets';
import ReviewWidget from './home/widget/ReviewWidget';

export default function ProductDetailsScreen({ navigation, route }: any) {
  // Example product data (replace with real data or get from route.params)
  const product = {
    id: 999,
    name: 'Organic Rainbow Bell Peppers',
    price: 600,
    description:
      'Sweet, crunchy, and packed with vitamins, these bell peppers are grown without synthetic pesticides or GMOs. Perfect for salads, stir-fries, or fresh snacking!',
    images: [
      { uri: 'https://d-art.ppstatic.pl/kadry/k/r/1/66/bc/633d4602e18e8_o_large.jpg' },
      { uri: 'https://th.bing.com/th/id/R.326dfff69b2ff9dab04d91401d649478?rik=ne%2bRsUx9QqWCcA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-dD6X5Wp9-n4%2fVcxo9jIfOHI%2fAAAAAAAAANI%2fc2iFC9yKkdU%2fs1600%2fpeperone_2.jpg&ehk=Xj4BC51Y1cJ1syf9%2fOTYNGV6cGKLaUe%2b1iBxzTQ0xLI%3d&risl=&pid=ImgRaw&r=0' },
      { uri: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https:%2F%2Fblog.kakaocdn.net%2Fdn%2FtsREB%2FbtsEYQcvJmh%2FNqDt0oYzZPqmbdqCD5L9o1%2Fimg.png' },
    ],
  };

  const [primaryImage, setPrimaryImage] = useState(product.images[0].uri);

  // Add to Cart handler
  const handleAddToCart = () => {
    navigation.navigate('HomeCartScreen', { addedProduct: { ...product, image: primaryImage, quantity: 1 } });
    Alert.alert('Added to Cart', 'This product has been added to your cart.');
  };

  // Buy Now handler
  const handleBuyNow = () => {
    navigation.navigate('CheckoutScreen', {
      selectedItems: [{ ...product, image: primaryImage, quantity: 1 }],
      total: product.price,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Product Images */}
        <View style={styles.top}>
          <View style={styles.imagebg}>
            <Image source={{ uri: primaryImage }} style={styles.image} resizeMode={'contain'} />
          </View>
          <View style={styles.productImageList}>
            {product.images.map((item, index) => (
              <TouchableOpacity
                onPress={() => setPrimaryImage(item.uri)}
                key={index}
                style={{ width: 80, height: 60, borderWidth: 1, borderRadius: 5, marginHorizontal: 4 }}
              >
                <Image source={{ uri: item.uri }} style={styles.displayimage} resizeMode={'contain'} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Product Details */}
        <View style={styles.details}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 5 }}>
            🌿 {product.name}
          </Text>
          <Text style={{ marginTop: 10 }}>Description: {product.description}</Text>
          <Text style={{ color: COLORS.orange, fontWeight: 'bold', fontSize: 15, marginTop: 10 }}>
            LKR. {product.price.toFixed(2)}
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            style={{ ...styles.btn, backgroundColor: COLORS.orange, marginRight: 5 }}
            onPress={handleAddToCart}
          >
            <Icon size={20} source={'cart'} color={COLORS.black} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.btn, backgroundColor: COLORS.green }}
            onPress={handleBuyNow}
          >
            <Text style={{ color: COLORS.light }}>Buy Now</Text>
          </TouchableOpacity>
        </View>

        {/* Reviews Tab */}
        <View style={styles.tab}>
          <TouchableOpacity style={{ width: 100 }}>
            <Text style={{ marginTop: 20 }}>Reviews</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.review}>
          <ReviewWidget />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.light,
  },
  review: {
    marginTop: 10,
  },
  tab: {
    width: '100%',
    marginTop: 10,
  },
  details: {},
  btn: {
    width: 120,
    height: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayimage: {
    width: '100%',
    height: '100%',
  },
  image: {
    height: 200,
  },
  imagebg: {
    backgroundColor: COLORS.darkGray,
  },
  productImageList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderBottomWidth: 1,
    marginTop: 10,
    height: 80,
  },
  top: {
    width: '100%',
  },
});