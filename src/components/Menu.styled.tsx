import styled from "styled-components";

export const Menu = styled.nav`
    ul {
        display: flex;
        list-style: none;
        padding: 0px;
        
        li > a{
            color: red;
        }
        li+li {
            margin-left: 20px;
        }
        
    }

`