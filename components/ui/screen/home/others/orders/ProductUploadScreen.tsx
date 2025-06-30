import getBaseUrl from '@/constants/baseURL';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { pickAndUploadImages } from './Upload';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, TextInput } from 'react-native-paper'; 

interface Product {
    name: string;
    description: string;
    displayPrice: string;
    actualPrice: string;
    qty: string;
    brand: string;
    images: string[];
}

export default function ProductUploadScreen() {
    const [product, setProduct] = useState<Product>({
        name: '',
        description: '',
        displayPrice: '',
        actualPrice: '',
        qty: '',
        brand: '',
        images: [],
    });

    const handleInputChange = (name: keyof Product, value: string) => {
        setProduct(prev => ({...prev, [name]: value}));
    };

    const handleImageUpload = async () => {
        const imageUrls = await pickAndUploadImages();
        setProduct(prev => ({...prev, images: [...prev.images, ...imageUrls]}));
    };

    const removeImage = (index: number) => {
        setProduct(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.post(
                `${getBaseUrl()}product/upload`,
                {...product},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );

            if (response.data.success) {
                alert('Product added successfully');
                setProduct({
                    name: '',
                    description: '',
                    displayPrice: '',
                    actualPrice: '',
                    qty: '',
                    brand: '',
                    images: [],
                });
            } else {
                alert('Product failed to upload');
            }
        } catch (error) {
            console.log(error);
            alert('Error uploading product');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TextInput
                label="Product Name"
                mode="outlined"
                value={product.name}
                onChangeText={text => handleInputChange('name', text)}
                style={styles.input}
            />

            <TextInput
                label="Description"
                mode="outlined"
                value={product.description}
                onChangeText={text => handleInputChange('description', text)}
                multiline
                numberOfLines={4}
                style={styles.input}
            />

            <View style={styles.row}>
                <TextInput
                    label="Display Price"
                    mode="outlined"
                    value={product.displayPrice}
                    onChangeText={text => handleInputChange('displayPrice', text)}
                    style={[styles.input, styles.halfInput]}
                    keyboardType="numeric"
                />
                <TextInput
                    label="Actual Price"
                    mode="outlined"
                    value={product.actualPrice}
                    onChangeText={text => handleInputChange('actualPrice', text)}
                    style={[styles.input, styles.halfInput]}
                    keyboardType="numeric"
                />
            </View>

            <TextInput
                label="Quantity"
                mode="outlined"
                value={product.qty}
                onChangeText={text => handleInputChange('qty', text)}
                style={styles.input}
                keyboardType="numeric"
            />

            <TextInput
                label="Brand"
                mode="outlined"
                value={product.brand}
                onChangeText={text => handleInputChange('brand', text)}
                style={styles.input}
            />

            <View style={styles.imagesContainer}>
                {product.images.map((image, index) => (
                    <View key={index} style={styles.imageContainer}>
                        <Image 
                            source={{ uri: image }} 
                            style={styles.imagePreview} 
                        />
                        <Button 
                            mode="outlined"
                            onPress={() => removeImage(index)}
                            style={styles.removeButton}
                        >
                            Remove
                        </Button>
                    </View>
                ))}
                
                <Button 
                    mode="contained"
                    onPress={handleImageUpload}
                    style={styles.addButton}
                >
                    Upload Images
                </Button>
            </View>

            <Button 
                mode="contained"
                onPress={handleSubmit}
                style={styles.submitButton}
            >
                Submit Product
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    input: {
        marginBottom: 16,
    },
    halfInput: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
    },
    imagesContainer: {
        marginBottom: 16,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        gap: 8,
    },
    imagePreview: {
        width: 100,
        height: 100,
        borderRadius: 4,
    },
    removeButton: {
        height: 40,
        justifyContent: 'center',
    },
    addButton: {
        marginTop: 8,
    },
    submitButton: {
        marginTop: 24,
    },
});