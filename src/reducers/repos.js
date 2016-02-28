import { GET_REPOS, FETCH_REPOS } from '../constants/ActionTypes';

export default function repos(state = [], action) {
    switch (action.type) {
        case GET_REPOS:
            return [...action.repos];

        case FETCH_REPOS:
            return state;

        default:
            return state;
    }
}
