console.log('Build it app started!');

let msgVisible = false;
const toggleMsg = () => {
    msgVisible = !msgVisible;
    render();
};

const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle App</h1>
            <p>Click on the button below to show or hide the message!</p>
            <button onClick={toggleMsg}>{msgVisible ? 'Hide Secret' : 'Show Secret'}</button>
            {msgVisible && <p>Psst... It's time to call it a day.</p>}
        </div>
    )
    ReactDOM.render(template, appRoot);
};

render();