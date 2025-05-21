import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div `
    position: relative;
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
    align-items: center;
    width: 100%;
    background-color: var(--Secundary-Color);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`

export const Logo = styled.a `
    color: var(--Background-Color);
    font-size: 30px;
    font-weight:600;
    text-decoration: none;
    cursor: pointer;
`

export const Nav = styled.div `
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
`


export const NavMobile = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 40px;
    background-color: var(--Background-Color);
    border-radius: 50px;
    position: relative;

    svg {
        color: var(--Secundary-Color);
        font-size: 17px;
    }
`

export const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: fixed;
    top: 55px;
    left: 0;
    padding: 10px 0px;


    overflow: hidden;
    transition: 0.4s ease;

    background-color: var(--Secundary-Color);

    transition: all 0.4s ease;


    height: 100vh;
    width: 100vw;
`

export const NavItem = styled.a `
    font-size: 17px;
    text-decoration: none;
    color: var(--Background-Color);
    font-weight: 600;
    padding: 4px 8px;

    transition: 0.2s ease-out;
    

    &:hover {
        text-decoration: underline;
        background-color: var(--Background-Color);
        color: var(--Secundary-Color);
        border-radius: 5px;
    }
`

export const NavItemMobile = styled.a `
    font-size: 17px;
    text-decoration: none;
    color: var(--Background-Color);
    font-weight: 600;
    padding: 4px 8px;

    border-radius: 5px;


    &:hover {
        background-color: var(--Background-Color);
        color: var(--Secundary-Color);
    }
`


export const SearchBar = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    gap: 5px;
    width: 250px;
    height: 30px;
    padding: 14px;
    border-radius: 50px;
    cursor: pointer;

    transition: 0.1s ease-out;

    svg {
        color: var(--Secundary-Color);
        font-size: 17px;
    }

    @media (max-width: 1024px) {
        width: 40px;
        height: 30px;
        padding: 5px;

        &:hover {
                background-color: var(--Secundary-Color);
                border: 2px solid var(--Background-Color);

            svg {
                color: var(--Background-Color);
            }
        }
    }
`

export const InputSearchBar = styled.input `
    width: 100%;
    font-size: 14px;
    border: none;

    &:focus {
        outline: none;
    }
`