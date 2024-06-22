import React, { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import { Avatar, Text } from "@rneui/base";
import Toast from 'react-native-toast-message';
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from 'expo-media-library';
import { styles } from "./InfoUser.styles";

export function InfoUser(props) {

    const { setLoading, setLoadingText } = props;
    const { uid, photoURL, displayName, email } = getAuth().currentUser;
    const [avatar, setAvatar] = useState(photoURL)

    // Pedir los permisos de la galería solo una vez cuando se monta el componente
    useEffect(() => {
        checkAndRequestPermissions();
        console.log(props);
    }, []);

    const checkAndRequestPermissions = async () => {

        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== "granted") {
            Alert.alert(
                "Error al acceder a la galería",
                "Necesitas conceder los permisos de acceso a la galería para cambiar tu avatar",
                [{ text: "OK" }]
            );
        }
    };

    const selectImage = async () => {
        const storage = getStorage();

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
        });
        if (!result.canceled) {
            uploadImage(result.assets[0].uri, storage);
        }
    };

    const uploadImage = async (uri, storage) => {
        setLoadingText("Subiendo imagen...");
        setLoading(true);
        try {
            const response = await fetch(uri);
            const blob = await response.blob();

            const refStorage = ref(storage, `avatar/${uid}`);

            await uploadBytes(refStorage, blob).then((snapshot) => {
                updatePhotoURL(snapshot.metadata.fullPath);
            });

            Toast.show({
                type: 'success',
                text1: 'Avatar actualizado',
                text2: 'Se ha actualizado tu avatar correctamente'
            })
        } catch (error) {
            // Usar Alert en lugar de Toast
            console.error("Error al subir la imagen:", error.code, error.message);
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Error al subir la imagen'
            })
        }
    };

    const updatePhotoURL = async (imagePath) => {
        const storage = getStorage();
        const imageRef = ref(storage, imagePath);

        const imageURL = await getDownloadURL(imageRef);

        const user = getAuth().currentUser;
        updateProfile(user, { photoURL: imageURL })

        setAvatar(imageURL);

        setLoading(false);
        setLoadingText("");
    };

    return (
        <View style={styles.content}>
            <Avatar
                size="large"
                rounded
                containerStyle={styles.avatar}
                source={photoURL ? { uri: avatar } : null}
                imageProps={{ resizeMode: "cover" }}
            >
                <Avatar.Accessory
                    size={24}
                    onPress={selectImage}
                />
            </Avatar>

            <View>
                <Text style={styles.displayName}>{displayName || "Anónimo"}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
    );
}