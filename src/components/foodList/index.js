import React from 'react';
import {
    FlatList,
    StyleSheet,
    View,
} from 'react-native';
import { useFoodData } from '../../hooks/useFoodData';
import Food from '../food';

export default function FoodList() {

    const { data } = useFoodData();

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={{
                   rowGap: 10,
                   paddingLeft: 10,
                   padding: 10,
                   paddingTop: 20,
                }}
                columnWrapperStyle={{
                    columnGap: 10,
                }}
                numColumns={2}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return <Food {...item} />
                }}
            />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 0.84,
        //backgroundColor: 'rgb(220, 220, 220)',
    },
});