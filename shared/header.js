import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from  '@expo/vector-icons'

export default function Header() {
    return (
        <View style={styles.header}>
            {/*icon for the header*/}
            <View>
            <Text style={styles.headerText}></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333'
    }
});