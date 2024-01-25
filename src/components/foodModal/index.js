import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
import { usePostFood } from '../../hooks/usePostFood';

export default function FoodModal({ openModal, setOpenModal }) {

    const { postFood } = usePostFood();

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const queryClient = useQueryClient();

    const postFoodMutation = useMutation({
        mutationFn: ({ name, price, image }) => {
            // Pega o último id + 1 para que os objetos seguintes nunca tenha o mesmo id.
            const lastId = queryClient.getQueryData(['food-data']);

            // De início não existe objeto, por isso essa lógica.
            const id = String(Number(lastId[lastId.length - 1]?.id ? lastId[lastId.length - 1].id : '1') + 1);

            return postFood({ id, name, price, image });
        },
        onSuccess: (data) => {
            queryClient.setQueryData(['food-data'], (currentData) => {
                return [...currentData, data];
            });
        },
        onError: (error) => {
            console.log(error.message);
        }
    })

    // O modal fecha quando o mutation der sucesso.
    useEffect(() => {
        if (postFoodMutation.isSuccess) {
            setOpenModal(false);
        }
    }, [postFoodMutation.isSuccess]);

    return (
        <Modal
            transparent={true}
            visible={openModal}
        >
            <View
                style={styles.container}
            >
                <View style={styles.box}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.label}>nome:</Text>
                        <TextInput
                            style={styles.textInput}
                            value={name}
                            onChangeText={text => setName(text)}
                        />
                    </View>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.label}>preço:</Text>
                        <TextInput
                            style={styles.textInput}
                            value={price}
                            onChangeText={text => setPrice(text)}
                        />
                    </View>
                    <View style={styles.textInputContainer}>
                        {/* Input para colocar um endereço de imagem, ex: https://hips.hearstapps.com/hmg-prod/images/del089923-chicken-soup-web-254-rv-vertical-64dfccd9f3556.jpg */}
                        <Text style={styles.label}>image:</Text>
                        <TextInput
                            style={styles.textInput}
                            value={image}
                            onChangeText={text => setImage(text)}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.modalbutton}
                            onPress={() => {
                                setOpenModal(false);
                            }}
                        >
                            <Text style={styles.modalButtonText}>cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalbutton}
                            onPress={() => {
                                postFoodMutation.mutate({ name, price, image });
                            }}
                        >
                            <Text style={styles.modalButtonText}>salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgba(50,50,50,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: 'white',
        padding: 20,
        width: '90%',
        borderRadius: 20,
    },
    textInputContainer: {
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        textTransform: 'capitalize',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'rgb(150, 150, 150)',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 20,
    },
    modalbutton: {
        marginTop: 20,
        backgroundColor: 'darkorange',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    modalButtonText: {
        fontSize: 16,
        textTransform: 'capitalize',
    }
});