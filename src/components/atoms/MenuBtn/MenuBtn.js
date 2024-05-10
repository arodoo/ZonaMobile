import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';


export const MenuBtn = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon name="menu" size={44} color="#000" />
        </TouchableOpacity>
    )
}