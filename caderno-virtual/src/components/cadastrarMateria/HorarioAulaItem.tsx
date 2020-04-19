import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { sHorarioAulaItem } from './styles';
import { FontAwesome } from "@expo/vector-icons"
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import _ from 'lodash';

const RenderItem = ({ dia, setArrDiaSelecionado, arrDiaSelecionado }) => {

    const getFullName = (dia:{nome: string}) => {
        switch(dia.nome){
            case "seg":
                return "Segunda-Feira";
            case "ter":
                return "Terça-Feira";
            case "qua":
                return "Quarta-Feira";
            case "qui":
                return "Quinta-Feira";
            case "sex":
                return "Sexta-Feira";
            case "sab":
                return "Sábado";
            case "dom":
                return "Domingo";
            default:
                return "undefined"
        }
    }
    
    const [pickerInicalVisible, setPickerInicalVisible]=useState<boolean>(false);
    const [horarioInicial, setHorarioInicial] = useState<string>("00:00");
    
    const [pickerFinalVisible, setPickerFinalVisible]=useState<boolean>(false);
    const [horarioFinal, setHorarioFinal] = useState<string>("00:00");

    const onInicialTimeChange = (e, date) =>{
        setPickerInicalVisible(false);
        setPickerFinalVisible(false);

        if(e.type === "set"){
            setHorarioInicial(moment(date).format('H:mm'));

            const value = arrDiaSelecionado.find(a => a.nome === dia.item.nome)
            value.hrInicial = moment(date);
            setArrDiaSelecionado(_.xorBy(value, arrDiaSelecionado, 'nome'))
        }   
    }

    const onFinalTimeChange = (e, date) =>{
        setPickerInicalVisible(false);
        setPickerFinalVisible(false);

        if (e.type === "set") {
            setHorarioFinal(moment(date).format('H:mm'));

            const value = arrDiaSelecionado.find(a => a.nome === dia.item.nome)
            value.hrFinal = moment(date);
            setArrDiaSelecionado(_.xorBy(value, arrDiaSelecionado, 'nome'))
        }
    }

    return(
        <View style={sHorarioAulaItem.horarioBox} key={dia.key}>
            <Text style={sHorarioAulaItem.day}>{getFullName(dia.item)}</Text>

            <View style={sHorarioAulaItem.textHorarioWrapper}>
                <TouchableOpacity onPress={() => setPickerInicalVisible(true)}>
                    <Text style={sHorarioAulaItem.horario}>{horarioInicial}</Text>
                </TouchableOpacity>

                <View style={{marginHorizontal:10, justifyContent:"center"}}>
                    <FontAwesome name="long-arrow-right" size={40} color="#D8BFD8"/>
                </View>

                <TouchableOpacity onPress={() => setPickerFinalVisible(true)}>
                    <Text style={sHorarioAulaItem.horario}>{horarioFinal}</Text>
                </TouchableOpacity>

                {
                    pickerInicalVisible &&
                    <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={new Date()}
                        mode={"time"}
                        is24Hour={true}
                        display="default"
                        onChange={onInicialTimeChange}
                    />
                }
                {
                    pickerFinalVisible &&
                    <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={new Date()}
                        mode={"time"}
                        is24Hour={true}
                        display="default"
                        onChange={onFinalTimeChange}
                    />
                }
            </View>
        </View>
    )
}
export default RenderItem;