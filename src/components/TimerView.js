import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native'


function TimerView() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((data) => {
                return data + 1;
            })
        }, 1000);
        return()=>{
            clearInterval(interval);
        }
    })

    return (
        <View style={styles2.root}>
            <Text style={styles2.titleTxt}>RN计数器</Text>
            <Text style={styles2.countTxt}>{count}</Text>
        </View>
    )



}
export default TimerView;


//样式
const styles2 = StyleSheet.create({
    root: {
        width:'100%',
        height:'100%',
        backgroundColor:'#353535',
        flexDirection:'column',
        alignItems:'center',
    },
    titleTxt: {
        marginTop:96,
        fontSize:36,
        fontWeight:'bold',
        color:'white',
    },
    countTxt: {
        marginTop:64,
        fontSize:96,
        fontWeight:'bold',
        color:'#1876ff'
    }
})