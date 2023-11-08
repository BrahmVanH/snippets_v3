import React, { useEffect, useRef } from 'react';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';

const OilBathTable = () => {
	const selectedSuspensionFork = {
		selectedSuspensionFork: {
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
			springLowerOilWt: '0w-30',
		},
	};
	const containerRef = useRef(null);
	useEffect(() => {
		console.log(selectedSuspensionFork);
	}, [selectedSuspensionFork]);

	useEffect(() => {
		if (selectedSuspensionFork) {
			const data = [
				[
					'Damper',
					selectedSuspensionFork?.selectedSuspensionFork.damperUpperVolume,
					selectedSuspensionFork?.selectedSuspensionFork.damperUpperOilWt,
					selectedSuspensionFork?.selectedSuspensionFork.damperLowerVolume,
					selectedSuspensionFork?.selectedSuspensionFork.damperLowerOilWt,
				],
				[
					'Spring',
					selectedSuspensionFork?.selectedSuspensionFork.springUpperVolume,
					selectedSuspensionFork?.selectedSuspensionFork.springUpperOilWt,
					selectedSuspensionFork?.selectedSuspensionFork.springLowerVolume,
					selectedSuspensionFork?.selectedSuspensionFork.springLowerOilWt,
				],
			];

			const nestedHeaders = [
				[
					{ label: '', colspan: 1 },
					{ label: 'Oil Bath Volume', colspan: 4 },
				],

				[
					{ label: '', colspan: 1 },
					{ label: 'Upper Tube', colspan: 2 },
					{ label: 'Lower Tube', colspan: 2 },
				],
				// [{ label: 'Damper Side', colspan: 4 }],
				// [{ label: 'Spring Side', colspan: 4 }],
			];

			// Initialize the Handsontable instance
			const hot = new Handsontable(containerRef.current, {
				data: data,
				// virtual: true,
				width: '100%',
				height: 500,
				readOnly: true,
				columns: [
					{
						width: 75,
						renderer: function (instance, td, row, col, prop, value, cellProperties) {
							Handsontable.renderers.TextRenderer.apply(this, arguments);
							if (value === 'Damper' || value === 'Spring') {
								// Apply custom CSS style for Male cells
								td.style.color = 'black';
								td.style.fontWeight = '400';
								td.style.backgroundColor = '#f0f0f0';
							}
						
						},
					},
					{ width: 75 },
					{ width: 75 },
					{ width: 75 },
					{ width: 75 },
				],
				nestedHeaders: nestedHeaders,
				afterGetColHeader: (col, TH) => {
					// Check the column index you want to change the background color for
					if (col === 0) {
						TH.style.backgroundColor = 'white';
						TH.style.color = 'white';
						TH.style.border = 'none';
					}
				},
				// colHeaders: true, // Display column headers
				// contextMenu: true, // Enable context menu
				licenseKey: 'non-commercial-and-evaluation', // Replace with your license key or leave empty for non-commercial use
			});

			return () => {
				// Destroy the Handsontable instance when the component unmounts
				hot.destroy();
			};
		}

		return () => {
			console.log('selectedSuspensionFork variable is undefined');
		};
	});

	return <div ref={containerRef}></div>;
};

export default OilBathTable;
