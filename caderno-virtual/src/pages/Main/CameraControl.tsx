import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

import { sCamera } from "./styles"

interface IProps {
    setCameraVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const CameraControl: React.FC<IProps> = ({setCameraVisible}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={type}>
            <View
              style={sCamera.cameraScreen}>
              <TouchableOpacity
                style={sCamera.flipButton}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <Text style={sCamera.flipText}> Flip </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={sCamera.closeButton}
                onPress={() => setCameraVisible(false)} >
                <Text style={sCamera.closeText}> fechar </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
    )
}

export default CameraControl;