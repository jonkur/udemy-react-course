'use strict';

console.log('Build it app started!');

var msgVisible = false;
var toggleMsg = function toggleMsg() {
    msgVisible = !msgVisible;
    render();
};

var appRoot = document.getElementById('app');
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle App'
        ),
        React.createElement(
            'p',
            null,
            'Click on the button below to show or hide the message!'
        ),
        React.createElement(
            'button',
            { onClick: toggleMsg },
            msgVisible ? 'Hide Secret' : 'Show Secret'
        ),
        msgVisible && React.createElement(
            'p',
            null,
            'Psst... It\'s time to call it a day.'
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
