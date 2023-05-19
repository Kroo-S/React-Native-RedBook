// 6.6 JSX

import React, { useEffect, useState, useRef } from "react";
import { View, Text, ScrollView } from 'react-native'
import InfoCard from "./InfoCard";

function FunctionViewJSX(props) {

    //useRef
    const scrollViewRef = useRef(null);

    //要从props中取出来
    const { name, age, level, sex } = props;

    //这里的address相当于state，setAddress相当于this.setState
    const [address, setAddress] = useState("江苏省南京市");

    // 6.7 条件渲染
    const [levelUp, setLevelUp] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLevelUp(true)
        }, 2000)
    }, []);

    //=================== 6.6、JSX 拆分渲染：1. 方法 2. 独立组件 3. props.children ========================
    // 1. 传参
    const renderProps = () => {
        return (
            <Text style={{ color: 'white' }}>
                {`name=${name}, age=${age}, level=${level}, sex=${sex}`}
            </Text>
        )
    }

    // 2. 地址
    const renderAddress = () => {
        return (
            <Text style={{ color: 'white', fontSize: 30 }}>
                {address}
            </Text>
        )
    }

    // 3. 滚动条
    const renderList = () => {

        // 这里要加<text>父元素
        <Text>
            {/* 引入了ref */}
            <ScrollView ref={scrollViewRef}>
                <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>AAA</Text>
                <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>BBB</Text>
                <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>CCC</Text>
                <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>DDD</Text>
                <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>EEE</Text>
                <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>FFF</Text>
                <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>GGG</Text>
                <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>HHH</Text>
                <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>III</Text>
            </ScrollView>
        </Text>
    }

    // 4. levelView中的方法getLevelView()
    const getLevelView = () => {
        return (
            levelUp ?
                <Text style={{ fontSize: 20, color: 'red', marginVertical: 10 }}>
                    {`等级: 高级`}
                </Text> :
                <Text style={{ fontSize: 20, color: 'red', marginVertical: 10 }}>
                    {`等级: 低级`}
                </Text>
        )   
    }

    // 6.7 列表循环
    const array = ['hahaha','heiheihei','xixixi']


    // class组件是render，函数式组件是return
    return (
        <View style={{ width: '100%', height: 200, backgroundColor: 'green' }}>

            {/* 拆分渲染用花括号 */}
            {/* 1. 拆分为方法 */}
            {renderProps()}
            {renderAddress()}
            {renderList()}

            {/* 2. 拆分为组件 */}
            <InfoCard
                name="组件"
                age={23}
                sex="女"
                levelView={getLevelView()}
            />

            {/* 3. 子view传值 */}
            <InfoCard>
                <Text style={{ fontSize: 20, color: 'blue', marginVertical: 30 }}>
                    {`爱好：唱、跳、RAP、篮球`}
                </Text>
            </InfoCard>

            {/* 6.7 列表循环 */}
            <ScrollView>
                {array.map((item)=>{
                    return (
                        <Text style={{fontSize:20}}>{item}</Text>
                    );
                })}
            </ScrollView>



        </View>
    );
}

export default FunctionViewJSX;