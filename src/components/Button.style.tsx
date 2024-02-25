import styled from "styled-components";
import {MyAnimaytions} from "./animations/Animations";


export const StyledBtn = styled.button`
    border: none;
    background-color: #e00e0e;
    padding: 5px 10px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: #1bd7c7;
    }

`
export const  SuperBtn = styled(StyledBtn)`
    border-radius: 10px;
    background-color: #fff65a;
    color: black;
    &:hover{
        animation: ${MyAnimaytions} 2s ease-in-out ;
    }
    
    
`