import React, { useState, useEffect, useRef, useReducer } from 'react';
import { View, Text, TouchableOpacity, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';

import { sNovaFoto } from './styles'
import { State } from 'react-native-gesture-handler';

const NovaFoto = ()=> {
    const _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };
    return <View style={sNovaFoto.OptionsWrapper}>
        {/*Abrir Câmera*/}
        <TouchableOpacity style={sNovaFoto.Câmera}>
            <Text> Tirar Foto </Text>
        </TouchableOpacity>
        {/*Abrir Galeria*/}
        <TouchableOpacity style={sNovaFoto.Galeria} onPress={_pickImage}>
             <Text> Abrir Galeria </Text>
        </TouchableOpacity>
    </View>
}

export default NovaFoto;
/*
Desisticar a camera
conseguir tirar foto
cortar foto (! procura lib pronta)
salvar foto na galeria E no app
*/