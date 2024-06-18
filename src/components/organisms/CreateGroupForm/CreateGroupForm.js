import React from 'react'
import { View } from 'react-native'
import { Button, Input, Icon, Text } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import Toast from 'react-native-toast-message'

//import firebase functions
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage'

import { initialValues, validationSchema } from './CreateGroupForm.data'
import { styles } from './CreateGroupForm.styles'

import { GoBackHeader } from '../../molecules'

export function CreateGroupForm({ navigation }) {

  const formik = useFormik({
    //squema for create a new group
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const storage = getStorage();
        const response = await fetch(uri);
        const blob = await response.blob();
        const refStorage = ref(storage, `groupImages/${uid}`);
        await uploadBytes(refStorage, blob).then((snapshot) => {
          updatePhotoURL(snapshot.metadata.fullPath);
        });
        //navigation.navigate('Home')
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error al crear el grupo',
        })
      }
    }
  })

  return (
    <View>
      <GoBackHeader title='Create Group' onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.form}>
          <Text h3 style={styles.textRegister}>Create Group</Text>
          <Input
            style={styles.input}
            label="Name"
            placeholder="Group Name"
            onChangeText={formik.handleChange('name')}
            value={formik.values.name}
            errorMessage={formik.errors.name}
          />
          <Input
            style={styles.input}
            label="Description"
            placeholder="Group Description"
            onChangeText={formik.handleChange('description')}
            value={formik.values.description}
            errorMessage={formik.errors.description}
          />
          <Input
            style={styles.input}
            label="Image URL"
            placeholder="Image URL"
            onChangeText={formik.handleChange('imageUrl')}
            value={formik.values.imageUrl}
            errorMessage={formik.errors.imageUrl}
          />
          <Button
            style={styles.button}
            title="Create Group"
            onPress={formik.handleSubmit}
          />
        </View>
      </View>
    </View>
  )
}