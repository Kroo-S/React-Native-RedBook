import React, { useRef } from "react";
import {

    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    Dimensions     //测量的意思

} from "react-native";

//获取当前屏幕的宽度 Dimensions
const { width } = Dimensions.get('window');

export default () => {

    const scrollViewRef = useRef(null);


    // 数组方法
    const buildListView = () => {
        const array = [];
        for (let i = 0; i < 20; i++) {
            array.push(        // 这里是push，所以是i+1
                <Text key={`item-${i}`} style={styles.txt}>{i + 1}</Text>
            )
        }
        return array;   //  最后导出array
    }

    return (


        <ScrollView

            ref={scrollViewRef}
            style={styles.root}
            contentContainerStyle={styles.contentContainerStyle}
            keyboardDismissMode="none"
            keyboardShouldPersistTaps="handled"
            onMomentumScrollBegin={() => {

            }}
            onMomentumScrollEnd={() => {

            }}
            onScroll={(event) => {
                // console.log(event.nativeEvent.contentOffset.y);
            }}
            overScrollMode="always"

            contentOffset={{ y: 100 }}

            //去掉滚动条
            showsVerticalScrollIndicator={false}

            //按钮是下标为1的数组元素，进行吸顶
            stickyHeaderIndices={[1]}

        >
            <TextInput style={styles.input} />

            <Button title='按钮' onPress={() => {
                // scrollViewRef.current.scrollTo({y: 500, animated: true});
                scrollViewRef.current.scrollToEnd({ animated: true });
            }} />
            
            {buildListView()}
        </ScrollView>



        //  类似banner轮播图

        // <ScrollView style={{ width: '100%', height: 200 }} horizontal={true} pagingEnabled={true}>
        //     <View style={{ width, height: 200, backgroundColor: 'red' }} />
        //     <View style={{ width, height: 200, backgroundColor: 'blue' }} />
        //     <View style={{ width, height: 200, backgroundColor: 'green' }} />
        // </ScrollView>



    )
}



const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0'
    },
    txt: {
        width: '100%',
        height: 56,
        textAlignVertical: 'center',
        fontSize: 24,
        color: 'black'
    },
    contentContainerStyle: {
        paddingHorizontal: 16,
        backgroundColor: '#E0E0E0',
        paddingTop: 20,
    },
    input: {
        width: '100%',
        height: 60,
        backgroundColor: '#ff000050',
    }
})