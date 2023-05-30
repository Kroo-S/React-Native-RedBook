import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";



export default () => {
    return (
        <View style={styles.root}>
            <TouchableHighlight>
                <Text style={styles.txt}>按钮</Text>
            </TouchableHighlight>

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0'
    },
    button: {
        width: 300,
        height: 60,
        backgroundColor: '#2030FF',
        borderRadius:30
    }
})