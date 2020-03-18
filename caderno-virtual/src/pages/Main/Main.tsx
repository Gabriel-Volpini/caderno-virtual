import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Image, Button } from 'react-native';
import { sMain } from "./styles";

export default function Main({ navigation }) {

  return (
    <View style={sMain.container}>
      <Text style={{ position: "absolute", top: 20, fontSize: 15, color: "#7D40E7", fontWeight:"500"}}>Nao foi encontrada nem uma materia</Text>
      <Image style={{width:340, height:340, }} source={require("../../images/empty.png")}/>
      <Button  title={"cadastrar"} onPress={() =>{}}/>
    </View>
  );
}

