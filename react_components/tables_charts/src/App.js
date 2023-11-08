import logo from './logo.svg';
import './App.css';
import BasicTable from './ReactTable';
import MyTable from './Handsontable';
import OilBathTable from './SuspensionOilBathVolumeChart';
import SuspensionProducts from './SuspensionProducts';
import TanStackTable from './TanStackTable';

function App() {

	const data = [
		{
			year: '2016',
			fork: 'Boxxer',
			model: 'RC',
			damperType: 'Motion Control IS',
			springType: 'Coil',
			wheelSize: '',
			damperUpperVolume: '290',
			damperUpperOilWt: '5',
			damperLowerVolume: '10',
			damperLowerOilWt: '0w30',
			springUpperVolume: 'Grease',
			springUpperOilWt: '',
			springLowerVolume: '20',
			springLowerOilWt: '0w30',
		},
		{
			year: '2016',
			fork: 'Boxxer',
			model: 'Team',
			damperType: 'Charger',
			springType: 'Coil',
			wheelSize: '',
			damperUpperVolume: 'Bleed',
			damperUpperOilWt: '3',
			damperLowerVolume: '10',
			damperLowerOilWt: '0w30',
			springUpperVolume: 'Grease',
			springUpperOilWt: '',
			springLowerVolume: '20',
			springLowerOilWt: '0w30',
		},
		{
			year: '2016',
			fork: 'Boxxer',
			model: 'World Cup',
			damperType: 'Charger',
			springType: 'Solo Air',
			wheelSize: '',
			damperUpperVolume: 'Bleed',
			damperUpperOilWt: '3',
			damperLowerVolume: '10',
			damperLowerOilWt: '0w30',
			springUpperVolume: 'Grease',
			springUpperOilWt: '',
			springLowerVolume: '10',
			springLowerOilWt: '0w30',
		},
		{
			year: '2016',
			fork: 'Domain',
			model: 'Dual Crown RC',
			damperType: 'Motion Control IS',
			springType: 'Coil',
			wheelSize: '',
			damperUpperVolume: '325',
			damperUpperOilWt: '5',
			damperLowerVolume: '10',
			damperLowerOilWt: '15',
			springUpperVolume: 'Grease',
			springUpperOilWt: '',
			springLowerVolume: '40',
			springLowerOilWt: '15',
		},
		{
			year: '2016',
			fork: 'Domain',
			model: 'RC',
			damperType: 'Motion Control IS',
			springType: 'Coil',
			wheelSize: '',
			damperUpperVolume: '200',
			damperUpperOilWt: '5',
			damperLowerVolume: '10',
			damperLowerOilWt: '15',
			springUpperVolume: 'Grease',
			springUpperOilWt: '',
			springLowerVolume: '30',
			springLowerOilWt: '15',
		},
	];
	return (
		<div className='App d-flex justify-content-center py-5'>
			<div className='d-flex justify-content-center m-auto'>
				<TanStackTable data={data} />
			</div>
		</div>
	);
}

export default App;
