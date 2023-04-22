import React from 'react'
import {Text,TouchableOpacity} from 'react-native'
import {Container,InicialText,CircleNumber} from './styles'

import {useNavigation} from '@react-navigation/native'

export default () => {
    
    const Navigation = useNavigation()

    const JornadaClick = () => {
        Navigation.reset({
            routes: [{name: 'Preload'}]
        })
    }

    return (
        <Container>
            <CircleNumber>
                <Text style={{ color:'#fff', fontWeight: 'bold', fontSize: 18 }}>1</Text>
            </CircleNumber>
            <InicialText>Tipo presencial - Pagamento o que você deseja:</InicialText>
            <TouchableOpacity onPress={JornadaClick}>
                <Text style={{ fontSize:20 , color:'#000', textAlign: 'center', fontWeight: 'bold' }}>Pagar</Text>
            </TouchableOpacity>
        </Container>
    )
}