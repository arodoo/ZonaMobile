import React, { useState } from 'react';
import { View, Button, Input, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useFormik } from 'formik';
import Toast from 'react-native-toast-message';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, updateDoc } from 'firebase/firestore'; // Importa las funciones de Firestore
import { initialValues, validationSchema } from './CreateGroupForm.data';
import { styles } from './CreateGroupForm.styles';
import { GoBackHeader } from '../../molecules';

export function CreateGroupForm({ navigation }) {
  const [imageUri, setImageUri] = useState(null);

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

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <GoBackHeader />
      <Text style={styles.title}>Crear grupo</Text>
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
        label="Descripción"
        placeholder="Descripción del grupo"
        onChangeText={formik.handleChange('description')}
        onBlur={formik.handleBlur('description')}
        value={formik.values.description}
        errorMessage={formik.touched.description && formik.errors.description}
      />
      <Button title="Seleccionar imagen" onPress={handleImagePicker} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Button title="Crear grupo" onPress={formik.handleSubmit} />
    </View>
  );
}