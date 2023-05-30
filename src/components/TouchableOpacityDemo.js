import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";



export default () => {
    return (
        <View style={styles.root}>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.5}    //x~1不透明度的变化范围
            >


            </TouchableOpacity>
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