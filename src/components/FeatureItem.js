import React from 'react';

const FeatureItem = (props) => {
    return (
        <div className="features">
            <h2 className="features__title">
                <img src={props.featureImage} alt={props.featureTitle} />
                    {props.featureTitle}
            </h2>
            <p className="features__description">
                {props.featureDescription}
            </p>
        </div>
    );
};

export default FeatureItem;
