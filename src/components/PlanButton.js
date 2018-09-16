import React from 'react';
import { Link } from 'react-router-dom';


const PlanButton = (props) => {

    if (props.havePlans === 'wordPress') {
        return (
            <Link className="btn pricing-box__btn" to='/wordPress-plans'>
                See Plans
            </Link>
        );
    } else if (props.havePlans === 'cloud') {
        return (
            <Link className="btn pricing-box__btn" to='/cloud-plans'>
                See Plans
        </Link>
        );
    } else {
        return (
            <a className="btn pricing-box__btn">
                Get Started
            </a>
        );
    }
};

export default PlanButton;