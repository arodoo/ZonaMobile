import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from '@rneui/base';
import { colors } from '../../../styles/colors';

export function ExpandableButton({ options }) {
    const [open, setOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState(null);

    const items = options.map((option) => ({
        label: option.label,
        value: option.label,
    }));

    const onValueChange = () => {
        const option = options.find((option) => option.label === selectedLabel);
        option.onPress();
    };
        

    return (
        <View>
            <DropDownPicker
                items={items}
                open={open}
                setOpen={setOpen}
                value={selectedLabel}
                setValue={onValueChange}
                placeholder="Selecciona una opción"
                containerStyle={styles.container}
                style={styles.button}
                itemStyle={styles.item}
                dropDownStyle={styles.dropDown}
                ArrowUpIconComponent={() => <Icon type='ant-design' name='caretup' size={20} color={colors.color1} />}
                ArrowDownIconComponent={() => <Icon type='ant-design' name='caretdown' size={20} color={colors.color1} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 200,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 20,
    },
    item: {
        justifyContent: 'flex-start',
    },
    dropDown: {
        backgroundColor: colors.primary,
        borderRadius: 20,
    },
});
