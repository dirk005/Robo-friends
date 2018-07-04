import React ,{ PureComponent } from 'react';

class CounterButton extends PureComponent {
constructor(){
	super();
	this.state ={
		count: 0
	}
}
shouldComponentUpdate(nextProps, nextState){
	return this.state.count !== nextState.count ? true : false;
}
updateCount = () => {
	this.setState(state =>{
		return {count: this.state.count + 1}
	})
}
render(){
	return (
		<button id='counter' color={this.props.color} onClick={this.updateCount} > Count : {this.state.count}</button>
		);
}
}

export default CounterButton;