import React, { useRef, useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";


export default () => {


    // 1. 2s后获取输入框焦点
    const inputRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            inputRef.current.focus();
        }, 2000);
    }, []);

    return (
        <View style={styles.root}>
            <TextInput
                style={styles.input}
                autoFocus={false}
                ref={inputRef}
                blurOnSubmit={true}
                // defaultValue="默认内容"  
                selection={{ star: 1, end: 3 }}
                selectionColor='red'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0'
    },
    input: {
        width: '100%',
        height: 56,
        backgroundColor: '#D0D0D0',
        fontSize: 24,
        color: '#333333',
        fontWeight: 'bold',
    }
})