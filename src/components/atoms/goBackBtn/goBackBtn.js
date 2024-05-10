import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';


export const goBackBtn = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Icon name="arrow-back" size={24} color="#000" />
    </TouchableOpacity>
);

