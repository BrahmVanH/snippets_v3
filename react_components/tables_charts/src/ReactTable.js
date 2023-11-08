import React from 'react';
import { useTable } from 'react-table';

function MyTable() {
	const data = React.useMemo(
		() => [
			{
				header1: '',
				header2: 'OV1',
				header3: 'OW1',
				header4: 'OV2',
				header5: 'OW2',
			},
			{
				header1: 'Upper Tube',
				header2: '3',
				header3: '4',
				header4: '5',
				header5: '6',
			},
			{
				header1: 'Lower Tube',
				header2: '7',
				header3: '8',
				header4: '9',
				header5: '10',
			},
		],
		[]
	);

	const columns = React.useMemo(
		() => [
			{
				Header: ' ',
				accessor: 'header1',
			},
			{
				Header: 'Damper Side',
				accessor: 'header2', 
			},
			{
				accessor: 'header3',
			},
			{
				Header: 'Spring Side',
				accessor: 'header4',
			},
			{
				accessor: 'header5',
			},
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data,
	});

	return (
		<table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th
								{...column.getHeaderProps()}
								style={{
									borderBottom: '2px solid black',
									padding: '8px',
									textAlign: 'center',
								}}>
								{column.render('Header')}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return (
									<td
										{...cell.getCellProps()}
										style={{
											border: '1px solid black',
											padding: '8px',
											textAlign: 'center',
										}}>
										{cell.render('Cell')}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default MyTable;
