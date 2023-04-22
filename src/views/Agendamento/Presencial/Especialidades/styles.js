import React from 'react'
import styled from 'styled-components/native'


export const Container = styled.SafeAreaView`
background-color: #fff;
flex: 1;
flex-direction: column;
`

export const InicialText = styled.Text`
font-size:23px;
font-weight:bold;
color:#808080;
flex: 1;
margin-top:10px;
`

export const CircleNumber = styled.View`

background-color:#9FB517;
width: 45px;
height: 45px;
margin: 15px;
border-radius: 50;
justify-content: center;
align-items: center;
`



export const Box = styled.View`
flex: 1;
background-color: ${props => (props.color === 1 && '#9FB517') || (props.color === 2 && '#F8B203') || (props.color == 3 ? "#BFBFBF" : "#BFBFBF")};
width: 50px;
height: 50px;
margin: 5px;
` 
export const Row = styled.View`
flex-direction: row;
padding: 0 20px 0 20px;
`

export const BoxEspecialidade = styled.TouchableOpacity`
background-color:#FFB203;
height:75px;
margin:5px;
border-radius:100px;
padding:3px;
flex-direction: row;

`

export const IconEspecialidade = styled.Image`
width: 35px;
height: 40px;
margin:15px;
`
