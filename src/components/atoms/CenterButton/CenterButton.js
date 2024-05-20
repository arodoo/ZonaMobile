import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '@rneui/base';

export function CenterButton({ iconName, onPress, isExpanded }) {
  return (
    <View>
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Icon
                    type='material-community'
                    name={iconName}
                    size={30}
                    color={'#e91e63'}
                />
            </TouchableOpacity>
            {isExpanded && (
                <View style={styles.expandedContainer}>
                    <TouchableOpacity style={styles.miniButton}>
                        <Icon
                            type='material-community'
                            name='home'
                            size={30}
                            color={'#e91e63'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniButton}>
                        <Icon
                            type='material-community'
                            name='map'
                            size={30}
                            color={'#e91e63'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniButton}>
                        <Icon
                            type='material-community'
                            name='phone'
                            size={30}
                            color={'#e91e63'}
                        />
                    </TouchableOpacity>
                    </View>
                )}
                </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    expandedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        position: 'absolute',
        top: -90,
        left: -170,
        right: -170,
        alignItems: 'center',
    },
    miniButton: {
        width: 45,
        height: 45,
        borderRadius: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 20,
    },
    });