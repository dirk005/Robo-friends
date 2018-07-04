import { 
		CHANGE_SEARCH_FIELD,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
	 	REQUEST_ROBOTS_FAILED 
	 } from './constants.js';
import *as actions from './actions';

import confiqureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = confiqureMockStore([thunkMiddleware])

it('should create action to search robots', () => {
	const text = 'wooo';
	const expectedAction = {
		type:CHANGE_SEARCH_FIELD,
		payload: text
	}
	expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('Handles requsting robots api', () => {
	const store =mockStore();
	store.dispatch(actions.requestRobots());
	const action =store.getActions();
	const expectedRequest = {
		type:REQUEST_ROBOTS_PENDING
	}
	expect(action[0]).toEqual(expectedRequest)
})