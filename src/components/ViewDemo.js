import React from "react";
import { View, StyleSheet } from "react-native";

export default () =>{
    return(
        <View style={styles.root}>
            <View style={styles.subView1}/>
            <View style={styles.subView2}/>
            <View style={styles.subView3}/>
        </View>
    )
}

//样式
const styles = StyleSheet.create({
    root:{

        //纵向布局 row、row-reverse、column-reverse
        flexDirection:'column',   
        
        width:'100%',
        height:'100%',
        backgroundColor:'#c0c0c0'
    },
    subView1:{
        width:100,
        height:100,
        background:"red",
    },
    subView2:{
        width:100,
        height:100,
        background:"yellow",
    },
    subView3:{
        width:100,
        height:100,
        background:"blue",
    }
})