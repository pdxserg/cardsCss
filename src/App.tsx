import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn, SuperBtn} from "./components/Button.style";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";

function App() {
    return (
        <div className="App">
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Menu>
                <ul>
                    <li><a href="">menu item1</a></li>
                    <li><a href="">menu item2</a></li>
                    <li><a href="">menu item3</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn as={Link} href={"#"} >Link</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperBtn>Hello2</SuperBtn>
            </Box>
        </div>
    );
}




const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    ${Link} {
    cursor: zoom-in;
}
    @media screen and (max-width: 800px)  {
    flex-direction: column;
    }
`




export default App;
