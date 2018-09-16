import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import database from '../firebase/firebase';

class HeroTextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: undefined,
            subTitle: undefined,
            details: undefined
        };
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        try {
            const snapshot = await database.ref('heroSection').once('value');
            const val = snapshot.val();
            this.setState(() => {
                return {
                    title: val.title,
                    subTitle: val.subTitle,
                    details: val.details
                }
            });
        } catch (error) {
            return console.log('Something wrong', error);
        }
    }

    render() {
        return (
            <div className="hero-text-box">
                { this.state.title &&  <h1 className="hero-text-box__title">{this.state.title}</h1> }
                { this.state.subTitle && <p className="hero-text-box__sub-title" >{this.state.subTitle}</p>}
    
                <ul className="hero-text-box__details">
                    {
                        this.state.details && this.state.details.map((detail) => {
                            return <li key={detail}>{detail}</li>
                        })
                    }
                </ul>
                <AnchorLink className="btn hero-btn" offset='50' href="#plans">Get Started Now</AnchorLink>
            </div>
        );
    }
}

export default HeroTextBox;