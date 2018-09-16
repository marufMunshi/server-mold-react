import React from 'react';
import AllPageHeader from './AllPageHeader';
import PlansSection from './PlansSection';
import Footer from './Footer';
import database from '../firebase/firebase';

class CloudPlanDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cloudPlansData: undefined
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        try {
            let cloudPlansData = [];
            const snapshot = await database.ref('cloudPlanDetails').once('value');
            snapshot.forEach((childSnapShot) => {
                cloudPlansData.push({
                    id: childSnapShot.key,
                    ...childSnapShot.val()
                });
            });
            this.setState(() => {
                return {
                    cloudPlansData: cloudPlansData
                }
            });
        } catch (error) {
            return console.log('Something wrong', error);
        }
    }

    render() {
        return (
            <div>
                <AllPageHeader />
                <section id="plan-details">
                    {
                        this.state.cloudPlansData 
                        &&
                        <PlansSection title={`Cloud Hosting Plans`} plansData={this.state.cloudPlansData }/>
                    }
                </section>
                <Footer />
            </div>
        );
    }
};

export default CloudPlanDetailsPage;