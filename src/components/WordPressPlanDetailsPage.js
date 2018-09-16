import React from 'react';
import AllPageHeader from './AllPageHeader';
import PlansSection from './PlansSection';
import Footer from './Footer';
import database from '../firebase/firebase';

class WordPressPlanDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wordPressPlansData: undefined
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        try {
            let wordPressPlansData = [];
            const snapshot = await database.ref('wordPressPlanDetails').once('value');
            snapshot.forEach((childSnapShot) => {
                wordPressPlansData.push({
                    id: childSnapShot.key,
                    ...childSnapShot.val()
                });
            });
            this.setState(() => {
                return {
                    wordPressPlansData: wordPressPlansData
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
                        this.state.wordPressPlansData 
                        &&
                        <PlansSection title={`WordPress Plans`} plansData={this.state.wordPressPlansData}/>
                    }
                </section>
                <Footer />
            </div>
        );
    }
};

export default WordPressPlanDetailsPage;