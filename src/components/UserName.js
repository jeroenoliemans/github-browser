import React, { Component, PropTypes } from 'react';

export default class UserName extends Component {

    constructor(props, context) {
        super(props, context);
    }

    handleSetUserName() {
        var input = this.refs.userNameInput;
        var inputValue = input.value;
        this.props.actions.setUserName(inputValue);
        this.props.actions.fetchRepos(inputValue);
        this.props.actions.clearSingleRepo();
    }

    render() {
        return (
            <div className="user-name-container">
                <div className="user-name-search">
                    <form onSubmit={(event) => {
                        event.preventDefault();

                        this.handleSetUserName();
                    }}>
                        <input
                            ref="userNameInput"
                            type="text"
                            defaulValue={this.props.userName} />
                        <button type="submit">Find User</button>
                    </form>
                </div>
            </div>
        );
    }
}

UserName.propTypes = {
    userName: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};
