import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  ApplicationProvider,
  Button,
  IconRegistry,
  Text,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva'

export default function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <Button style={{ borderRadius: 20, width: 200}}  size="medium" appearance='outline' status="info">
          Get Started
        </Button>
      </View>
    </ApplicationProvider>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
