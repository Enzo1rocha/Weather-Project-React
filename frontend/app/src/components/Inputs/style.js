import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    border-bottom: 3.2px solid var(--Secundary-Color-Transparent);

    padding-bottom: 15px;
    justify-content: center;
    align-items: center;
`

export const Label = styled.label`
    color: var(--Secundary-Color-Transparent);
    font-size: 20px;
    font-weight: 600;
`

export const Field = styled.input`
    width: 100%;
    height: 50px;
    padding: 10px;
    border: none;

    font-size: 20px;
    font-weight: 600;
    color: var(--Secundary-Color-Transparent);
    background-color: transparent;
    

    &:focus {
        outline: none;
    }
`