import * as React from "react";

export interface State {
}

export interface Props {
}

export class App extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() { }

	componentDidUpdate(prevProps: Props, prevState: State) { }

	render() {
		return (
			<div>
				React App
			</div>
		);
	}
}
