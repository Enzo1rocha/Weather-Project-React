import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 55% 45%;
    width: 100vw;
    height: 100vh;
    align-items: center;
`

export const ContainerWithImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
    width: auto;
`

export const ImageContent = styled.img`
    z-index: 1;
    height: 72vh;
`

export const FormPasswordUpdate = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 35px;
    width: 34vw;
    z-index: 1;
`

export const FormTitle = styled.h1`
    font-size: 50px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.13);
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 48px;
    color: var(--Primary-Color);
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
