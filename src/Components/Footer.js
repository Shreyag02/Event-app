import React from 'react';
import {Container} from 'reactstrap';

const Footer = () => {
    return (
        <Container fluid tag="footer" 
         className="text-center bg-info text-white fixed-bottom p-3 mt-3 border-top border-white">
            &#169; Copyright 2020
        </Container>
    );
}

export default Footer;