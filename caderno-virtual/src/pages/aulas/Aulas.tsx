import React from 'react';
import { TextInput, View, Button } from 'react-native';

import { sAulas } from './styles'
import useSetAsyncData from '../../hooks/useSetAsyncData';
import useGetAsyncData from '../../hooks/useGetAsyncData';

export default function Materias() {
  let texto = "";

  
  return (
    <View style={sAulas.aulaScreen}>
      <TextInput
          style={sAulas.input}
          placeholder="Type here to translate!"
          onChangeText={text => texto = text}
          // value={this.state.text}
        />

        <Button title="cadastrar" onPress={() => alert(texto)}/>
    </View>
  );
}
