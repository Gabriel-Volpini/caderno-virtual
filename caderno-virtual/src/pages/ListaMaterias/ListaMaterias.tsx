import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, AsyncStorage  } from 'react-native';

import Empty from './Empty';

import { sListaMaterias, sEmpty } from "./styles";

const ListaMaterias: React.FC = ({ navigation }) => {

  const onComponentMount = () => {

    const getAsyncStorage = async () => {
        const keys = await AsyncStorage.getAllKeys();
        const result = await AsyncStorage.multiGet(keys);
    
        console.log(keys)
      console.log(result) 

    } 
    getAsyncStorage()
  }
  useEffect(onComponentMount, [])
  return (
    <View style={sListaMaterias.container}>
      <Empty/>
    </View>
  );
}
export default ListaMaterias;