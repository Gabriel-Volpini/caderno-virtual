import React, { useContext } from "react";
import {Text, Image, TouchableOpacity } from 'react-native';

import { MaterialIcons } from "@expo/vector-icons"
import { sEmpty } from "./styles";
import { IAppContext, AppContext } from "../../../App";

const Empty:React.FC = () => {

    const {
        setModalCadastrarVisible
    } = useContext<IAppContext>(AppContext)

    return(
        <>
            <Text style={sEmpty.text}>Nem uma matéria cadastrada</Text>
            <Image style={sEmpty.image} source={require("../../images/empty.png")} />
            <TouchableOpacity style={sEmpty.button} onPress={() => setModalCadastrarVisible(true)}>
                <MaterialIcons name="add" size={20} color="#FFF" />
                <Text style={sEmpty.buttonText}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
        </>
    )
}
export default Empty;