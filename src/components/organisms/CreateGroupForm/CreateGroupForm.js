import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button, Input, Icon, Text, Image } from '@rneui/base';
import { useFormik } from 'formik';
import Toast from 'react-native-toast-message';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, updateDoc, setDoc, collection } from 'firebase/firestore'; // Importa las funciones de Firestore

import { initialValues, validationSchema } from './CreateGroupForm.data';
import { GoBackHeader } from '../../molecules';
import { ImagePickerComponent } from '../../molecules/ImagePicker/ImagePicker';

import { styles } from './CreateGroupForm.styles';

export function CreateGroupForm({ navigation }) {


  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      setLoading(true);
      const db = getFirestore();
      const groupRef = doc(collection(db, 'groups'));

      try {
        const imgUrl = await uploadImage(imageUri);
        await setDoc(groupRef, { ...formValue, imgUrl });

        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Grupo creado',
        });
        navigation.goBack();
      } catch (error) {
        console.error(error);
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error al crear el grupo',
        });
      } finally {
        setLoading(false);
      }
    },
  });

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
      <Text style={styles.title}></Text>

      <View style={styles.form}>
        <ImagePickerComponent
          imageUri={imageUri}
          setImageUri={setImageUri}
        />
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
        <Button
          title="Crear grupo"
          onPress={formik.handleSubmit}
          disabled={!formik.isValid || loading || !imageUri}
          buttonStyle={styles.btnSave} />
      </View>
    </View>
  );
}
