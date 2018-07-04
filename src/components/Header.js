import React ,{ Component } from 'react';
// import CounterButton from './CounterButton';
// <CounterButton color={'red'} />
class Header extends Component {

shouldComponentUpdate(nextProps, nextState){
	return false;
}

render(){
	console.log('Header')
	return (
		<div>
			<h1 className='f1'>Robo Friends</h1>			
		</div>
		);
	}
}

export default Header;