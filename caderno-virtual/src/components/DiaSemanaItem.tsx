import React, { useState } from 'react';
import { TouchableWithoutFeedback, Text } from 'react-native';
import { sModalCadastrar } from './styles';

const DiaSemanaItem = ({ dia, color, removerDia, adicionarDia}) =>{

    const [selecionado, setSelecionado] = useState<boolean>(false);
    

    const selecionar = () => {
        if (!selecionado) adicionarDia(dia);
        else removerDia(dia);
        setSelecionado(selecionado => !selecionado);
    }

    return(
        <TouchableWithoutFeedback onPress={selecionar}>
            <Text
                style={[
                    sModalCadastrar.diaSemana,
                    { color: selecionado ? color : "#A29C9C" }]}
            >
                {dia}
            </Text>
        </TouchableWithoutFeedback>
    )
}
export default DiaSemanaItem;