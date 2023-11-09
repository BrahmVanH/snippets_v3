import logo from './logo.svg';
import './App.css';
import TranslateUpwards from './TranslateUpwards';
import Unroll from './Unroll';
import BouncingBall from './BouncingBall';
import BouncingSvg from './BouncingSvg';

function App() {
  return (
		<div className='App' 
		style={{backgroundColor: "black", width: "100vw", height: '100vh'}}
		>
			<div>
				<BouncingSvg />
			</div>
		</div>
	);
}

export default App;
