import React from 'react';
import { Col, Row } from 'reactstrap';
import img404 from '../Images/2.png'
const PageNotFound = () => {
    return (
        <div className="col-md-8 mx-auto my-0 text-center mt-8 ">
            <Row>
                <Col lg={6}> 
                <div className="msg">
                    <h2 className="text-info ">ERROR 404</h2>
                    <h2 className="text-info ">PAGE NOT FOUND!</h2>
                </div>
                </Col>
                <Col lg={6}><img src={img404} className="my-img"  /></Col>
            </Row>

        </div>
    );
}

export default PageNotFound;
