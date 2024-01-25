import axios from 'axios';
import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
const { width } = Dimensions.get('window');

export default function Food({ id, name, price, image }) {
    return (
        <View
            style={styles.container}
            onPress={() => {
                getFoodDetails(id);
            }}
        >
            <Image
                style={styles.image}
                source={{ uri: image }}
            />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.money}>R$ {price}</Text>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'pink',
        width: width * 0.5 - 15,
        height: width * 0.5 - 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'rgb(150, 150, 150)'
    },
    image: {
        width: '60%',
        height: '60%',
        resizeMode: 'cover',
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        textTransform: 'capitalize',
        fontWeight: 'bold',
    },
    money: {
        fontSize: 16,
    },
});