import React from 'react';
import { Text } from 'react-native';

export const Title = ({ text }) =>
    <Text
        style={{  fontSize: 30, color: 'black' }}>
        {text}
    </Text>;