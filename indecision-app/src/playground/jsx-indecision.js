// For reference, how rerendering of components work behind the scenes (more or less)

console.log('App.js is running!')

const app = {
    title: 'Indecision App Title',
    subtitle: 'This is some info text for the Indecision App. Just some info, nothing more, nothing less.',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        reRenderDOM();
    }
};

const removeAllOptions = () => {
    app.options = [];
    reRenderDOM();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');
const reRenderDOM = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            { app.subtitle && <p>{app.subtitle}</p> }
            <p>{ (app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAllOptions}>Remove all</button>
            <ol>
                {
                    app.options.map((option, i) => <li key={i}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

reRenderDOM();