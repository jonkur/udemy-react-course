import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option_field.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState( () => ({error}) );

        if (!error) {
            e.target.elements.option_field.value = '';
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option_field"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}