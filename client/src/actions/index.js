import {pageTypes} from './pageActions';
import {signInTypes} from './signInActions';
import {userTypes} from './userActions';

export const actionTypes = {
    ...pageTypes,
    ...signInTypes,
    ...userTypes
};
