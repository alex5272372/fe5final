import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {initialState, usersReducer} from './users';
import {actionTypes} from '../actions';
import {APP_HOST_NAME} from '../settings';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('users reducer', () => {

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore()
    });

    it(actionTypes.GET_USERS_SUCCESS, () => {
        fetchMock.getOnce(`${APP_HOST_NAME}/users`, {
            headers: {'content-type': 'application/json'},
            body: {data: [1, 2, 3], status: 'ok'}
        });

        const expectedActions = [
            {
                type: actionTypes.GET_USERS_REQUEST,
            },
            {
                type: actionTypes.GET_USERS_SUCCESS,
                payload: [1, 2, 3], // в ожидании важно указать теже данные, что были указаны выше в моке запроса
            },
        ];

        const store = mockStore({});

        return store.dispatch(getNews()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

});