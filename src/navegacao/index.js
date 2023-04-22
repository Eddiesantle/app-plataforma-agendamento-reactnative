import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import UserContextProvider from './../contexts/UserContext';
import Stack from './Stack';

export default props => (
    <SafeAreaView>
        <UserContextProvider>
            <NavigationContainer>
                <Stack />
            </NavigationContainer>
        </UserContextProvider>
    </SafeAreaView>
);
