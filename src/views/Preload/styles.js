import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #1F2E65;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top:50px;
`;

export const ImagemLogoPrincipal = styled.Image`
    resizeMode: contain;
    height: 100px;
    width: 200px;
    
`;