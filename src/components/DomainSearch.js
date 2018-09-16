import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const DomainSearch = () => {
    return (
        <section id="domain-search">
            <Grid>
                <Row>
                    <div className="search-area">
                        <Col sm={12} md={4}>
                            <h3 className="search-area__title">Domain Search</h3>
                        </Col>
                        <div className="search-area__form">
                            <form>
                                <Col sm={8} md={5} lg={6}>
                                    <input type="text" placeholder="Domain Search"></input>
                                </Col>
                                <Col sm={4} md={3} lg={2}>
                                    <button className="btn search-btn">Search</button>
                                </Col>
                            </form>
                        </div>
                    </div>
                </Row>
            </Grid>
        </section>
    );
};

export default DomainSearch;