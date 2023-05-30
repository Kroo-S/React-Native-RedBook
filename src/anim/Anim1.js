import React,{useRef} from "react";
import { 
    StyleSheet,
    View,
    Button,
    Animated 

} from "react-native";

export default ()=>{

    const marginLeft = useRef(new Animated.Value(0)).current

    return(
        <View style={styles.root}>
            <Button 
                title="按钮" 
                color={'green'}
                onPress={()=>{
                    Animated.timing(marginLeft,{
                        toValue:200,
                        duration:1000,
                        useNativeDriver:false,
                    }).start();
                }}
            />
            <Animated.View 
                style={[styles.view,{marginLeft}]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    view: {
        width: 100,
        height: 100,
        backgroundColor: '#3050ff',
        marginTop: 20,
    },
});