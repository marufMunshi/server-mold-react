import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FeatureItem from './FeatureItem';
import database from '../firebase/firebase';

class FeaturesSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            featuresData: undefined
        }; 
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        try {
            let featuresData = [];
            const snapshot = await database.ref('featuresSection').once('value');
            snapshot.forEach((childSnapShot) => {
                featuresData.push({
                    id: childSnapShot.key,
                    ...childSnapShot.val()
                });
            });
            this.setState(() => {
                return {
                    featuresData: featuresData
                }
            });
        } catch (error) {
            return console.log('Something wrong', error);
        }
    }

    render() {
        return (
            <section id="features-section">
                <Grid>
                    <Row>
                        {
                            this.state.featuresData && this.state.featuresData.map((feature) => {
                                return (
                                    <Col xs={12} md={6} key={feature.id}>
                                        <FeatureItem
                                            featureImage={feature.content.image}
                                            featureTitle={feature.content.title}
                                            featureDescription={feature.content.description}
                                        />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Grid>
            </section>
        );
    }

}

export default FeaturesSection;