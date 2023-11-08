import React, { useEffect, useRef } from 'react';
import Handsontable from 'handsontable';

const MyTable = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		// Create an array to hold your table data
		const data = [
			// Fourth row with individual cells containing numbers 1 through 8
			[1, 2, 3, 4, 5, 6, 7, 8],
		];

		// Create an array to define the nested headers
		const nestedHeaders = [
			// First row with a single cell spanning 8 columns
			// Second row with two cells, each spanning 4 columns
			[{ label: 'Oil Bath Volume', colspan: 8 }],
			[
				{ label: 'Damper Side', colspan: 4 },
				{ label: 'Spring Side', colspan: 4 },
			],
			[
				{ label: 'Upper Tube', colspan: 2 },
				{ label: 'Lower Tube', colspan: 2 },
				{ label: 'Upper Tube', colspan: 2 },
				{ label: 'Lower Tube', colspan: 2 },
			],
		];

		// Initialize the Handsontable instance
		const hot = new Handsontable(containerRef.current, {
			data: data,
			nestedHeaders: nestedHeaders,
			colHeaders: true, // Display column headers
			rowHeaders: true, // Display row headers
			contextMenu: true, // Enable context menu
			licenseKey: 'non-commercial-and-evaluation', // Replace with your license key or leave empty for non-commercial use
		});

		// Optionally, you can customize the table's appearance and behavior further.

		return () => {
			// Destroy the Handsontable instance when the component unmounts
			hot.destroy();
		};
	}, []);

	return <div ref={containerRef}></div>;
};

export default MyTable;
