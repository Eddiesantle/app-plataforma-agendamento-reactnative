import React from 'react'
import {Text,TouchableOpacity, FlatList, View,ScrollView } from 'react-native'
import {Container,InicialText,CircleNumber,FlatListTeste,Row,Box,BoxEspecialidade,IconEspecialidade} from './styles'

import {useNavigation} from '@react-navigation/native'

export default () => {
    
    const Navigation = useNavigation()

    const JornadaClick = () => {
        Navigation.navigate('PresencialProfissionais', {title: 'Por Video'})
    }

    const especialidades = [
        {id: 1, nome: 'Clinico geral'},
        {id: 2, nome: 'Dentista'},
        {id: 3, nome: 'Dermatologista'},
        {id: 4, nome: 'Ginecologia e Obstetricia'},
        {id: 5, nome: 'Exemplo'},
        {id: 6, nome: 'Exemplo'},
        {id: 7, nome: 'Exemplo'},
        {id: 8, nome: 'Exemplo'},
        {id: 9, nome: 'Exemplo'},
        {id: 10, nome: 'Exemplo'},
    ]

    function Especialidades({nomeEsp, idEsp}){
        return (
            <BoxEspecialidade>
                    <IconEspecialidade source={{
                    uri: 'data:image/png;base64,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',
                    }}/>
         
                <View style={{backgroundColor:'#fff', borderRadius: 50, flex: 1,justifyContent: 'center',lignItems: 'center'}}>
                    <Text style={{fontSize: 20, textAlign: "center"}}>{nomeEsp}</Text>
                </View>
                
            </BoxEspecialidade>
        )
    }

    return (
    <ScrollView>
        <Container>
            
                <Row>
                    <CircleNumber>
                        <Text style={{ color:'#fff', fontWeight: 'bold', fontSize: 18 }}>1</Text>
                    </CircleNumber>
                    <InicialText>Escolha a especialidade que você deseja:</InicialText>
                </Row>
                <Row style={{marginBottom:20}}>
                    <FlatList 
                    data={especialidades}
                    KeyExtractor={(item) => item.id}
                    renderItem={({item}) => <Especialidades nomeEsp={item.nome} idEsp={item.id}/>}
                    />
                </Row>
                <Row style={{justifyContent: 'center'}}>
                    <TouchableOpacity onPress={JornadaClick} style={{textAlign: 'center', backgroundColor:'#FFB203',padding:15, borderRadius:15}}>
                        <Text style={{ fontSize:20 , color:'#fff', fontWeight: 'bold'}}>Escolher Especialidades</Text>
                    </TouchableOpacity>
                </Row>

            
        </Container>
    </ScrollView>
    )
}