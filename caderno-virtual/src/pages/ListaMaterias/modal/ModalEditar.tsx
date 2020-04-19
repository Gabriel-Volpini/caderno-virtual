import React, { useContext, useState, useEffect } from 'react';
import { View, ToastAndroid,  TouchableOpacity, Text, FlatList } from 'react-native';
import { Overlay, Input } from 'react-native-elements';
import { Entypo } from "@expo/vector-icons"
import { sModalCadastrar } from './styles'
import DiaSemanaItem from './DiaSemanaItem';
import RenderItem from './HorarioAulaItem';
import moment from 'moment';

import useSetAsyncData from '../../../hooks/useSetAsyncData';
import getFullWeekName from '../../../util/getFullWeekName';

interface IDia {
    dia: string,
    hrInicial: string,
    hrFinal: string
}

let nomeMateria = '';

const ModalCadastrar: React.FC = ({item, setItem}) =>{

    const [arrDiaSelecionado, setArrDiaSelecionado] = useState<Array<IDia>>([]);
    
    const onComponentClose = () => {
        if (item)return
        setArrDiaSelecionado([]);
    }
    useEffect(onComponentClose, [item])

    const CadastrarMateria = (aa: string) => {
        let message = "";
        
        if(!nomeMateria.length)
            return alert("O nome da matéria precisa ser preenchido")

        arrDiaSelecionado.forEach(diaSelecionado => {
            if (!diaSelecionado.hrFinal || !diaSelecionado.hrInicial){
                message = `Horário de ${getFullWeekName(diaSelecionado.dia)} não inserido`
            } else if (moment(diaSelecionado.hrFinal).isSame(diaSelecionado.hrInicial, 'minute')){ 
                message = "A aula não podem começar e acabar no mesmo horario" 
            } else if (moment(diaSelecionado.hrInicial).isAfter(diaSelecionado.hrFinal)) {
                message = `A aula de ${getFullWeekName(diaSelecionado.dia)} não pode começar antes de acabar` 
            }

        })

        if (message.length)
            return alert(message)
        
        const dataToSync = {
            nome: aa,
            horarios: arrDiaSelecionado
        }
        // useSetAsyncData(nomeMateria, JSON.stringify(dataToSync))
        // setModalCadastrarVisible(false)
        ToastAndroid.showWithGravityAndOffset(
            'Matéria editada com sucesso',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
    }

    return(
        <Overlay 
            isVisible={!!item}
            onBackdropPress={() => setItem(null)}
            width="90%"
            height={"90%"}
        >
            { !!item ?
            <View
                style={sModalCadastrar.overlayContent}
            >
                <Input
                    value={item.nome}
                    onChangeText={e => setItem({...item, nome: e})}                    
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
            : null
         }
        </Overlay>
    )
}
export default ModalCadastrar;

