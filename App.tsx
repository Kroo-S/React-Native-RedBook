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
        
        <TextDemo />
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
