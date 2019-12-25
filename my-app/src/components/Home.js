import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends React.Component{

    render(){
        return(
            <Container>
                <Jumbotron>
                    <h2>Welcome To Demo Project</h2>
                    <p>This is my demo react-bootstrap site</p>
                </Jumbotron>
                <Link to="/about">
                    <Button bsStyle="primary">About Us</Button>
                </Link>
            </Container>
        )
    }
}