import React from 'react'
import styled from 'styled-components/native'


export const Container = styled.SafeAreaView`
    background-color: #1F2E65;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ImagemLogoPrincipal = styled.Image`
    resizeMode: contain;
    height: 100px;
    width: 200px;
    
`;

/* ImagemLogoPrincipal, 
    InputArea, 
    CustomButton, 
    CustomButtonText, 
    SingMessageButton, 
    SingMessageButtonText, 
    SingMessageButtonTextBold */

export const InputArea = styled.View`
width:100%;
    padding:40px;
`

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #6e9d00;
    border-radius:30px;
    justify-content:center;
    align-items:center;
`
export const CustomButtonText = styled.Text`
    font-size:18px;
    color:#fff;
`

export const SingMessageButton = styled.TouchableOpacity`
    flex-direction:row;
    justify-content:center;    
    margin-top:50px;
    margin-bottom:20px;
`
export const SingMessageButtonText = styled.Text`
    font-size:16px;
    color:#83a4c5;
`
export const SingMessageButtonTextBold = styled.Text`
    font-size:16px;
    color:#6f8ba7;
    font-weight:bold;
    margin-left:5px;
`

