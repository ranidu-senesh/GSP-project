
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking, Dimensions } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }: any) => {
  // Featured organic farmers
  const featuredFarmers = [
    {
      id: 1,
      name: 'Green Valley Organic Farm',
      location: 'Kandy, Sri Lanka',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      certified: true,
      products: ['Vegetables', 'Fruits', 'Herbs']
    },
    {
      id: 2,
      name: 'Eco Harvest Farm',
      location: 'Nuwara Eliya, Sri Lanka',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      certified: true,
      products: ['Tea', 'Vegetables']
    },
    {
      id: 3,
      name: 'Pure Nature Organics',
      location: 'Galle, Sri Lanka',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      certified: true,
      products: ['Spices', 'Coconut Products']
    },
  ];

  // Organic product categories
  const categories = [
    { id: 1, name: 'Fresh Vegetables', icon: 'leaf', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'Organic Fruits', icon: 'apple', image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Farm Dairy', icon: 'cup', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Sri Lankan Tea', icon: 'coffee', image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 5, name: 'Organic Spices', icon: 'spoon', image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  ];

  // Featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'Organic King Coconut',
      price: 'Rs. 350',
      farmer: 'Green Valley Farm',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1601493715053-4fe5ff5d8073?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      certified: true,
      deliveryTime: 'Same day delivery'
    },
    {
      id: 2,
      name: 'Organic Pineapple',
      price: 'Rs. 550',
      farmer: 'Eco Harvest Farm',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      certified: true,
      deliveryTime: 'Next day delivery'
    },
    {
      id: 3,
      name: 'Organic Avocados',
      price: 'Rs. 1,800',
      farmer: 'Pure Nature Organics',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      certified: true,
      deliveryTime: 'Same day delivery'
    },
  ];

  // Bidding opportunities
  const biddingOpportunities = [
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
  ];

  // Render star ratings
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

  // Navigation handlers
  const navigateToFarmerProfile = (farmerId: number) => {
    navigation.navigate('FarmerProfile', { farmerId });
  };

  const navigateToProductDetails = (productId: number) => {
    navigation.navigate('ProductDetails', { productId });
  };

  const navigateToBiddingDetails = (biddingId: number) => {
    navigation.navigate('BiddingDetails', { biddingId });
  };

  const navigateToContactUs = () => {
    navigation.navigate('ContactUs');
  };

  const navigateToAboutUs = () => {
    navigation.navigate('AboutUs');
  };

  const navigateToPaymentDetails = () => {
    navigation.navigate('PaymentDetails');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Banner */}
      <View style={styles.heroBanner}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Farm Fresh Organic Produce</Text>
          <Text style={styles.heroSubtitle}>Direct from Sri Lankan farmers to your table</Text>
          <TouchableOpacity style={styles.heroButton} onPress={() => navigation.navigate('Products')}>
            <Text style={styles.heroButtonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Certification Badge */}
      <TouchableOpacity style={styles.certificationBanner} onPress={() => navigation.navigate('VerificationInfo')}>
        <MaterialIcons name="verified-user" size={24} color="#2E7D32" />
        <Text style={styles.certificationText}>All products are blockchain-verified organic</Text>
        <MaterialIcons name="chevron-right" size={24} color="#2E7D32" />
      </TouchableOpacity>

      {/* Categories Section */}
      <Text style={styles.sectionTitle}>Shop by Category</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
        {categories.map(category => (
          <TouchableOpacity 
            key={category.id} 
            style={styles.categoryCard}
            onPress={() => navigation.navigate('Category', { categoryId: category.id })}
          >
            <Image source={{ uri: category.image }} style={styles.categoryImage} />
            <View style={styles.categoryOverlay}>

              {/* <MaterialIcons name={category.icon} size={24} color="#fff" /> */}

              <Text style={styles.categoryText}>{category.name}</Text>
            </View>

          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Featured Farmers */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Meet Our Farmers</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Farmers')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
        {featuredFarmers.map(farmer => (
          <TouchableOpacity 
            key={farmer.id} 
            style={styles.farmerCard}
            onPress={() => navigateToFarmerProfile(farmer.id)}
          >
            <Image source={{ uri: farmer.image }} style={styles.farmerImage} />
            <View style={styles.farmerInfo}>
              <View style={styles.farmerHeader}>
                <Text style={styles.farmerName}>{farmer.name}</Text>
                {farmer.certified && <MaterialIcons name="verified" size={16} color="#2E7D32" />}
              </View>
              <Text style={styles.farmerLocation}>{farmer.location}</Text>
              <View style={styles.ratingContainer}>
                {renderStars(farmer.rating)}
                <Text style={styles.ratingText}>{farmer.rating.toFixed(1)}</Text>
              </View>
              <Text style={styles.farmerProducts}>{farmer.products.join(' • ')}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Featured Products */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Fresh From the Farm</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
        {featuredProducts.map(product => (
          <TouchableOpacity 
            key={product.id} 
            style={styles.productCard}
            onPress={() => navigateToProductDetails(product.id)}
          >
            <Image source={{ uri: product.image }} style={styles.productImage} />
            {product.certified && (
              <View style={styles.certifiedBadge}>
                <MaterialIcons name="verified" size={14} color="#fff" />
                <Text style={styles.certifiedText}>Certified</Text>
              </View>
            )}
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productFarmer}>By {product.farmer}</Text>
              <View style={styles.ratingContainer}>
                {renderStars(product.rating)}
                <Text style={styles.ratingText}>({product.rating.toFixed(1)})</Text>
              </View>
              <Text style={styles.deliveryTime}>
                <MaterialIcons name="delivery-dining" size={14} color="#666" />
                {' '}{product.deliveryTime}
              </Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bidding Opportunities */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Bulk Buying Opportunities</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Bidding')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.biddingContainer}>
        {biddingOpportunities.map(opportunity => (
          <TouchableOpacity 
            key={opportunity.id} 
            style={styles.biddingCard}
            onPress={() => navigateToBiddingDetails(opportunity.id)}
          >
            <Image source={{ uri: opportunity.image }} style={styles.biddingImage} />
            <View style={styles.biddingInfo}>
              <Text style={styles.biddingProduct}>{opportunity.product}</Text>
              <Text style={styles.biddingCurrent}>Current Bid: {opportunity.currentBid}</Text>
              <Text style={styles.biddingTime}>{opportunity.endTime}</Text>
              <TouchableOpacity style={styles.biddingButton}>
                <Text style={styles.biddingButtonText}>Place Bid</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Value Proposition */}
      <View style={styles.valuePropContainer}>
        <Text style={styles.valuePropTitle}>Why Choose OrganicConnect?</Text>
        
        <View style={styles.valuePropItem}>
          <MaterialIcons name="verified-user" size={28} color="#2E7D32" />
          <View style={styles.valuePropText}>
            <Text style={styles.valuePropHeading}>Blockchain-Verified Organic</Text>
            <Text style={styles.valuePropDescription}>Every product is certified authentic with our transparent blockchain system</Text>
          </View>
        </View>
        
        <View style={styles.valuePropItem}>
          <MaterialIcons name="savings" size={28} color="#2E7D32" />
          <View style={styles.valuePropText}>
            <Text style={styles.valuePropHeading}>Fair Prices</Text>
            <Text style={styles.valuePropDescription}>Farmers earn 30-50% more while you save 40% by cutting middlemen</Text>
          </View>
        </View>
        
        <View style={styles.valuePropItem}>
          <MaterialIcons name="delivery-dining" size={28} color="#2E7D32" />
          <View style={styles.valuePropText}>
            <Text style={styles.valuePropHeading}>Fast Delivery</Text>
            <Text style={styles.valuePropDescription}>Fresh from farm to your door in ≤24 hours with our optimized logistics</Text>
          </View>
        </View>
      </View>

      {/* Footer Links */}
      <View style={styles.footerLinksContainer}>
        <TouchableOpacity onPress={navigateToAboutUs} style={styles.footerLink}>
          <Text style={styles.footerLinkText}>About Us</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={navigateToContactUs} style={styles.footerLink}>
          <Text style={styles.footerLinkText}>Contact Us</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={navigateToPaymentDetails} style={styles.footerLink}>
          <Text style={styles.footerLinkText}>Payment Details</Text>
        </TouchableOpacity>
      </View>

      {/* Call to Action */}
      <TouchableOpacity 
        style={styles.ctaButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.ctaText}>Join OrganicConnect Today</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  heroBanner: {
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
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  heroButton: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  heroButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  certificationBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 8,
  },
  certificationText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#2E7D32',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 15,
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 15,
  },
  seeAll: {
    color: '#2E7D32',
    fontSize: 14,
    fontWeight: '500',
  },
  horizontalScroll: {
    paddingLeft: 15,
    paddingBottom: 15,
  },
  categoryCard: {
    width: 120,
    height: 150,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(46, 125, 50, 0.8)',
    padding: 10,
    alignItems: 'center',
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
    textAlign: 'center',
  },
  farmerCard: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 15,
    overflow: 'hidden',
    elevation: 2,
  },
  farmerImage: {
    width: '100%',
    height: 120,
  },
  farmerInfo: {
    padding: 12,
  },
  farmerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  farmerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 5,
  },
  farmerLocation: {
    fontSize: 12,
    color: '#666',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  farmerProducts: {
    fontSize: 12,
    color: '#2E7D32',
    fontStyle: 'italic',
  },
  productCard: {
    width: 180,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 15,
    overflow: 'hidden',
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 140,
  },
  certifiedBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#2E7D32',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  certifiedText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 3,
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  productFarmer: {
    fontSize: 12,
    color: '#666',
    marginVertical: 3,
  },
  deliveryTime: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
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
  },
  biddingButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  valuePropContainer: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  valuePropTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 20,
    textAlign: 'center',
  },
  valuePropItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  valuePropText: {
    flex: 1,
    marginLeft: 15,
  },
  valuePropHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  valuePropDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footerLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  footerLink: {
    padding: 10,
  },
  footerLinkText: {
    color: '#2E7D32',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  ctaButton: {
    backgroundColor: '#2E7D32',
    marginHorizontal: 15,
    marginBottom: 30,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  ctaText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;