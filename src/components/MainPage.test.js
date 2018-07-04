import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(()=>{
	const mockProps ={
		onRequestRobots:jest.fn(),
		robots:[],
		searchField:'',
		isPending:false
	}
	wrapper =shallow(<MainPage {...mockProps}/>)
})
it('Renders MainPage without crashing', ()=> {
	expect(wrapper).toMatchSnapshot();
})

it('Filters robots corectly', () =>{
		const mockProps2 ={
		onRequestRobots:jest.fn(),
		robots:[{
			id:3,
			name:'John',
			email:'john@gmail.com'
		}
		],
		searchField:'j',
		isPending:false
	}
	const wrapper2 =shallow(<MainPage {...mockProps2}/>)
	expect(wrapper.instance().filterRobots()).toEqual([]);
	expect(wrapper2.instance().filterRobots()).toEqual([{
			id:3,
			name:'John',
			email:'john@gmail.com'
		}
		]);

})
it('Filters robots corectly 2', () =>{
		const mockProps3 ={
		onRequestRobots:jest.fn(),
		robots:[{
			id:3,
			name:'John',
			email:'john@gmail.com'
		}
		],
		searchField:'a',
		isPending:false
	}
	const filterRobots = []
	const wrapper3 =shallow(<MainPage {...mockProps3}/>)
	
	expect(wrapper3.instance().filterRobots()).toEqual(filterRobots);
	

})