import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Agendamento from '../views/Agendamento';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator>
        {/* <Tab.Screen name="Presencial" component={PEspecialidade}></Tab.Screen> */}
        <Tab.Screen name="Agendamento" component={Agendamento} />
    </Tab.Navigator>
);
