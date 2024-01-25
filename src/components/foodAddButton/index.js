import React, { useState } from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import FoodModal from '../foodModal';

export default function FoodAddButton() {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <FoodModal openModal={openModal} setOpenModal={setOpenModal} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    setOpenModal(true);
                }}
            >
                <Text style={styles.buttonText}>adicionar</Text>
            </TouchableOpacity>
        </>
    );
}

export const styles = StyleSheet.create({
    button: {
        backgroundColor: 'darkorange',
        flex: 0.06,
        justifyContent: 'center',
        borderTopWidth: 1,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        textTransform: 'capitalize',
    },
});