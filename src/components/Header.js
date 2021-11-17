import React from 'react';
import logo from '../img/GitHub-Mark-Light-64px.png';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
background-color: #000;
display: flex;
justify-content: center;
align-items: center;
color: white;
`

const Logo = styled.img`
height: 64px;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo src={logo} alt='logo'/>
            <h1>My GitHub Portfolio</h1>
        </HeaderWrapper>
    );
};


export default Header;