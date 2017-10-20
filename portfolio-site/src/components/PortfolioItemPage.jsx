import React from 'react';

const PortfolioItemPage = (props) => {
    return (
        <div>
            <h3>Item number {props.match.params.id}</h3>
            <p>This page depicts an item {props.match.params.id} in my portfolio. Amazing, isn't it?</p>
        </div>
    );
};

export default PortfolioItemPage;