import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer id="footer">
            <Grid>
                <Row>
                    <div className="footer-img">
                        <img src="/images/logo.png" alt="Server Mold" />
                    </div>
                    <Col xs={12} md={6} mdOffset={3}>
                        <div className="footer-div">
                            <h1 className="footer-div__title">Contact Us</h1>
                            <div className="footer-div__details">
                                <p><i className="ion-ios-telephone"></i> <span>+922487994</span></p>
                                <p><i className="ion-chatbubble-working"></i><span>servermold@example.com</span></p>
                                <p>
                                    <i className="ion-social-facebook facebook-color">
                                    </i>
                                    <a className="facebook" href="#">facebook</a>
                                    <i className="ion-social-twitter twitter-color">
                                    </i>
                                    <a href="#">twitter</a>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
            <div className="copyright">
                Copyright © 2018 by Server Mold. All rights reserved.
                </div>
        </footer>
    );
};

export default Footer;