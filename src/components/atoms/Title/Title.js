import React from 'react';
import { Text } from 'react-native';

export const Title = ({ text }) =>
    <Text
        style={{ fontWeight: 'bold', fontSize: 30, color: 'black' }}>
        {text}
    </Text>;