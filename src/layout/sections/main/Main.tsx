import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/avatar.webp"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import AbstractMain from "../../../assets/images/AbstractMain.svg"
import { font } from "../../../styles/Common";



export const Main = () => {
    return (
        <StyledMain id="0">
            <Container>
                <FlexWrapper justfy="space-between" wrap="wrap" align="center" tabletJustify="center">
                    <TextWrapper>
                        <MainText>Hi 👋,</MainText>
                        <MainText>My name is</MainText>
                        <MainName>PavanMG</MainName>
                        <MainTitle>I build things for web</MainTitle>
                    </TextWrapper>
                    <PhotoWrapper/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    display: flex;
    height: 80vh;
    overflow: hidden;
`

const TextWrapper = styled.div`
    max-width: 636px;
    width: 100%;
    ${font({weight: 700, Fmax: 58, Fmin: 36})};
    color: ${theme.colors.font.darkTitle};
    
`

const MainName = styled.h2`
    /* font-size: 5.8rem; */
    font-size: inherit;
    background: ${theme.colors.font.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const MainTitle = styled.h1`
    font-size: inherit;
`

const MainText = styled.p`
    font-size: inherit;
`

const PhotoWrapper = styled.div`
    position: relative;
    border-radius: 230px;
    width: 350px;
    height: 350px;
    background-image: url(${photo});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    &::before {
        content: "";
        position: absolute;
        top: -9px;
        bottom: -9px;
        right: -9px;
        left: -9px;
        background: ${theme.colors.font.gradient};
        border-radius: 230px;
        z-index: -1;
    }

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 770px;
        height: 770px;
        background-image: url(${AbstractMain});
        z-index: -2;
    }


    @media ${theme.media.tablet} {
        width: 300px;
        height: 300px;
        &::after {
            display: none;
        }
    }

    @media ${theme.media.mobile} {
        width: 250px;
        height: 250px;
    }
`

