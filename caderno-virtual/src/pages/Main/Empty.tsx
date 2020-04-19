import React, { useContext } from "react";
import {Text, Image, TouchableOpacity } from 'react-native';

import { MaterialIcons } from "@expo/vector-icons"
import { sEmpty } from "./styles";
import { IAppContext, AppContext } from "../../../App";

//@ts-ignore
const Empty:React.FC = ({ navigation }) => {

    const {
        setModalCadastrarVisible
    } = useContext<IAppContext>(AppContext)

    return(
        <>
            <Text style={sEmpty.text}>Nem uma matéria cadastrada</Text>
            <Image style={sEmpty.image} source={require("../../images/empty.png")} />
            {/* <TouchableOpacity activeOpacity={0.7} style={sEmpty.button} onPress={() => setModalCadastrarVisible(true)}>
                <MaterialIcons name="add" size={20} color="#FFF" />
                <Text style={sEmpty.buttonText}>
                    Cadastrar
                </Text>
            </TouchableOpacity> */}

        </>
    )
}
export default Empty;