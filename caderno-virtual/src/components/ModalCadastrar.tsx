import React, { useContext, useState } from 'react';
import { View, Button, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import { Overlay, Input } from 'react-native-elements';
import { Entypo } from "@expo/vector-icons"
import { sModalCadastrar } from './styles'
import DiaSemanaItem from './DiaSemanaItem';

import { IAppContext, AppContext } from '../../App'


const ModalCadastrar: React.FC = () =>{
    const {
        modaCadastrarVisible,
        setModalCadastrarVisible
    } = useContext<IAppContext>(AppContext);

    var arrNomeMateria = '';
    var arrDiaSelecionado = [];

    function adicionarDia(diaSelecionado){
        arrDiaSelecionado.push(diaSelecionado)
    }

    function removerDia(diaSelecionado){
        arrDiaSelecionado = arrDiaSelecionado.filter(a => a !== diaSelecionado)
    }

    return(
        <Overlay 
            isVisible={modaCadastrarVisible}
            onBackdropPress={() => setModalCadastrarVisible( false)}
            width="90%"
            height={"90%"}
        >
            <View
                style={sModalCadastrar.overlayContent}
            >
                <Input
                    onChangeText={e => arrNomeMateria = e}                    
                    placeholder='Matéria'
                    autoCapitalize="words"
                    leftIcon={
                        <Entypo 
                            name="open-book" 
                            style={{marginRight:10}}
                            size={20} 
                            color="#707070" 
                        />}
                />
                <View style={sModalCadastrar.diaSemanaWrapper}>
                    <DiaSemanaItem removerDia={removerDia} adicionarDia={adicionarDia} dia="dom" color="#CD3535"/>
                    <DiaSemanaItem removerDia={removerDia} adicionarDia={adicionarDia} dia="seg" color="#35CD44"/>
                    <DiaSemanaItem removerDia={removerDia} adicionarDia={adicionarDia} dia="ter" color="#DD22F9"/>
                    <DiaSemanaItem removerDia={removerDia} adicionarDia={adicionarDia} dia="qua" color="#940EEE"/>
                    <DiaSemanaItem removerDia={removerDia} adicionarDia={adicionarDia} dia="qui" color="#355ECD"/>
                    <DiaSemanaItem removerDia={removerDia} adicionarDia={adicionarDia} dia="sex" color="#35A4CD"/>
                    <DiaSemanaItem removerDia={removerDia} adicionarDia={adicionarDia} dia="sab" color="#77CD35"/>
                </View>
                <TouchableOpacity style={sModalCadastrar.buttonCadastrar} onPress={() => console.log(arrNomeMateria)}>
                    <Text style={sModalCadastrar.textCadastrar}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </Overlay>
    )
}
export default ModalCadastrar;

