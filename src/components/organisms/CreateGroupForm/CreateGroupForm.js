import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, Input, Icon, Text, Image } from '@rneui/base';
import * as ImagePicker from 'expo-image-picker';
import { useFormik } from 'formik';
import Toast from 'react-native-toast-message';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, updateDoc } from 'firebase/firestore'; // Importa las funciones de Firestore
import { initialValues, validationSchema } from './CreateGroupForm.data';
import { styles } from './CreateGroupForm.styles';
import { GoBackHeader } from '../../molecules';

export function CreateGroupForm({ navigation }) {
  const NO_IMAGE_URI = 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-profile-user-icon.png';
  const [imageUri, setImageUri] = useState(NO_IMAGE_URI);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const storage = getStorage();
        const storageRef = ref(storage, `groups/${formValue.name}`);
        await uploadBytes(storageRef, imageUri);
        const imageUrl = await getDownloadURL(storageRef);

        const db = getFirestore();
        await updateDoc(doc(db, 'groups', formValue.name), {
          name: formValue.name,
          description: formValue.description,
          imageUrl: imageUrl,
        });

        navigation.navigate('Home');
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error al crear el grupo',
        });
      }
    }
  });

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
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const asset = result.assets[0];
      const uri = asset.uri;
      setImageUri(uri);
    }
  };

  console.log('loaded');

  return (
    <View style={styles.container}>
      <GoBackHeader />
      <Text style={styles.title}>Crear grupo</Text>

      <View style={styles.form}>
        {imageUri === NO_IMAGE_URI ? (
          <TouchableOpacity onPress={handleImagePicker}>
            <Image source={{ uri: NO_IMAGE_URI }} style={styles.image} />
            <Text></Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleImagePicker}>
            <Image source={{ uri: imageUri }} style={styles.image} />
          </TouchableOpacity>
        )}
        <Input
          style={styles.input}
          label="Nombre"
          placeholder="Nombre del grupo"
          onChangeText={formik.handleChange('name')}
          onBlur={formik.handleBlur('name')}
          value={formik.values.name}
          errorMessage={formik.touched.name && formik.errors.name}
        />
        <Input
          style={styles.input}
          label="Asunto"
          placeholder="Asunto del grupo"
          onChangeText={formik.handleChange('description')}
          onBlur={formik.handleBlur('description')}
          value={formik.values.description}
          errorMessage={formik.touched.description && formik.errors.description}
        />
        <Button title="Crear grupo" onPress={formik.handleSubmit} buttonStyle={styles.btnSave} />
      </View>
    </View>
  );
}