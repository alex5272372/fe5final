import {pageTypes} from './pageActions';
import {postTypes} from './postActions';
import {signInTypes} from './signInActions';
import {userTypes} from './userActions';

export const actionTypes = {
    ...pageTypes,
    ...postTypes,
    ...signInTypes,
    ...userTypes
};
