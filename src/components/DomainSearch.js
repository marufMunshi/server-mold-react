import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class DomainSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            domain: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const domain = e.target.value;
        this.setState(() => {
            return {
                domain
            };
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        location.replace(`https://client.servermold.com/cart.php?a=add&domain=register&query=${this.state.domain}`)
    }

    render() {
        return (
            <section id="domain-search">
                <Grid>
                    <Row>
                        <div className="search-area">
                            <Col sm={12} md={4}>
                                <h3 className="search-area__title">Domain Search</h3>
                            </Col>
                            <div className="search-area__form">
                                <form onSubmit={this.handleSubmit}>
                                    <Col sm={8} md={5} lg={6}>
                                        <input 
                                            type="text" 
                                            name="domain" 
                                            value={this.state.domain} 
                                            placeholder="Domain Search"
                                            onChange={this.handleChange}
                                        >

                                        </input>
                                    </Col>
                                    <Col sm={4} md={3} lg={2}>
                                        <button type="submit" className="btn search-btn">Search</button>
                                    </Col>
                                </form>
                            </div>
                        </div>
                    </Row>
                </Grid>
            </section>
        );
    }
}

export default DomainSearch;