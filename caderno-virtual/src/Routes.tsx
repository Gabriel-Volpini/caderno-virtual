import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from "@expo/vector-icons"

import Main from './pages/Main/Main';
import Galeria from './pages/Galeria';
import Aulas from './pages/aulas/Aulas';
import { IAppContext, AppContext } from '../App';


const Routes: React.FC = () => {
    const Stack = createStackNavigator();
    const {
        setModalCadastrarVisible
    } = useContext<IAppContext>(AppContext);


    const iconCadastrar = () => (
        <TouchableOpacity onPress={() => setModalCadastrarVisible(true)} style={sNav.buttonCadastrar}>
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
                        title: 'Menu', 
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
                    name="Galeria" 
                    component={Galeria}
                    options={{ 
                        title: 'Galeria', 
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
                    name="Aulas" 
                    component={Aulas}
                    options={{ 
                        title: 'Cadastrar', 
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
