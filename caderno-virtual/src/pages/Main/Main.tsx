import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from "@expo/vector-icons"

import { sMain } from './styles'
import { IAppContext, AppContext } from '../../../App';

const Main = ({ navigation }) => {
    const {
        setModalCadastrarVisible
    } = useContext<IAppContext>(AppContext); 
    
    const cadatrarMateria = () => {
        setModalCadastrarVisible(true);
    }

    const novaFoto = () => {
        navigation.navigate("Camera")
    }

    const materias = () => {
        navigation.navigate("ListaMaterias")
    }

    return(
        <View style={sMain.container}>
            
            <View style={sMain.column}>
                <TouchableOpacity activeOpacity={0.7} style={sMain.item} onPress={cadatrarMateria}>
                    <FontAwesome name="plus" size={50} color="#FFF"/>
                    <View style={sMain.itemTextWrapper}>
                        <Text style={sMain.itemText}>Cadastrar</Text>
                        <Text style={sMain.itemText}>matérias</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={sMain.item} onPress={novaFoto}>
                    {/* <FontAwesome name="camera" size={50} color="#FFF" /> */}
                    <View style={sMain.itemTextWrapper}>
                        <Text style={sMain.itemText}>Nova foto</Text>
                    </View>
                </TouchableOpacity>

            </View> 

            <View style={sMain.column}>
                <TouchableOpacity activeOpacity={0.7} style={sMain.item} onPress={materias}>
                    <FontAwesome name="book" size={60} color="#FFF" />
                    <View style={sMain.itemTextWrapper}>
                        <Text style={sMain.itemText}>Matérias</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={sMain.item} >
                    <View style={sMain.itemTextWrapper}>
                        <Text style={sMain.itemText}>galeria</Text>
                    </View>
                </TouchableOpacity>

            </View> 

            <View style={sMain.column}>
                <TouchableOpacity activeOpacity={0.7} style={sMain.item}>
                    
                    <View style={sMain.itemTextWrapper}>
                        <Text style={sMain.itemText}>Info</Text>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={sMain.item} >
                    <View style={sMain.itemTextWrapper}>
                    </View>
                </TouchableOpacity>

            </View> 

        </View>
    )
}
export default Main