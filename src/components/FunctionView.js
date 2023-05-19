import React, { useEffect, useState, useRef } from "react";
import { View, Text, ScrollView, useWindowDimensions,useColorScheme } from 'react-native'

function FunctionView(props) {

    //useRef
    const scrollViewRef = useRef(null);

    //要从props中取出来
    const { name, age, level, sex} = props;

    //获取屏幕宽高（移动端用的多）
    const {width, height} = useWindowDimensions();

    //获取手机主题，是黑色还是白色模式，dark和light
    const colorscheme = useColorScheme();

    //这里的address相当于state，setAddress相当于this.setState
    const [address, setAddress] = useState("江苏省南京市");
    //函数式声明中，一个值对应一个方法
    const [hobby,setHobby] = useState('篮球');

    //副作用,中括号是监听,代表一个值变化引起另外一个值的变化
    useEffect(() => {
        setTimeout(() => {
            setAddress("浙江省杭州市");
        }, 2000);
    }, []);

    //可以传多个值，只要有一个值变了，就console.log一次
    useEffect(() => {
        console.log('变化了一次');
    }, [address, name, age]);

    useEffect(() => {
        setTimeout(() => {

            // scrollViewRef官方文档Api,滚动到底部
            scrollViewRef.current.scrollToEnd({animated: true});

        }, 3000);
    }, []);

    // class组件是render，函数式组件是return
    return (
        <View style={{ width: '100%', height: 200, backgroundColor: 'blue' }}>
            <Text style={{ color: 'white' }}>
                {`name=${name}, age=${age}, level=${level}, sex=${sex}`}
            </Text>
            <Text style={{ color: 'white', fontSize: 30 }}>
                {address}
            </Text>

            {/* 引入了ref */}
            <ScrollView ref={scrollViewRef}>
                <Text style={{fontSize:24,marginVertical:12,color:'red'}}>AAA</Text>
                <Text style={{fontSize:24,marginVertical:12,color:'red'}}>BBB</Text>
                <Text style={{fontSize:24,marginVertical:12,color:'red'}}>CCC</Text>
                <Text style={{fontSize:24,marginVertical:12,color:'red'}}>DDD</Text>
                <Text style={{fontSize:24,marginVertical:12,color:'red'}}>EEE</Text>
                <Text style={{fontSize:24,marginVertical:12,color:'red'}}>FFF</Text>
                <Text style={{fontSize:24,marginVertical:12,color:'red'}}>GGG</Text>
                <Text style={{fontSize:24,marginVertical:12,color:'red'}}>HHH</Text>
                <Text style={{fontSize:24,marginVertical:12,color:'red'}}>III</Text>
            </ScrollView>
        </View>
    );
}

export default FunctionView;