import React from "react";
import {View, StyleSheet} from "react-native";
import { Spinner } from '@ui-kitten/components';


export const LoadingIndicator = (props: any) => (
    <View style={[props.style]}>
      <Spinner {...props.spinner} size={props.size || 'small'}/>
    </View>
  );
