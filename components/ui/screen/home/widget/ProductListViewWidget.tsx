import { COLORS } from '@/constants/colorpallets';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProductListViewWidget({ navigation, product }: any) {
    // Example fallback product if not passed as prop
    const fallbackProduct = {
        name: 'Yellow Mango (large)',
        price: 200,
        image: 'https://static.vecteezy.com/system/resources/previews/035/267/025/non_2x/ai-generated-slice-ripe-mango-with-drops-closeup-of-mango-fruit-free-photo.jpeg',
        description: 'Fresh, juicy, and sweet yellow mangoes from local farms.',
        rating: 4.5,
    };
    const p = product || fallbackProduct;

    // Render stars for rating
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <MaterialIcons
                    key={i}
                    name={i <= Math.floor(rating) ? 'star' : rating >= i - 0.5 ? 'star-half' : 'star-border'}
                    size={16}
                    color="#FFD700"
                />
            );
        }
        return stars;
    };

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetails', { product: p })}
            style={styles.container}
        >
            <TouchableOpacity style={styles.bookmark}>
                <Icon size={20} source={'heart-outline'} color={COLORS.light} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageView}>
                <Image source={{ uri: p.image }} style={styles.image} resizeMode={'contain'} />
            </TouchableOpacity>

            <View style={{ flex: 1, padding: 5 }}>
                <Text style={styles.txtproduct}>{p.name}</Text>
                <Text style={styles.description} numberOfLines={2}>{p.description}</Text>
                <View style={styles.ratingRow}>
                    {renderStars(p.rating)}
                    <Text style={styles.ratingText}>{p.rating.toFixed(1)}</Text>
                </View>
                <Text style={styles.price}>LKR {p.price}.00</Text>
                <Text style={styles.qty}>QTY</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 7,
        padding: 10,
        backgroundColor: COLORS.light,
        borderRadius: 5,
        flexDirection: "row",
    },
    bookmark: {
        width: 20,
        height: 20,
        backgroundColor: COLORS.Lgreen,
        borderRadius: 50,
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'center',
        right: 10,
        top: 10,
        zIndex: 1,
    },
    price: {
        color: COLORS.orange
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageView: {
        backgroundColor: COLORS.light,
        padding: 3,
        width: 150,
        height: 80,
    },
    txtproduct: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
    },
    description: {
        fontSize: 13,
        color: '#666',
        marginVertical: 2,
    },
    qty: {
        textAlign: 'right',
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
    },
    ratingText: {
        marginLeft: 4,
        color: '#888',
        fontSize: 14,
    },
});