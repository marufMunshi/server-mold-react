import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PlanItem from './PlanItem';


const PlansSection = (props) => {
    return (
        <section id="plans">
            <h1>{props.title}</h1>

            <Grid>
                <Row>
                    {
                        props.plansData.map((data) => {
                            return (
                                <Col xs={12} md={6} key={data.id}>
                                    <PlanItem 
                                        title={data.content.title}
                                        price={data.content.price}
                                        details={data.content.details}
                                        havePlans={data.content.havePlans}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Grid>
        </section>
    );
};

export default PlansSection;