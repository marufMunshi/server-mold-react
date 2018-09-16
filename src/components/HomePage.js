import React from 'react'
import HomePageHeader from './HomePageHeader';
import FeaturesSection from './FeaturesSection';
import CustomerInNumbers from './CustomerInNumbers';
import PlansSection from './PlansSection';
import DomainSearch from './DomainSearch';
import TestimonialsSection from './TestimonialsSection';
import Footer from './Footer';
import database from '../firebase/firebase';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plansData: undefined
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        try {
            let plansData = [];
            const snapshot = await database.ref('plansSection').once('value');
            snapshot.forEach((childSnapShot) => {
                plansData.push({
                    id: childSnapShot.key,
                    ...childSnapShot.val()
                });
            });
            this.setState(() => {
                return {
                    plansData: plansData
                }
            });
        } catch (error) {
            return console.log('Something wrong', error);
        }
    }

    render() {
        return (
            <div>
                <HomePageHeader />
                <FeaturesSection />
                <CustomerInNumbers />
                { 
                    this.state.plansData 
                    && 
                    <PlansSection title={`Our Hosting Services`} plansData={this.state.plansData}/> 
                }
                <DomainSearch />
                <TestimonialsSection />
                <Footer />
            </div>
        );
    }
}

export default HomePage;