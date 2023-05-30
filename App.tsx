/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  useColorScheme,

} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';

import ClassView from './src/components/ClassView';
import FunctionView from './src/components/FunctionView';
import FunctionViewJSX from './src/components/FunctionViewJSX';
import TimerView from './src/components/TimerView';
import ViewDemo from './src/components/ViewDemo';
import TextDemo from './src/components/TextDemo';
import ImageDemo from './src/components/ImageDemo';
import ImageBackgroundDemo from './src/components/ImageBackgroundDemo';
import TextInputDemo from './src/components/TextInputDemo';
import TouchableOpacityDemo from './src/components/TouchableOpacityDemo';
import ButtonDemo from './src/components/ButtonDemo';
import ScrollViewDemo from './src/components/ScrollViewDemo';
import FlatListDemo from './src/components/FlatListDemo';
import SectionListDemo from './src/components/SectionListDemo';
import ModalDemo from './src/components/ModalDemo'
import SwitchDemo from './src/components/SwitchDemo';
import TestApi from './src/components/TestApi';
import Anim1 from './src/anim/Anim1';
import Anim2 from './src/anim/Anim2';
import Anim3 from './src/anim/Anim3';
import Anim4 from './src/anim/Anim4';
import Anim5 from './src/anim/Anim5';
import Anim6 from './src/anim/Anim6';
import Anim7 from './src/anim/Anim7';
import Anim8 from './src/anim/Anim8';
import Anim9 from './src/anim/Anim9';
import Anim10 from './src/anim/Anim10';
import AnimShow from './src/anim/AnimShow';
import TSDemo from './src/ts/TSDemo';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={style.container}>
        {/* <ClassView name="wangwu" age={27} level="top" sex={true}/>
        <FunctionView name="zhangsan" age={25} level="top" sex={true} />
        <FunctionViewJSX name="JSX拆分渲染" age={25} level="top" sex={true} /> 
        <TimerView />
        <ViewDemo /> */}
        
        {/* <TextDemo /> */}
        {/* <ImageDemo /> */}

        {/* <ImageBackgroundDemo /> */}

        {/* <TextInputDemo /> */}

        {/* <TouchableOpacityDemo /> */}

        {/* <ButtonDemo /> */}

        {/* <ScrollViewDemo /> */}

        {/* <FlatListDemo /> */}

        {/* <SectionListDemo /> */}

        {/* <ModalDemo/> */}

        {/* <SwitchDemo /> */}

        
        {/* ================================ 第8章 =============================== */}

        {/* <TestApi /> */}


        {/* ================================ 第9章 同CSS3类似 =============================== */}

        {/* <Anim1 /> */}
        
        {/* <Anim2 /> */}

        {/* <Anim3 /> */}

        {/* <Anim4 /> */}

        {/* <Anim5 /> */}

        {/* <Anim6 /> */}

        {/* <Anim7 /> */}

        {/* <Anim8 /> */}

        {/* <Anim9 /> */}
        
        {/* <Anim10 /> */}

        {/* <AnimShow /> */}


        {/* ================================ 第11章 Typescript =============================== */} 
        <TSDemo/>

      </View>

      
        

        
      
        
      
      

    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});



export default App;
