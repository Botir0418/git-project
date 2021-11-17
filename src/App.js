import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Header from './components/Header';
import Profile from './components/Profile';

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

const App = () => {
    return (
        <>
        <GlobalStyle />
        
            <Header />
            <Profile />
        </>
    );
};


export default App;
