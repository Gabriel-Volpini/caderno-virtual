import React, { useContext, useState, useEffect } from 'react';
import { View, Button, TouchableOpacity, Text, FlatList } from 'react-native';
import { Overlay, Input } from 'react-native-elements';
import { Entypo } from "@expo/vector-icons"
import { sModalCadastrar } from './styles'
import DiaSemanaItem from './DiaSemanaItem';
import RenderItem from './HorarioAulaItem';

import { IAppContext, AppContext } from '../../../App'

interface IDia {
    nome: string,
    hrInicial: string,
    hrFinal: string
}

const ModalCadastrar: React.FC = () =>{
    const {
        modaCadastrarVisible,
        setModalCadastrarVisible
    } = useContext<IAppContext>(AppContext);

    var nomeMateria = '';
    const [arrDiaSelecionado, setArrDiaSelecionado] = useState<Array<IDia>>([]);
    
    const onComponentClose = () => {
        if (modaCadastrarVisible)return
        setArrDiaSelecionado([]);
    }
    useEffect(onComponentClose, [modaCadastrarVisible])

    const CadastrarMateria = (nomeMateria: string) => {
        // console.log(nomeMateria)
        console.log(arrDiaSelecionado)
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
                    onChangeText={e => nomeMateria = e}                    
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
                    <DiaSemanaItem setArrDiaSelecionado={setArrDiaSelecionado} dia="dom" color="#CD3535"/>
                    <DiaSemanaItem setArrDiaSelecionado={setArrDiaSelecionado} dia="seg" color="#940EEE"/>
                    <DiaSemanaItem setArrDiaSelecionado={setArrDiaSelecionado} dia="ter" color="#940EEE"/>
                    <DiaSemanaItem setArrDiaSelecionado={setArrDiaSelecionado} dia="qua" color="#940EEE"/>
                    <DiaSemanaItem setArrDiaSelecionado={setArrDiaSelecionado} dia="qui" color="#940EEE"/>
                    <DiaSemanaItem setArrDiaSelecionado={setArrDiaSelecionado} dia="sex" color="#940EEE"/>
                    <DiaSemanaItem setArrDiaSelecionado={setArrDiaSelecionado} dia="sab" color="#77CD35"/>
                </View>
                
                <View style={sModalCadastrar.horarioWrapper}>
                    <FlatList
                        data={arrDiaSelecionado}
                        keyExtractor={(item, index) => index + ''}
                        renderItem={(item) => <RenderItem arrDiaSelecionado={arrDiaSelecionado} setArrDiaSelecionado={setArrDiaSelecionado}  dia={item}/>}
                        numColumns={1}
                    />
                </View>

                <TouchableOpacity activeOpacity={0.7} style={sModalCadastrar.buttonCadastrar} onPress={() => CadastrarMateria(nomeMateria)}>
                    <Text style={sModalCadastrar.textCadastrar}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </Overlay>
    )
}
export default ModalCadastrar;

