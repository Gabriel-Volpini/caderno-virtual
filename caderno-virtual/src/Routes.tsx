import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main/Main';
import Galeria from './pages/Galeria';
import Materias from './pages/Materias';


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
                
                
                <Stack.Screen options={{ title: 'Galeria' }} name="Galeria" component={Galeria} />
                <Stack.Screen options={{ title: 'Cadastrar' }} name="Materias" component={Materias} />
            </Stack.Navigator>
        </NavigationContainer>
  );
}

export default Routes;