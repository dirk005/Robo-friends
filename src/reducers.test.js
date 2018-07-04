import { 
		CHANGE_SEARCH_FIELD,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
	 	REQUEST_ROBOTS_FAILED 
	 } from './constants.js';

import * as reducers from './reducers';

describe('searchRobots', () =>{
	const initialStateSearch ={
		searchField: ''
	}
	it('Should return inital state',()=>{
		expect(reducers.searchRobots(undefined,{} )).toEqual({searchField:''})
	})
	it('Should hadle CHANGE_SEARCH_FIELD',()=>{
		expect(reducers.searchRobots(initialStateSearch,{
			type:CHANGE_SEARCH_FIELD,
			payload:'abc'
		} )).toEqual({searchField:'abc'})
	})
})
describe('requestRobots', () =>{
	const initialStateRobots ={
		isPending : false,
		robots: [],
		error:''
	}
	it('Should return inital state',()=>{
		expect(reducers.requestRobots(undefined,{} )).toEqual(initialStateRobots)
	})
	it('Should hadle REQUEST_ROBOTS_PENDING', () =>{
		expect(reducers.requestRobots(initialStateRobots,{
			type: REQUEST_ROBOTS_PENDING
		})).toEqual({			
			isPending:true,
			robots:[],
			error:''
		})
	})
	it('Should hadle REQUEST_ROBOTS_SUCCESS', () =>{
			expect(reducers.requestRobots(initialStateRobots,{
				type: REQUEST_ROBOTS_SUCCESS,
				payload: [{
					id:'123',
					name:'test',
					email: 'test@gmail.com'
				}]
			})).toEqual({			
				isPending:false,
				robots:[{
					id:'123',
					name:'test',
					email: 'test@gmail.com'
				}],
				error:''
			})
		})
	it('Should hadle REQUEST_ROBOTS_FAILED', () =>{
			expect(reducers.requestRobots(initialStateRobots,{
				type: REQUEST_ROBOTS_FAILED,
				payload: 'error'
			})).toEqual({			
				isPending:false,
				robots:[],
				error:'error'
			})
		})
})