import React from 'react';
import { Link } from 'react-router-dom';
import AllPageHeader from './AllPageHeader';
import Footer from './Footer';

const NotFoundPage = () => {
    return (
        <div>
            <AllPageHeader />

            <section id="not-found-section">
                <div className="image-404">
                    <img src="/images/map.png" alt="404"/>
                </div>

                <div className="not-found-description">
                    <h1 className="not-found-description__title">
                        Oops! 
                    </h1>
                    <p className="not-found-description__link" ><Link to="/">Go Home</Link></p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default NotFoundPage;