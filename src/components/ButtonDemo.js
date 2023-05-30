import React from "react";
import { StyleSheet,View,Button } from "react-native";

export default ()=>{
    return(
        <View style={styles.root}>
            <Button 
                title="按钮" 
                color={'green'}
                onPress={()=>{
                    
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        width:'100%',
        height:'100%',
        backgroundColor:'#F0F0F0'
    },
})