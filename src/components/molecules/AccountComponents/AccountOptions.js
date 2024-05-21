import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Icon, ListItem } from '@rneui/base'
import map from 'lodash/map'
import { Modal } from '../../Shared'
import { ChangueDisplayNameForm } from './index'

export function AccountOptions(props) {

  const { onReload } = props

  const [showModal, setShowModal] = useState(false)
  const [renderComponent, setRenderComponent] = useState(null)

  const onCloseOpenModal = (state) => (

    setShowModal(state)

  )

  const selectedComponent = (key) => {
    // Add your logic here based on the selected component key
    if (key === "displayName") {
      setRenderComponent(
        <ChangueDisplayNameForm
          onCloseOpenModal={onCloseOpenModal}
          onReload={onReload}
        />)
      onCloseOpenModal(true)
    }
  }

  const menuOptions = [
    {
      title: "Cambiar nombre y apellidos",
      iconNameLeft: "account-circle",
      iconNameRight: "chevron-right",
      onPress: () => selectedComponent("displayName")
    },
    {
      title: "Cambiar email",
      iconNameLeft: "at",
      iconNameRight: "chevron-right",
      onPress: () => console.log("Cambiar email")
    },
    {
      title: "Cambiar contraseña",
      iconNameLeft: "lock-reset",
      iconNameRight: "chevron-right",
      onPress: () => console.log("Cambiar contraseña")
    }
  ]

  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem
          key={index}
          title={menu.title}
          leftIcon={<Icon name={menu.iconNameLeft} />}
          rightIcon={<Icon name={menu.iconNameRight} />}
          onPress={menu.onPress}
        />
      ))}
      <Modal
        isVisible={showModal}
        onCloseOpenModal={onCloseOpenModal}
        component={renderComponent}
      />
      
    </View>
  )
}
