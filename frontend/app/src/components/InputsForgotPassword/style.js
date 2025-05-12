import styled from "styled-components"

export const containerInput = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    background-color: transparent;
    height: min-content;
    padding: 10px 20px;
    border-radius: 15px;
    gap: 10px;
    border: 1px solid black;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
`

export const label = styled.label `
    font-size: 20px;
    color: var(--Primary-Color);
    font-weight: 600;;
    background-color: transparent;
    white-space: nowrap;
`

export const inputField = styled.input `
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 20px;
    font-weight: 600;
    color: var(--Primary-Color);
`