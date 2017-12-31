import React, {Component} from 'react';

import Icon from './Departments/Icon';
import Semester from './Semesters/Semester';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class Board extends Component {
	render () {
		return (
			<div id="container">
				<div className="board">
					<Router>
						<Switch>
							<Route path="/Semester" component={Semester} />
							<Route path="/" component={Icon} />
						</Switch>
					</Router>
				</div>
			</div>
		)
	}
}

export default Board;