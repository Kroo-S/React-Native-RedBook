import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const InfoCard = (props) => {
    const { name, age, sex, levelView } = props;
    return (
        <View style={styles.root}>
            <Text style={styles.txt}>
                {`姓名：${name}`}
            </Text>

            {/* 3. 样式组合用方括号
            <Text style={[styles.txt, style.txtBold]}>
                {`年龄：${age}`}
            </Text> */}

            <Text style={styles.txt}>
                {`性别：${sex}`}
            </Text>

            {/* 传递的参数levelView，可以直接用方括号传递过来 */}
            {levelView}
 
            {/* 子view传值 */}
            {props.children}
        </View>
    )
}

// 样式表StyleSheet  
const styles = StyleSheet.create({

    // 1. 根结点样式
    root: {
        width: '100%',
        flexDirection: 'column',
    },

    // 2. text样式
    txt: {
        fontSize: 20,
        color: 'black',
        marginVertical: 10,
    },
    // 3. 样式组合
    txtBold:{
        fontWeight:"bold",
    }
})




//导出
export default InfoCard;