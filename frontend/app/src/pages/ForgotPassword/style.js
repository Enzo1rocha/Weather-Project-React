import styled from "styled-components";

export const Container = styled.div `
    display: grid;
    grid-template-columns: 53% 47%;
    min-height: 100vh;
    max-width: 100vw;
    
    background-color: var(--Background-Color);
`

export const ContainerWithImage = styled.picture `
    width: auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const image = styled.img `
    height: 88%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 45px;
`

export const containerInput_Button = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 20px;
    width: auto;
`

export const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 60px;
    width: 500px;
    padding: 50px 20px;

    justify-content: center;
    margin-bottom: 40px;
`


export const Title = styled.h1 `
    font-size: 55px;
    color: var(--Primary-Color);
    font-weight: 700;
    letter-spacing: normal;
    line-height: 55px;
`

export const BackTo = styled.a `
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: var(--Secundary-Color);

    &:hover {
        text-decoration: underline;
    }
`