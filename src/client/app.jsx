import React, {Component} from 'react';
import api from './api';

export default class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		};
	}

	componentDidMount() {
		api.getValues()
			.then(items => this.setState({items}));
	}

	render() {
		const {items} = this.state;

		return (
			<div>
				<h1>Values</h1>
				{
					items.map((item, index) => (
						<li key={index} className="list-group-item">
							{item}
						</li>
					))
				}
			</div>
		);
	}
}