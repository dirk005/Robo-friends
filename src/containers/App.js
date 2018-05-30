import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/searchBox.js';
// import { robots } from './robots';
import Scroll from '../components/scroll';
import './App.css';



class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchField:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users =>	this.setState({robots:users}));		
	}

	onSearchChange = (event) => {
		this.setState({searchField : event.target.value});
	}
	render(){
		const {robots,searchField} =this.state;
		const filterRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return !robots.length ?
			 <h1>Loading ... </h1> :
			(
			<div className='tc'>
				<h1 className='f1'>Robo Friends</h1>
				<SearchBox seachChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filterRobots}/>
				</Scroll>
			</div>
			);
		}
	
}

export default App;