import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect it to render Card ',()=>{
	expect(shallow(<Card/>)).toMatchSnapshot();
})
