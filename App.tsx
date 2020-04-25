import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Image } from 'react-native';
import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/navigation/bottom-tab-navigator';
import { createStackNavigator } from '@react-navigation/stack';
import {Asset} from "expo-asset";
import {AppLoading} from "expo";

export const Stack = createStackNavigator();

export const cacheImages = (images: string[]) => {
  return images.map((image) => {
    if(typeof image === "string") {
      return Image.prefetch(image);
    }else {
      return Asset.fromModule(image).downloadAsync();
    }
  })
}

export default function App() {
  const containerRef = React.useRef();
  const [ready, setReady] = React.useState(false);

  const _loadAssetsAsync = async() => {
    const imageAssests = cacheImages([
      require("./assets/bg.jpeg")
    ])
    await Promise.all([...imageAssests]);
  }

  if(!ready) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    )
  }
  return (
    <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer ref={containerRef as any}>
        <BottomTabNavigator/>
      </NavigationContainer>
    </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
