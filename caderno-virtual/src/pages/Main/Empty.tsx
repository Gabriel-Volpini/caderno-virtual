import React from "react";
import { Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons"
import { sEmpty } from "./styles";

const Empty:React.FC = () => {
    return(
        <>
            <Text style={sEmpty.text}>Nem uma matéria cadastrada</Text>
            <Image style={sEmpty.image} source={require("../../images/empty.png")} />
            <TouchableOpacity style={sEmpty.button} onPress={() => { }}>
                <MaterialIcons name="add" size={20} color="#FFF" />
                <Text style={sEmpty.buttonText}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
        </>
    )
}
export default Empty;