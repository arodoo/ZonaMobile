import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, Input, Icon, Text, Image } from '@rneui/base';
import * as ImagePicker from 'expo-image-picker';
import { useFormik } from 'formik';
import Toast from 'react-native-toast-message';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, updateDoc } from 'firebase/firestore'; // Importa las funciones de Firestore

import { initialValues, validationSchema } from './CreateGroupForm.data';
import { GoBackHeader } from '../../molecules';

import { styles } from './CreateGroupForm.styles';

export function CreateGroupForm({ navigation }) {
  const [imageUri, setImageUri] = useState(NO_IMAGE_URI);
  
  const NO_IMAGE_URI = require('../../../assets/img/no-image-selected.png');
  

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
      //navigation.navigate('Home');
    },
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
      uploadImage(uri);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const storage = getStorage();
    const storageRef = ref(storage, `groups/${formik.values.name}`);
    await uploadBytes(storageRef, blob);
    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
  };


  return (
    <View style={styles.container}>
      <GoBackHeader />
      <Text style={styles.title}>Crear grupo</Text>

      <View style={styles.form}>
        {imageUri === NO_IMAGE_URI ? (
          <TouchableOpacity onPress={handleImagePicker}>
            <Image source={NO_IMAGE_URI} style={styles.image} />
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