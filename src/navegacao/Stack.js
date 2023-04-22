import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../views/Preload';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';

import Home from '../views/Home';

/* Jornada agendamento */
import Presencial from '../views/Agendamento/Presencial/Especialidades';
import PorVideo from '../views/Agendamento/PorVideo/Especialidades';

import PresencialProfissionais from '../views/Agendamento/Presencial/Profissionais';
import PorVideoProfissionais from '../views/Agendamento/PorVideo/Profissionais';

import PresencialAgendar from '../views/Agendamento/Presencial/Agendar';
import PorVideoAgendar from '../views/Agendamento/Presencial/Agendar';

import PresencialPagamento from '../views/Agendamento/Presencial/Pagamento';
import PorVideoPagamento from '../views/Agendamento/Presencial/Pagamento';

const Stack = createStackNavigator();

export default props => (
    <Stack.Navigator initialRouteName="Preload">
        <Stack.Screen
            name="Preload"
            component={Preload}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
        />

        <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
        />

        {/* Jornada de aendamento */}
        {/* Especialidades */}
        <Stack.Screen
            name="Presencial"
            component={Presencial}
            options={{title: 'Presencial'}}
        />
        <Stack.Screen
            name="PorVideo"
            component={PorVideo}
            options={{title: 'Por Video'}}
        />
        {/* Profissionais */}
        <Stack.Screen
            name="PresencialProfissionais"
            component={PresencialProfissionais}
            options={{title: 'Profissionais'}}
        />
        <Stack.Screen
            name="PorVideoProfissionais"
            component={PorVideoProfissionais}
            options={{title: 'Profissionais'}}
        />
        {/* Agendar */}
        <Stack.Screen
            name="PresencialAgendar"
            component={PresencialAgendar}
            options={{title: 'Agendar'}}
        />
        <Stack.Screen
            name="PorVideoAgendar"
            component={PorVideoAgendar}
            options={{title: 'Agendar'}}
        />
        {/* Agendar */}
        <Stack.Screen
            name="PresencialPagamento"
            component={PresencialPagamento}
            options={{title: 'Pagamento'}}
        />
        <Stack.Screen
            name="PorVideoPagamento"
            component={PorVideoPagamento}
            options={{title: 'Pagamento'}}
        />
    </Stack.Navigator>
);
