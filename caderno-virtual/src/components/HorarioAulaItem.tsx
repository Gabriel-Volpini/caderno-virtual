import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { sHorarioAulaItem } from './styles';
import { FontAwesome } from "@expo/vector-icons"
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const RenderItem = ({ dia }) => {

    const getFullName = (dia:string) => {
        switch(dia){
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
    
    const [pickerInicalVisible, setPickerInicalVisible]=useState<string>(false);

    const [horarioInicial, setHorarioInicial] = useState<string>("00:00");
    const [horarioFinal, setHorarioFinal] = useState<string>();

    const onTimeChange = (e, date) =>{
        setPickerInicalVisible(false);

        if(e.type === "set"){
            setHorarioInicial(moment(date).format('H:mm'));
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

                <TouchableOpacity>
                    <Text style={sHorarioAulaItem.horario}>00:00</Text>
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
                        onChange={onTimeChange}
                    />
                }
            </View>
        </View>
    )
}
export default RenderItem;