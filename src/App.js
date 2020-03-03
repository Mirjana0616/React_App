import React, {Component, Fragment} from 'react';
import {Search} from './components/search/Search';

class App extends Component{
	render(){
		return(
			<Fragment>
				<div>This is some React App</div>
				<span>something</span>
				<Search />
			</Fragment>
		)
	}
};

export default App;