import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
`

export const Link = styled.a`
    color: var(--Secundary-Color);
    font-size: 19px;
    font-weight: 600;
    text-decoration: none;

    text-align: left;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`