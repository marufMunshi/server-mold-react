import React from 'react';

const TestimonialItem = (props) => {
    return (
        <blockquote className="client-review__quote">
            {props.details}
            <cite>
                <img src={props.customerImage} alt="" />{props.customerName}
            </cite>
        </blockquote>
    );
};

export default TestimonialItem;