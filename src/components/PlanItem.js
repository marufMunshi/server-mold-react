import React from 'react';
import PlanButton from './PlanButton';

const PlanItem = (props) => {
    return (
        <div className="pricing-box">
            <p className="pricing-box__title">{props.title}</p>
            <p className="pricing-box__price">
                <span>$</span>{props.price}
            </p>
            <ul className="pricing-box__details">
                {props.details.map((detail) => {
                    return <li key={detail}>{detail}</li>
                })}
            </ul>

            <div className="pricing-box__button">
                <PlanButton havePlans={props.havePlans}/>
            </div>
        </div>
    );
};

export default PlanItem;