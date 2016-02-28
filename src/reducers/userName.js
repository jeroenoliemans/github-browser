import { SET_USER_NAME } from '../constants/ActionTypes';


export default function userName(state = 'jeroenoliemans', action) {
    switch (action.type) {
        case SET_USER_NAME:
            return action.userName;

        default:
            return state;
    }
}
