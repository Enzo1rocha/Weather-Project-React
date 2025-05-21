import styled from "styled-components";
import Button from "../../components/Button";


export const Container = styled.div `
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-rows: 65% 0% 24% 0%;
    width: 100vw;
    height: 100vh;
`

export const Img = styled.img `
    height: 80vh;
`

export const Title = styled.h1 `
    text-align: center;
    color: var(--Secundary-Color);
    font-weight: 700;
    text-shadow: 1px 3px 4px rgba(0,0,0,0.3);
    font-size: 60px;
`

export const Subtitle = styled.p `
    font-size: 19px;
    text-align: center;
`

export const CustomButton = styled(Button) `
    width: 400px;
    margin: auto;
    position: relative;
    bottom: 25px;
`


