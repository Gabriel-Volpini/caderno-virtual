import React, { useState } from 'react';
import { TouchableWithoutFeedback, Text } from 'react-native';
import { sDiaSemanaItem } from './styles';

const DiaSemanaItem = ({ dia, color, setArrDiaSelecionado}) =>{

    const [selecionado, setSelecionado] = useState<boolean>(false);
    

    const selecionar = () => {
        if (!selecionado) setArrDiaSelecionado(currentState => [...currentState, {dia: dia}]);
        else setArrDiaSelecionado(currentState => currentState.filter(a => a.dia !== dia));
        setSelecionado(selecionado => !selecionado);
    }

    return(
        <TouchableWithoutFeedback onPress={selecionar}>
            <Text
                style={[
                    sDiaSemanaItem.diaSemana,
                    { color: selecionado ? color : "#A29C9C" }]}
            >
                {dia}
            </Text>
        </TouchableWithoutFeedback>
    )
}
export default DiaSemanaItem;