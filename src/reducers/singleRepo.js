import { RECEIVED_SINGLE_REPO, CLEAR_SINGLE_REPO } from '../constants/ActionTypes';


export default function singleRepo(state = {}, action) {
    switch (action.type) {
        case RECEIVED_SINGLE_REPO:

            return Object.assign({}, action.singleRepo);

        case CLEAR_SINGLE_REPO:

            return {};

        default:
            return state;
    }
}
