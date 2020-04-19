import React, { useState } from 'react';
import { View, TouchableOpacity, Text  } from 'react-native';

import Empty from './Empty';

import { sMain, sEmpty } from "./styles";

const Main: React.FC = ({ navigation }) => {

  return (
    <View style={sMain.container}>
      <Empty/>

      <TouchableOpacity activeOpacity={0.7} style={sEmpty.button} onPress={() => navigation.navigate('Camera')}>
        <Text style={sEmpty.buttonText}>
          Camera
        </Text> 
      </TouchableOpacity>
    </View>
  );
}
export default Main;