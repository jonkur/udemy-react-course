import React from 'react';
import Modal from 'react-modal';

export default class OptionModal extends React.Component {
    state = {
        isOpen: false,
        selectedOption: undefined
    }

    componentDidUpdate() {
        if (this.props.selectedOption !== this.state.selectedOption) {
            this.setState({
                isOpen: !!this.props.selectedOption,
                selectedOption: this.props.selectedOption
            });
        }
    }

    handleClearSelectedOption = () => {
        this.setState({isOpen: false});
        // Wait until the fadeout animation has time to finish,
        // as parent handleClearSelectedOption will clear the
        // selectedOption here as well
        setTimeout(() => {
            this.props.handleClearSelectedOption();
        }, 200);
    };

    render() {
        return (
            <Modal
                isOpen={this.state.isOpen}
                onRequestClose={this.handleClearSelectedOption}
                contentLabel="Selected Option"
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">Selected Option</h3>
                {this.state.selectedOption && <p className="modal__body">{this.state.selectedOption}</p>}
                <button className="button" onClick={this.handleClearSelectedOption}>Okay</button>
            </Modal>
        );
    }
}