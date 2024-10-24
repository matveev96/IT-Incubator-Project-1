import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { Card } from "./card/Card";
import { SectionText } from "../../../components/SectionText";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import AbstractAbout from "../../../assets/images/AbstractAbout.svg"

export const About = () => {
    return (
            <StyledAbout id="1">
                <Container>
                    <FlexWrapper>
                        <AboutInfo>
                            <StyledSection>
                                <Title>About Me</Title>
                                <SectionText>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</SectionText>
                            </StyledSection>

                            <StyledSection>
                                <Title>Work Experience</Title>
                                <Card margin="30px" position="Junior Web Developer" occupation="Full Time" organization="Dr. Rajkumar’s Learning App" city="Bengaluru" period="Sep 2021 - Dec 2021"/>
                                <Card margin="30px" position="Web Development Intern" occupation="Internship" organization="IonPixelz Web Solutions" city="Bengaluru" period="Sep 2021 - Dec 2021"/>
                                <Card position="SEO / SEM Specialist" occupation="Internship" organization="HAAPS" city="Bengaluru" period="Sep 2021 - Dec 2021"/>
                            </StyledSection>

                            <StyledSection>
                                <Title>Education</Title>
                                <Card position="Bachelor in Electronics & Communication" occupation="Full Time" organization="Bangalore Instutute of Technology" display="none" period="Aug 2015 - Dec 2020"/>
                            </StyledSection>
                        </AboutInfo>                        
                    </FlexWrapper>
                </Container>
            </StyledAbout>
    )
}


const StyledAbout = styled.section`
    position: relative;

    &::after {
        content: "";
        top: -5%;
        right: 0;
        display: block;
        width: 591px;
        height: 1019px;
        background-image: url(${AbstractAbout});
        background-repeat: no-repeat;
        z-index: -19;

        position: absolute;
    }

`

const AboutInfo = styled.div`
    max-width: 710px;
    width: 100%;
    overflow: hidden;

`

const StyledSection = styled.div`
    margin-bottom: 38px;
`

const Title = styled.h3`
    font-weight: 700;
    font-size: 4.2rem;
    color: ${theme.colors.font.darkTitle};
    margin-bottom: 3.8rem;
`