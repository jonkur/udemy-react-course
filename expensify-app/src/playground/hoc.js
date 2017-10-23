// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdmingWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please do not share!</p> }
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <WrappedComponent {...props}/>}
            {!props.isAuthenticated && <p>Please log in to view the info.</p>}
        </div>
    );
};

// requireAuthentication

const AdminInfo = withAdmingWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="Details are supposed to be here." />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Details are supposed to be here." />, document.getElementById('app'));