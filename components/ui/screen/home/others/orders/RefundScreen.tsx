import { View, Text, StyleSheet } from 'react-native';

export default function RefundScreen() {
    return (
        <View style={styles.container}>
            <Text>Refund screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});