import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import doggoImg from '../assets/doggo.jpg';

const Styles = styled.div`
    .jumbo{
        background : url(${doggoImg}) no-repeat fixed bottom;
        background-size : cover;
        color : #ccc;
        height : 200px;
        background-position : relative;
        z-index : -2;
    }

    .overlay {
        background-color : black;
        opacity : 0.6;
        position : absolute;
        top : 0;
        left : 0;
        right : 0;
        bottom : 0;
        z-index : -1;
    }
`;

export const Jumbotron = () => {
    return(
        <Styles>
            <Jumbo fluid className="jumbo">
                {/* <div className="overlay"></div> */}
                <Container>
                    <h1>Welcome</h1>
                    <p>This is a cool demo project I made with react-bootstrap</p>
                </Container>
            </Jumbo>
        </Styles>
    );
}