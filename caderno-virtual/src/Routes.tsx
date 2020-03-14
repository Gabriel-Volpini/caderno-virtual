import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main/Main';
import Galeria from './pages/Galeria';
import Aulas from './pages/aulas/Aulas';


const Routes: React.FC = () => {
    const Stack = createStackNavigator(); 
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
                    }}  
                />
                
            </Stack.Navigator>
        </NavigationContainer>
  );
}

export default Routes;