
import React, { useState } from 'react'
import { Container } from './styles';
import LoginScreen from './components/screens/loginScreen';
import Home from './components/screens/homeScreen';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';

function App() {

  const [activeScreen, setActiveScreen] = useState("Login");

  const getCorrectScreen = (screen) => {
    switch(screen) {
        case "Login" :
            return <LoginScreen setActiveScreen = {setActiveScreen} activeScreen= {activeScreen}/>
        case "Home" :
            return <Home setActiveScreen = {setActiveScreen} activeScreen= {activeScreen} />
        default:
            return <LoginScreen/>
    }
}

  return (
    <ThemeProvider theme = {theme}>
      <Container>
        {getCorrectScreen(activeScreen)}
      </Container>
      <GlobalStyle/>
    </ThemeProvider>
  )
}



export default App;
