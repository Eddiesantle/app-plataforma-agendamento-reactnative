import React, {useState, useContext} from 'react';
import {Text} from 'react-native';
import {UserContext} from '../../contexts/UserContext';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import {
    Container,
    Area,
    AreaButton,
    ButtonPorvideo,
    ButtonPresencial,
    InicialText,
    AreaMeioCirculoInferior,
    AreaMeioCirculoSuperior,
    AreaSelectEstado,
    ImagemLogoPrincipal,
    ButtonSairTeste,
} from './styles';

import PreloadLogo from '../../assets/preload-logo.svg';

export default () => {
    const {state: user} = useContext(UserContext);
    // Declarar uma nova variável de state, na qual chamaremos de "count"
    const [jornada, setPorVideo] = useState('');

    const Navigation = useNavigation();
    const logoutClick = async () => {
        await AsyncStorage.removeItem('token');

        Navigation.reset({
            routes: [{name: 'Preload'}],
        });
    };

    const JornadaClick = () => {
        if (jornada != '') {
            // alert(`Jornada escolhida para agendamento ${jornada}`)

            if (jornada == 'por-video') {
                Navigation.navigate('PorVideo', {title: 'Por Video'});
            } else if (jornada == 'presencial') {
                Navigation.navigate('Presencial', {title: 'Presencial'});
            }
        } else {
            alert('Escolha como deseja agendar');
        }
    };

    return (
        <Container>
            <AreaMeioCirculoSuperior>
                <ImagemLogoPrincipal
                    source={require('./../../assets/logo-principal.png')}
                />

                {user.nome != '' ? (
                    <Text
                        style={{marginTop: 10, fontSize: 18, color: '#cbe602'}}
                    >
                        Olá {user.nome}
                    </Text>
                ) : (
                    false
                )}
            </AreaMeioCirculoSuperior>

            <Area>
                <InicialText style={{marginTop: 20}}>
                    Olá, vamos encontrar um profissional de saúde para você.
                </InicialText>

                <InicialText style={{fontWeight: 'bold'}}>
                    Qual tipo de consulta deseja?
                </InicialText>

                <AreaButton>
                    <ButtonPorvideo
                        selecionar={jornada}
                        onPress={() => setPorVideo('por-video')}
                    >
                        <Text>Por Vídeo</Text>
                    </ButtonPorvideo>

                    <ButtonPresencial
                        selecionar={jornada}
                        onPress={() => setPorVideo('presencial')}
                    >
                        <Text>Presencial</Text>
                    </ButtonPresencial>
                </AreaButton>

                <InicialText>
                    Para continuar digite seu Estado ou ative o GPS nas
                    configurações:
                </InicialText>

                <AreaButton>
                    <AreaSelectEstado>
                        <InicialText>Escolha um estado</InicialText>
                    </AreaSelectEstado>
                </AreaButton>

                {user.nome != '' ? (
                    <ButtonSairTeste onPress={logoutClick}>
                        <Text
                            style={{
                                fontSize: 15,
                                color: '#fff',
                                textAlign: 'center',
                                fontWeight: 'bold',
                            }}
                        >
                            Sair
                        </Text>
                    </ButtonSairTeste>
                ) : (
                    false
                )}
            </Area>

            <AreaMeioCirculoInferior
                selecionar={jornada}
                onPress={JornadaClick}
            >
                <Text
                    style={{
                        fontSize: 20,
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    Realizar consulta
                </Text>
            </AreaMeioCirculoInferior>
        </Container>
    );
};
