import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";

function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>{props.leftBtnText}</LeftButton>
                        {props.rightBtnText && (
                            <RightButton>{props.rightBtnText}</RightButton>
                        )}
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg"></DownArrow>
            </Buttons>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("/images/model-s.jpg");
    background-image: ${(props) => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItemText = styled.div`
    text-align: center;
    line-height: 40px;
    padding-top: 15vh;
    h2 {
        font-size: 2.5rem;
        font-family: "Gotham", sans-serif;
    }
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
    display: flex;
    font-family: "Gotham", sans-serif;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    font-family: "Gotham", sans-serif;
    width: 256px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 108px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    font-weight: 400;
`;

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`;

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`;

export default Section;
