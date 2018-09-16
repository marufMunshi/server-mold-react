import React from 'react';
import HeroTextBox from './HeroTextBox';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';
import ParticlesAnimation from './ParticlesAnimation';

class HomePageHeader extends React.Component {
    render() {
        return (
            <header id="header">
                <NavMobile />
                <ParticlesAnimation />
                <NavDesktop />
                <HeroTextBox />
                <p className="contact"> <i className="ion-ios-telephone"></i> Call 01789-14470</p>
            </header>
        );
    }
};

export default HomePageHeader;