import logo from './logo.svg';
import './App.css';
import TranslateUpwards from './TranslateUpwards';
import Unroll from './Unroll';
import BouncingBall from './BouncingBall';
import BouncingSvg from './BouncingSvg';
import BounceAndUnroll from './BoundAndUnroll';
import ScrollStretch from './ScrollStretch';
import WordReveal from './WordReveal';

function App() {
	return (
		<div className='App' 
		style={{ backgroundColor: 'black', width: '100%', height: '100%' }}>
			<WordReveal />
			{/* <div style={{ backgroundColor: 'black', color: 'white' }}>Blue</div> */}
		</div>
	);
}

export default App;
