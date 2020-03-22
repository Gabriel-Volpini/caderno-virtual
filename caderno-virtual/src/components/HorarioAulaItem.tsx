import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { sHorarioAulaItem } from './styles';
import { FontAwesome } from "@expo/vector-icons"

const renderItem = ({ item }) => {

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
        }
    }
    
    return(
        <View style={sHorarioAulaItem.horarioBox} key={item.key}>
            <Text style={sHorarioAulaItem.day}>{getFullName(item)}</Text>

            <View style={sHorarioAulaItem.textHorarioWrapper}>
                <Text style={sHorarioAulaItem.horario}>00:00</Text>
                <View style={{marginHorizontal:10, justifyContent:"center"}}>
                    <FontAwesome name="long-arrow-right" size={40} color="#DD22F9"/>
                </View>
                <Text style={sHorarioAulaItem.horario}>00:00</Text>
            </View>
        </View>
    )
}
export default renderItem