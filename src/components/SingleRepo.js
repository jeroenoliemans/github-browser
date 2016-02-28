import React, { Component, PropTypes } from 'react';

export default class SingleRepo extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {  singleRepo } = this.props;
    return (
      <div>
          <h3>{singleRepo.name}</h3>
          <p>{singleRepo.description}</p>
          <h4>Info</h4>
          <ul>
            <li><strong>Language: </strong>{singleRepo.language}</li>
            <li><strong>ID: </strong>{singleRepo.id}</li>
            <li><strong>Created: </strong>{singleRepo.created_at}</li>
          </ul>
          <h4>Url</h4>
          <ul>
              <li><strong>git_url: </strong>{singleRepo.git_url}</li>
              <li><strong>clone_url: </strong>{singleRepo.clone_url}</li>
              <li><strong>ssh_url: </strong>{singleRepo.ssh_url}</li>
          </ul>
      </div>
    );
  }
}

SingleRepo.propTypes = {
  singleRepo: PropTypes.object.isRequired
};
