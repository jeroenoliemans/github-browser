import React, { Component, PropTypes } from 'react';

export default
class RepoListItem extends Component {
    constructor(props, context) {
        super(props, context);
    }

    setRepoDetail() {

        let repoName = this.props.repo.name;
        let userName = this.props.repo.owner.login;
        this.props.actions.fetchSingleRepo(userName, repoName);

    }

    render() {
        return <li onClick={() => {
            this.setRepoDetail();
        }}>{this.props.repo.name}</li>;
    }

}

RepoListItem.propTypes = {
    actions: PropTypes.object.isRequired
};
