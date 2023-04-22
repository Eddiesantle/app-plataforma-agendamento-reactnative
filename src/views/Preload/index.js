import React, {useEffect, useContext} from 'react'
import { Text } from 'react-native'
import {Container, LoadingIcon,ImagemLogoPrincipal} from './styles'

import { UserContext } from '../../contexts/UserContext'
import Api from '../../api'

import AsyncStorage from '@react-native-community/async-storage'
import {useNavigation} from '@react-navigation/native'

import PreloadLogo from '../../assets/preload-logo.svg'

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext)
    const Navigation = useNavigation()

    // Execulta após carregar 
    useEffect(() =>{
        const checktoken = async () => {
            const token = await AsyncStorage.getItem('token')
            if(token){
                
                let res = await Api.checkToken(token)
                if(res.token){
                    //Validar o token
                    //alert('Já esta logado definir rota')

                    //alert('Deu certo')
                    await AsyncStorage.setItem('token', res.token)

                    userDispatch({
                        type: 'setNome',
                        payload: {
                            nome: res.data.name
                        }
                    })

                    Navigation.reset({
                        routes:[{name:'Home'}]
                    })

                }else{
                    // Não possui token direciona para realizar login
                    Navigation.navigate('SignIn')
                }

            }else{
                // Não possui token direciona para realizar login
                Navigation.navigate('SignIn')
            }

        }
        checktoken()
    },[])


    return (
        <Container>
            <ImagemLogoPrincipal source={require("./../../assets/logo-principal.png")}/>
            <LoadingIcon size="large" color="FFFFFFF"/>
        </Container>
    )
}
