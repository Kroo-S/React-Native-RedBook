import React from "react";
import { StyleSheet, View, Image } from "react-native";

//导入图片
import avatar from '../assets/images/avatar.png'



export default () => {
    return (
        <View style={styles.root}>
            <Image
                source={avatar}
                style={styles.img}
                blurRadius={10}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F5F5'
    },
    img: {
        width: 200,
        height: 120,
        resizeMode:'contain',
        backgroundColor:'red'
    }
});