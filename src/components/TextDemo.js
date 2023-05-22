import React from "react";
import {StyleSheet, View, Text} from 'react-native'

export default ()=>{
    return(
        <View style={styles.root}>
            <Text 
                style={styles.txt}
                numberOfLines={1}
                ellipsizeMode='tail'
            >
               1234678987182731245598982345245345246575765735673613
            </Text>
        </View>
    )
}

//样式
const styles = StyleSheet.create({
    root:{
        width:'100%',
        height:'100%',
        backgroundColor:'#F0F0F0'
    },
    txt:{
        fontSize:24,
        // fontWeight:"bold",
        // fontFamily:'。。。'
        // textAlign:'center',           //水平方向居中
        // textAlignVertical:'center'    //垂直方向居中
        // textDecorationStyle 
        // textDecorationLine   文本装饰线
        
    }
})

