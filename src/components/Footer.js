import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer id="footer">
            <Grid>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="footer-links">
                            <a target="blank" href="https://www.facebook.com/">Facebook</a>
                            <a target="blank" href="https://www.twitter.com/">Twitter</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms Of Condition</a>
                        </div>
                    </Col>
                    <Col xs={12} mdOffset={4} md={2}>
                        <p><span>&copy;</span>Server Mold</p>
                    </Col>
                </Row>
            </Grid>
        </footer>
    );
};

export default Footer;