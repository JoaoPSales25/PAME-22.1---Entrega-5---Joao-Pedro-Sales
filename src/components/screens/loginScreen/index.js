import React from 'react'
import { LoginBox,  LoginContainer, UserText, UserInput, PasswordText, PasswordInput, LoginButton  } from './styles'

const LoginScreen = ({setActiveScreen}) => {
  return (
    <LoginContainer>
        <LoginBox>
            <UserText>Usuário: </UserText>
            <UserInput></UserInput>
            <PasswordText>Senha:</PasswordText>
            <PasswordInput type='password'></PasswordInput>
            <LoginButton onClick = {() => {setActiveScreen('Home')}}>Login</LoginButton>
        </LoginBox>
    </LoginContainer>
  )
}

export default LoginScreen