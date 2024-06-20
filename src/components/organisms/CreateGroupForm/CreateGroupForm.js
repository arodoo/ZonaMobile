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

//services
import { createGroup } from '../../../services';

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
      //console.log(formValue, imageUri);
      try {
        const groupId = await createGroup(formValue, imageUri);
        console.log(groupId);
        if (groupId) {
          navigation.goBack();
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error.message,
          visibilityTime: 3000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
        });
      } finally {
        setLoading(false);
      }
    }
  });

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
