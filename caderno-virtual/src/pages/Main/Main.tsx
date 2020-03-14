import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import Camera from './CameraControl';
import { sMain } from "./styles";

export default function Main() {

  const [cameraVisible, setCameraVisible] = useState<boolean>(false);

  return (
    <View style={sMain.container}>
      {
        cameraVisible ?
          <Camera  setCameraVisible={setCameraVisible}/> 
        : <TouchableOpacity
            onPress={() => setCameraVisible(camera => !camera)}
            style={sMain.button}>
            <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
          </TouchableOpacity>
      }

    </View>
  );
}

