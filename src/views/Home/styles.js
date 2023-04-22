import React from 'react'
import styled from 'styled-components/native'




export const ButtonSairTeste = styled.TouchableOpacity`
    background-color: #1F2E65;
    width:30%;
    border-radius:30px;
    margin-left:auto;
    margin-right:auto;
`;

export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Area = styled.View`
    padding: 60px;
    width:100%;
`;

export const AreaButton = styled.View`
    margin-top:10px;
    margin-bottom:10px;
    padding:10px;
`;

export const AreaMeioCirculoInferior = styled.TouchableOpacity`
    background-color: ${props => (props.selecionar === 'por-video' && '#9FB517') || (props.selecionar === 'presencial' && '#F8B203') || (props.selecionar == '' ? "#BFBFBF" : "#BFBFBF")};
    width:100%;
    padding:70px;
    border-top-left-radius: 1000px;
    border-top-right-radius: 1000px;
    position:absolute;
    bottom:-35px;
`;

export const AreaMeioCirculoSuperior = styled.View`
    background-color:#1F2E65;
    width:100%;
    padding:40px;
    border-bottom-left-radius: 3000px;
    border-bottom-right-radius: 3000px;
    position:absolute;
    align-items:center;
    top:-35px;
`;

export const AreaSelectEstado = styled.View`
    width:80%;
    padding:5px;
    background-color:#fff;
    border:1px solid #1F2E65;
    border-radius:30px;
    margin-left:auto;
    margin-right:auto;
`;

export const ButtonPorvideo = styled.TouchableOpacity`
    height:60px;
    background-color:${props => props.selecionar == 'por-video' ? "#9FB517" : "#fff"};
    border-radius:30px;
    border: 3px solid #9FB517;
    justify-content:center;
    align-items:center;
    margin:5px;

`;

export const ButtonPresencial = styled.TouchableOpacity`
    height:60px;
    background-color:${props => props.selecionar == 'presencial' ? "#F8B203" : "#fff"};
    border-radius:30px;
    border: 3px solid #F8B203;
    justify-content:center;
    align-items:center;
    margin:5px;
`;

export const BoxConsultasAgendadas = styled.View`
background-color:#9FB517;
    width:100%;
    padding:20px;
    border-radius:5px;
`



export const InicialText = styled.Text`
    font-size:18px;
    color:#808080;
    text-align: center
`;  

export const ImagemLogoPrincipal = styled.Image`
    margin-top:30px;
    height: 50px;
    width: 180px;
    
`;
