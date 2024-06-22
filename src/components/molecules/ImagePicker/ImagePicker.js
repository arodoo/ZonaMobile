// ImagePickerComponent.js
import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';

// Imagen predeterminada
const defaultImage = require('../../../assets/img/no-image-selected.png');

export function ImagePickerComponent({ imageUri, setImageUri }) {

    const handleImagePicker = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Permiso denegado',
            });
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImageUri(result.assets[0].uri);
            console.log(result.assets[0].uri);
        }
    };

    return (
        <TouchableOpacity onPress={handleImagePicker} style={styles.imagePicker}>
            <Image
                source={imageUri ? { uri: imageUri } : defaultImage}
                style={styles.image}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center ',
        justifyContent: 'center',
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#ddd',
    },
});
