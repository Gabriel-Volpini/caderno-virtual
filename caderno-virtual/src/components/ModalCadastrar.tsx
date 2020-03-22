import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import { Overlay, Input } from 'react-native-elements';
import { Entypo } from "@expo/vector-icons"
import {sModalCadastrar} from './styles'
import { KeyboardAvoidingView } from 'react-native';

import { IAppContext, AppContext } from '../../App'
var teste = ''
const ModalCadastrar: React.FC = () =>{
    const {
        modaCadastrarVisible,
        setModalCadastrarVisible
    } = useContext<IAppContext>(AppContext);
    
    return(
        <Overlay 
            isVisible={true}
            onBackdropPress={() => setModalCadastrarVisible( false)}
            width="90%"
            height={300}
        >
            <View
                style={{marginTop:20}}
            >
                <Input
                    onChangeText={e => teste = e}                    
                    placeholder='Matérias'
                    autoCapitalize="words"
                    leftIcon={
                        <Entypo 
                            name="open-book" 
                            style={{marginRight:10}}
                            size={20} 
                            color="#707070" 
                        />}
                />
                <Button title="as" onPress={() => console.log(teste)}/>
            </View>
        </Overlay>
    )
}
export default ModalCadastrar;

