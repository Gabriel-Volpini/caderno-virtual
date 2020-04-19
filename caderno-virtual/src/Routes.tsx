import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from "@expo/vector-icons"

import ListaMaterias from './pages/ListaMaterias/ListaMaterias';
import NovaFoto from './pages/NovaFoto/NovaFoto'
import Galeria from './pages/Galeria/Galeria';
import Main from './pages/Main/Main'
import { IAppContext, AppContext } from '../App';


const Routes: React.FC = () => {
    const Stack = createStackNavigator();
    const {
        setModalCadastrarVisible
    } = useContext<IAppContext>(AppContext); 


    const iconCadastrar = () => (
        <TouchableOpacity activeOpacity={0.7} onPress={() => setModalCadastrarVisible(true)} style={sNav.buttonCadastrar}>
            <MaterialIcons name="add" size={25} color="#FFF" />
        </TouchableOpacity>
    )
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Main" 
                    component={Main}
                    options={{  
                        title: 'Painel',
                        headerStyle: {
                            backgroundColor: '#7D40E7'
                        }, 
                        headerTintColor: '#fff', 
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }, 
                        headerRight: iconCadastrar

                    }}  
                />
                <Stack.Screen 
                    name="ListaMaterias" 
                    component={ListaMaterias}
                    options={{  
                        title: 'Suas matérias',
                        headerStyle: {
                            backgroundColor: '#7D40E7'
                        }, 
                        headerTintColor: '#fff', 
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }, 
                        headerRight: iconCadastrar

                    }}  
                />
                <Stack.Screen
                    name='Galeria'  
                    component={Galeria}   
                    options={{
                        title: 'Suas matérias',
                        headerStyle: {
                            backgroundColor: '#7D40E7'
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: iconCadastrar

                    }} 
                />
                <Stack.Screen 
                    name="NovaFoto" 
                    component={NovaFoto} 
                    options={{
                        title: 'Câmera',
                        headerStyle: {
                            backgroundColor: '#7D40E7',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }, 
                    }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
  );
}

export default Routes;

export const sNav = StyleSheet.create({
    buttonCadastrar:{
        marginRight:10
    },

})
