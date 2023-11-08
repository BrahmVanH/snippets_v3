import React, { useEffect, useRef } from 'react';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';


const SuspensionProducts = () => {

  const searchResults = [
		{
			year: '2018',
			fork: 'Paragon Gold',
			model: 'RL',
			damperType: 'Motion Control',
			springType: 'Solo Air',
			wheelSize: '',
			damperUpperVolume: '87',
			damperUpperOilWt: '5',
			damperLowerVolume: '12',
			damperLowerOilWt: '15',
			springUpperVolume: '3-6',
			springUpperOilWt: '5',
			springLowerVolume: '12',
			springLowerOilwt: '15',
		},
		{
			year: '2018',
			fork: 'Paragon Silver',
			model: 'TK',
			damperType: 'Turnkey',
			springType: 'Coil',
			wheelSize: '',
			damperUpperVolume: '87',
			damperUpperOilWt: '5',
			damperLowerVolume: '12',
			damperLowerOilWt: '15',
			springUpperVolume: 'Grease',
			springUpperOilWt: '',
			springLowerVolume: '12',
			springLowerOilwt: '15',
		},
		{
			year: '2018',
			fork: 'Pike',
			model: 'DJ',
			damperType: 'Charger Damper',
			springType: 'Solo Air',
			wheelSize: '',
			damperUpperVolume: 'Bleed',
			damperUpperOilWt: '3',
			damperLowerVolume: '10',
			damperLowerOilWt: '0w-30',
			springUpperVolume: 'Grease',
			springUpperOilWt: '',
			springLowerVolume: '10',
			springLowerOilwt: '0w-30',
		},
		{
			year: '2018',
			fork: 'Pike',
			model: 'RC',
			damperType: 'Charger Damper / Charger 2',
			springType: 'DebonAir',
			wheelSize: '',
			damperUpperVolume: 'Bleed',
			damperUpperOilWt: '3',
			damperLowerVolume: '10',
			damperLowerOilWt: '0w-30',
			springUpperVolume: 'Grease',
			springUpperOilWt: '',
			springLowerVolume: '10',
			springLowerOilwt: '0w-30',
		},
		{
			year: '2018',
			fork: 'Pike',
			model: 'RC',
			damperType: 'Charger Damper / Charger 2',
			springType: 'Solo Air',
			wheelSize: '',
			damperUpperVolume: 'Bleed',
			damperUpperOilWt: '3',
			damperLowerVolume: '10',
			damperLowerOilWt: '0w-30',
			springUpperVolume: 'Grease',
			springUpperOilWt: '',
			springLowerVolume: '10',
			springLowerOilwt: '0w-30',
		},
		{
			year: '2018',
			fork: 'Pike',
			model: 'RC',
			damperType: 'Charger Damper / Charger 2',
			springType: 'Dual Position Air',
			wheelSize: '',
			damperUpperVolume: 'Bleed',
			damperUpperOilWt: '3',
			damperLowerVolume: '10',
			damperLowerOilWt: '0w-30',
			springUpperVolume: 'Grease',
			springUpperOilWt: '',
			springLowerVolume: '10',
			springLowerOilwt: '0w-30',
		},
		{
			year: '2018',
			fork: 'Pike',
			model: 'RCT3',
			damperType: 'Charger Damper / Charger 2',
			springType: 'Solo Air',
			wheelSize: '',
			damperUpperVolume: 'Bleed',
			damperUpperOilWt: '3',
			damperLowerVolume: '10',
			damperLowerOilWt: '0w-30',
			springUpperVolume: 'Grease',
			springUpperOilWt: '',
			springLowerVolume: '10',
			springLowerOilwt: '0w-30',
		},
		{
			year: '2018',
			fork: 'Pike',
			model: 'RCT3',
			damperType: 'Charger Damper / Charger 2',
			springType: 'Dual Position Air',
			wheelSize: '',
			damperUpperVolume: 'Bleed',
			damperUpperOilWt: '3',
			damperLowerVolume: '10',
			damperLowerOilWt: '0w-30',
			springUpperVolume: 'Grease',
			springUpperOilWt: '',
			springLowerVolume: '10',
			springLowerOilwt: '0w-30',
		},
		{
			year: '2018',
			fork: 'Pike',
			model: 'RCT3',
			damperType: 'Charger Damper / Charger 2',
			springType: 'DebonAir',
			wheelSize: '',
			damperUpperVolume: 'Bleed',
			damperUpperOilWt: '3',
			damperLowerVolume: '10',
			damperLowerOilWt: '0w-30',
			springUpperVolume: 'Grease',
			springUpperOilWt: '',
			springLowerVolume: '10',
			springLowerOilwt: '0w-30',
		},
		{
			year: '2018',
			fork: 'Reba',
			model: 'RL (110-120)',
			damperType: 'Motion Control',
			springType: 'Solo Air',
			wheelSize: '',
			damperUpperVolume: '108',
			damperUpperOilWt: '5',
			damperLowerVolume: '3-8',
			damperLowerOilWt: '15',
			springUpperVolume: 'Grease',
			springUpperOilWt: '',
			springLowerVolume: '3-8',
			springLowerOilwt: '15',
		},
	];

  // const data = [searchResults.map((product) => {
  //   product.year,
  //   product.fork,
  //   product.model,
  //   product.damperType,
  //   product.springType
    
  // })];

  const customButtonRenderer = (instance, td, row, col, prop, value, cellProperties) => {
		const button = document.createElement('button');
		button.innerText = 'Search';
		button.addEventListener('click', () => {
			// Handle button click here
			alert(`Button clicked in row ${row}`);
      console.log(`cell properties: ${cellProperties}`);
      console.log(cellProperties);
      console.log(`row: ${row}` );
      console.log(`instance ${instance}`);
      console.log(instance.getSourceDataAtRow(row));
      console.log(`value: ${value}`);
		});

		// Clear the cell content
		td.innerHTML = '';

		// Append the button to the cell
		td.appendChild(button);
	};

	const containerRef = useRef(null);

	useEffect(() => {
		// Prepare the data for Handsontable
		const hotData = searchResults.map((item) => ({
			fork: item.fork,
			model: item.model,
			damperType: item.damperType,
			springType: item.springType,
		}));

		// Define the columns for Handsontable
		const hotColumns = [
			{ data: 'fork', title: 'Fork' },
			{ data: 'model', title: 'Model' },
			{ data: 'damperType', title: 'Damper Type' },
			{ data: 'springType', title: 'Spring Type' },
      { renderer: customButtonRenderer }
		];

		// Initialize the Handsontable instance
		const hot = new Handsontable(containerRef.current, {
			data: hotData,
			columns: hotColumns,
			colHeaders: true, // Display column headers
			rowHeaders: true, // Display row headers
			licenseKey: 'non-commercial-and-evaluation', // Replace with your license key or leave empty for non-commercial use
		});

		return () => {
			// Ensure you destroy the Handsontable instance when the component unmounts
			hot.destroy();
		};
	}, [searchResults]);

	return <div ref={containerRef}></div>;
};

export default SuspensionProducts;
