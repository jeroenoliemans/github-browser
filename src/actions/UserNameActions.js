import { SET_USER_NAME } from '../constants/ActionTypes';

export function setUserName(userName) {

    return {
        type: SET_USER_NAME,
        userName
    };
}