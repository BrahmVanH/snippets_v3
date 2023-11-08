import Logo from './logs';

import './style.css';

class App extends React.Component {
	playClick = (event) => {
		this.logo.animateIn();
	};

	reverseClick = (event) => {
		this.logo.reverseAnimation();
	};

	render() {
		return (
			<div className='page-wrap'>
				<h1>React - GSAP - Animation</h1>
				<Logo ref={(l) => (this.logo = l)} width='100%' height='100%' background='#333' text='#fff' />
				<div className='btn-wrap'>
					<button className='btn' onClick={this.playClick}>
						Play
					</button>
					<button className='btn' onClick={this.reverseClick}>
						Reverse
					</button>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
