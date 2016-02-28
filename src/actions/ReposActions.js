import { GET_REPOS, FETCH_REPOS, RECEIVED_SINGLE_REPO, CLEAR_SINGLE_REPO } from '../constants/ActionTypes';


export function getRepos(json, name) {

    return {
        type: GET_REPOS,
        repos: json,
        userName: name
    }
}

export function fetchRepos(name = 'jeroenoliemans') {

    return dispatch => {
        return fetch(`https://api.github.com/users/${name}/repos`)
            .then(req => req.json())
            .then(json => dispatch(getRepos(json, name)));
    };
}

export function receivedSingleRepo(json) {

    return {
        type: RECEIVED_SINGLE_REPO,
        singleRepo: json
    }
}

export function fetchSingleRepo(name = 'jeroenoliemans', repoName = 'plainUi') {
    return dispatch => {
        return fetch(`https://api.github.com/repos/${name}/${repoName}`)
            .then(req => req.json())
            .then(json => dispatch(receivedSingleRepo(json)));
    };
}

export function clearSingleRepo() {
    return {
        type: CLEAR_SINGLE_REPO,
        singleRepo: null
    }

}