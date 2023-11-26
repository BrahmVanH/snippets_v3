import logo from './logo.svg';
import './App.css';
import TranslateUpwards from './TranslateUpwards';
import Unroll from './Unroll';
import BouncingBall from './BouncingBall';
import BouncingSvg from './BouncingSvg';
import BounceAndUnroll from './BoundAndUnroll';
import ScrollStretch from './ScrollStretch';
import WordReveal from './WordReveal';
import BounceReveal from './BounceReveal';
import SideToDownScroll from './SideToDownScroll';
import WigglyLoader from './WigglyLoader';

function App() {
	const bounceRevealAppStyle = {
		backgroundColor: 'black',
		width: '100%',
		height: '100%',
	};
	return (
		<div className='App' style={bounceRevealAppStyle}>
			<WigglyLoader />
		</div>
	);
}

export default App;
