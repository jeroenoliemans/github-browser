import React, { Component, PropTypes } from 'react';
import RepoListItem from '../components/RepoListItem';

export default class Repos extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { actions, userName } = this.props;
    return (
      <ul className="repo-list-container">
        {this.props.repos.map(function(repo){
            return <RepoListItem key={repo.id} repo={repo} actions={actions} />;
        })}
      </ul>
    );
  }
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
