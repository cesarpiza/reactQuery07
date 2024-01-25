import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import FoodList from './components/foodList';
import FoodAddButton from './components/foodAddButton';

const queryClient = new QueryClient();

export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden barStyle={'dark-content'} />
            <QueryClientProvider client={queryClient}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>cardápio</Text>
                </View>
                <FoodList />
                <FoodAddButton />
            </QueryClientProvider>
        </SafeAreaView >
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleContainer: {
        flex: 0.1,
        justifyContent: 'flex-end',
        // backgroundColor: 'lightblue',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 22,
        textTransform: 'capitalize',
        fontWeight: 'bold',
    }
});