import React, {useState, useContext} from 'react'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import { UserContext } from '../../contexts/UserContext'

import {Container, 
    ImagemLogoPrincipal, 
    InputArea, 
    CustomButton, 
    CustomButtonText, 
    SingMessageButton, 
    SingMessageButtonText, 
    SingMessageButtonTextBold
} from './styles'

import Api from '../../api'

import SignInput from '../../components/SignInput'

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext)
    const navigatin = useNavigation()

    const [nameFild, setNameFild] = useState('')
    const [emailFild, setEmailFild] = useState('')
    const [passwordFild, setPasswordFild] = useState('')


    const handleSignClick = async () => {
        if(emailFild != '' && passwordFild != '' && nameFild != ''){

            let json = await Api.signUp(nameFild,emailFild, passwordFild)

            //console.log(json)

            if(json.token){
                //alert('Deu certo')
                await AsyncStorage.setItem('token', json.token)

                userDispatch({
                    type: 'setNome',
                    payload: {
                        nome: json.data.name
                    }
                })

                navigation.reset({
                    routes:[{name:'Home'}]
                })



            } else {
                alert('E-mail e/ou senha errados!')
            }

        }else{
            alert('Preencha os campos')
        }
    }


    const handleMessageButtonClick = () => {
        navigatin.reset({
            routes: [{name: 'SignIn'}]
        })
    }

   

    return (
        <Container>

            <ImagemLogoPrincipal source={require("./../../assets/logo-principal.png")}/>

            <InputArea>

                <SignInput 
                    placeholder="Digite seu Nome"
                    value={nameFild}
                    onChangeText={t=>setNameFild(t)}
                />

                <SignInput 
                    placeholder="Digite seu E-mail"
                    value={emailFild}
                    onChangeText={t=>setEmailFild(t)}
                />

                <SignInput 
                    placeholder="Digite sua senha"
                    value={passwordFild}
                    onChangeText={t=>setPasswordFild(t)}
                    password={true}
                />



                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            
            </InputArea>

            <SingMessageButton onPress={handleMessageButtonClick}>
                <SingMessageButtonText>Já possui uma conta?</SingMessageButtonText>
                <SingMessageButtonTextBold>Faça Login</SingMessageButtonTextBold>
            </SingMessageButton>

        </Container>
    )
}