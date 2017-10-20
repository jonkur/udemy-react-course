import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = (props) => {
    return (
        <div className="portfolio-main">
            <h3>My portfolio</h3>
            <p>Some references to my earlier works here.</p>
            <h3>My works:</h3>
            <div className="portfolio-grid">
                <Link to={props.location.pathname + "/1"}><div className="portfolio-reference">My work number 1</div></Link>
                <Link to={props.location.pathname + "/2"}><div className="portfolio-reference">My work number 2</div></Link>
                <Link to={props.location.pathname + "/3"}><div className="portfolio-reference">My work number 3</div></Link>
            </div>
        </div>
    );
};

export default PortfolioPage;