import 'react-native-gesture-handler';
import { NavigationContainer }  from '@react-navigation/native'

import { createStackNavigator }  from '@react-navigation/stack'
import * as React from 'react';
import Incidents from './pages/Incidents'
import Detail from './pages/Detail'


const AppStack = createStackNavigator();
export default function Routes() {
     return(
        <NavigationContainer>
            <AppStack.Navigator navegationOptions={{ hearder:null ,hearderShown: false }}>
                <AppStack.Screen name = 'Incidents' component = {Incidents} options={{title: ' '}}/>
                <AppStack.Screen name = 'Detail' component = {Detail} options={{title: ' '}}/>
            </AppStack.Navigator>
        </NavigationContainer>
        
    );
}