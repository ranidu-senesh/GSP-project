import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  Animated,
  Easing,
  Dimensions
} from 'react-native';
import { Searchbar, Button, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DisplayTypeWidget from '../share/DisplayTypeWidget';

const { width } = Dimensions.get('window');

const OrganicCartScreen = () => {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [isGridEnabled, setIsGridEnabled] = useState(true);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Organic King Coconut',
      price: 150,
      quantity: 2,
      image: 'https://cdn.pixabay.com/photo/2017/01/11/11/33/coconut-1973587_1280.jpg',
      category: 'Fruits',
      selected: true
    },
    {
      id: 2,
      name: 'Red Rice (1kg)',
      price: 320,
      quantity: 1,
      image: 'https://cdn.pixabay.com/photo/2018/05/21/10/45/rice-3418861_1280.jpg',
      category: 'Grains',
      selected: true
    },
    {
      id: 3,
      name: 'Gotukola (100g)',
      price: 80,
      quantity: 3,
      image: 'https://cdn.pixabay.com/photo/2017/10/14/09/44/leaf-2850091_1280.jpg',
      category: 'Leafy Greens',
      selected: true
    },
    {
      id: 4,
      name: 'Organic Pineapple',
      price: 220,
      quantity: 1,
      image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/pineapple-1238248_1280.jpg',
      category: 'Fruits',
      selected: true
    },
    {
      id: 5,
      name: 'Kithul Jaggery (250g)',
      price: 450,
      quantity: 2,
      image: 'https://cdn.pixabay.com/photo/2016/11/29/08/31/jaggery-1868579_1280.jpg',
      category: 'Sweeteners',
      selected: true
    },
    {
      id: 6,
      name: 'Moringa Powder (100g)',
      price: 380,
      quantity: 1,
      image: 'https://cdn.pixabay.com/photo/2018/04/10/22/18/moringa-3309419_1280.jpg',
      category: 'Superfoods',
      selected: true
    }
  ]);

  // Animations
  const spinValue = new Animated.Value(0);
  
  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  };

  const spinAnim = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  // Cart Functions
  const updateQuantity = (id: number, change: number) => {
    spin();
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return {
          ...item,
          quantity: newQuantity > 0 ? newQuantity : 1
        };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    Animated.spring(spinValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true
    }).start(() => {
      setCartItems(cartItems.filter(item => item.id !== id));
      spinValue.setValue(0);
    });
  };

  const toggleItemSelection = (id: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const toggleSelectAll = () => {
    const allSelected = cartItems.every(item => item.selected);
    setCartItems(cartItems.map(item => ({
      ...item,
      selected: !allSelected
    })));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateSelectedTotal = () => {
    return cartItems
      .filter(item => item.selected)
      .reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const selectedItemsCount = cartItems.filter(item => item.selected).length;

  // Format currency for Sri Lanka
  const formatLKR = (amount: number) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  // Render Items
  const renderGridItem = (item: any) => (
    <Animated.View 
      style={[
        styles.gridItem, 
        { 
          transform: [{ rotate: spinAnim }],
          opacity: item.selected ? 1 : 0.6
        }
      ]}
    >
        <View style={styles.checkbox}>
      <Checkbox
        status={item.selected ? 'checked' : 'unchecked'}
        onPress={() => toggleItemSelection(item.id)}
        color="#4CAF50"
        
      />
      </View>
      <Image source={{ uri: item.image }} style={styles.gridImage} />
      <View style={styles.gridDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCategory}>{item.category}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
            <Icon name="minus-circle" size={24} color="#4CAF50" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
            <Icon name="plus-circle" size={24} color="#4CAF50" />
          </TouchableOpacity>
        </View>
        <Text style={styles.itemPrice}>{formatLKR(item.price * item.quantity)}</Text>
      </View>
      <TouchableOpacity 
        style={styles.removeButton} 
        onPress={() => removeItem(item.id)}
      >
        <Icon name="trash-can" size={20} color="#F44336" />
      </TouchableOpacity>
    </Animated.View>
  );

  const renderListItem = (item: any) => (
    <View style={[styles.listItem, { opacity: item.selected ? 1 : 0.6 }]}>
        <View style={styles.listCheckbox}>
      <Checkbox
        status={item.selected ? 'checked' : 'unchecked'}
        onPress={() => toggleItemSelection(item.id)}
        color="#4CAF50"
       
      />
      </View>
      <Image source={{ uri: item.image }} style={styles.listImage} />
      <View style={styles.listDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCategory}>{item.category}</Text>
        <Text style={styles.itemPrice}>{formatLKR(item.price)} each</Text>
      </View>
      <View style={styles.listActions}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
            <Icon name="minus" size={20} color="#4CAF50" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
            <Icon name="plus" size={20} color="#4CAF50" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => removeItem(item.id)}>
          <Icon name="delete" size={24} color="#F44336" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with Sri Lankan theme */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Your Organic Basket</Text>
          <Text style={styles.headerSubtitle}>Fresh from Sri Lankan farms</Text>
        </View>
        <Icon name="basket" size={28} color="#4CAF50" />
      </View>

      {/* Search */}
      <Searchbar
        placeholder="Search in your cart..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
        iconColor="#4CAF50"
      />

      {/* View Toggle */}
      <DisplayTypeWidget 
        callback={setIsGridEnabled} 
        gridColor="#4CAF50"
        listColor="#4CAF50"
      />

      {/* Selection Info */}
      <View style={styles.selectionInfo}>
        <Text style={styles.selectionText}>
          {selectedItemsCount} of {cartItems.length} items selected
        </Text>
        <TouchableOpacity onPress={toggleSelectAll}>
          <Text style={styles.selectAllText}>
            {selectedItemsCount === cartItems.length ? 'Deselect all' : 'Select all'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Cart Items */}
      <ScrollView style={styles.itemsContainer}>
        {isGridEnabled ? (
          <View style={styles.gridContainer}>
            {cartItems.map(item => renderGridItem(item))}
          </View>
        ) : (
          <View style={styles.listContainer}>
            {cartItems.map(item => renderListItem(item))}
          </View>
        )}
      </ScrollView>

      {/* Checkout Panel */}
      <View style={styles.checkoutPanel}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Selected Total:</Text>
          <Text style={styles.totalAmount}>{formatLKR(calculateSelectedTotal())}</Text>
        </View>
        <Text style={styles.deliveryText}>Free delivery in Colombo on orders over Rs. 2000</Text>
        <Button 
          mode="contained" 
          style={[
            styles.checkoutButton,
            selectedItemsCount === 0 && styles.disabledButton
          ]}
          labelStyle={styles.checkoutButtonText}
          disabled={selectedItemsCount === 0}
          onPress={() => console.log('Proceeding with selected items')}
        >
          Checkout ({selectedItemsCount})
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2E7D32',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#757575',
    marginTop: 4,
  },
  searchBar: {
    margin: 16,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 2,
  },
  selectionInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  selectionText: {
    fontSize: 14,
    color: '#616161',
  },
  selectAllText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  itemsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: width * 0.45,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
  },
  checkbox: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 1,
  },
  listCheckbox: {
    marginRight: 8,
  },
  gridImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  listContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  listItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    alignItems: 'center',
  },
  listImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  listDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  listActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemCategory: {
    fontSize: 12,
    color: '#757575',
    marginTop: 2,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E7D32',
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  quantityText: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: '500',
  },
  removeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  checkoutPanel: {
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 16,
    color: '#616161',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E7D32',
  },
  deliveryText: {
    fontSize: 12,
    color: '#9E9E9E',
    textAlign: 'center',
    marginBottom: 16,
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 6,
    elevation: 2,
  },
  disabledButton: {
    backgroundColor: '#BDBDBD',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  gridDetails: {
    marginTop: 8,
    flex: 1,
    justifyContent: 'center',
  }
});

export default OrganicCartScreen;