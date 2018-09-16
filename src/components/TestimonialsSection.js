import React from 'react';
import { Carousel, Grid, Row, Col } from 'react-bootstrap';
import TestimonialItem from './TestimonialItem';
import database from '../firebase/firebase';

class TestimonialsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonialData: undefined
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        try {
            let testimonialData = [];
            const snapshot = await database.ref('testimonialSection').once('value');
            snapshot.forEach((childSnapShot) => {
                testimonialData.push({
                    id: childSnapShot.key,
                    ...childSnapShot.val()
                });
            });
            this.setState(() => {
                return {
                    testimonialData: testimonialData
                }
            });
        } catch (error) {
            return console.log('Something wrong', error);
        }
    }

    render() {
        return (
            <section id="testimonials">
                <Grid>
                    <Row>
                        <h1>Client Reviews</h1>
                        <Col xs={12} md={6} mdOffset={3}>
                            {
                                this.state.testimonialData
                                &&
                                <Carousel className="client-review" controls={false}>
                                {
                                        this.state.testimonialData.map((data) => {
                                            return (
                                                <Carousel.Item className="client-review__slider" key={data.id}>
                                                    <TestimonialItem
                                                        details={data.content.customerTestimonial}
                                                        customerImage={data.content.customerImage}
                                                        customerName={data.content.customerName}
                                                    />
                                                </Carousel.Item>
                                            );
                                        })
                                    }
                                </Carousel>
                            }
                        </Col>
                    </Row>
                </Grid>
            </section>
        );
    }
}

export default TestimonialsSection;