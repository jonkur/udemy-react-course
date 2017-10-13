class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    
    render() {
        return ( 
            <div>
                <h1>Visibility Toggle App</h1>
                <p>Click on below to show or hide the secret...</p>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide' : 'Show'}</button>
                {this.state.visibility && (<p>This is a secret!</p>)}
            </div>
        )
    }
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// Old way to do the same with no React components, left here for reference only

// console.log('Build it app started!');

// let msgVisible = false;
// const toggleMsg = () => {
//     msgVisible = !msgVisible;
//     render();
// };

// const appRoot = document.getElementById('app');
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle App</h1>
//             <p>Click on the button below to show or hide the message!</p>
//             <button onClick={toggleMsg}>{msgVisible ? 'Hide Secret' : 'Show Secret'}</button>
//             {msgVisible && <p>Psst... It's time to call it a day.</p>}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// };

// render();