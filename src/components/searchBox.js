import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchField,seachChange}) => {
	return (
		<div className='pa2'>
			<input 
				aria-label='Search-Robots'
				className='pa3 ba b--green bg-lithtest-blue'
				type='search' 
				placeholder='Search Robots'
				onChange={seachChange}
			/>
		</div>
		);
}

export default SearchBox;