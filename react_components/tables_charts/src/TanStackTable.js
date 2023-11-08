import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa';

import './index.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'



// type Product = { 
//     year: string,
//     fork: string,
//     model: string,
//     damperType: string,
//     springType: string,
//     wheelSize: string,
//     damperUpperVolume: string,
//     damperUpperOilWt: string,
//     damperLowerVolume: string,
//     damperLowerOilWt: string,
//     springUpperVolume: string,
//     springUpperOilWt: string,
//     springLowerVolume: string,
//     springLowerOilWt: string,
//   }

const defaultData = [
{
    "year": "2016",
    "fork": "Boxxer",
    "model": "RC",
    "damperType": "Motion Control IS",
    "springType": "Coil",
    "wheelSize": "",
    "damperUpperVolume": "290",
    "damperUpperOilWt": "5",
    "damperLowerVolume": "10",
    "damperLowerOilWt": "0w30",
    "springUpperVolume": "Grease",
    "springUpperOilWt": "",
    "springLowerVolume": "20",
    "springLowerOilWt": "0w30"
  },
  {
    "year": "2016",
    "fork": "Boxxer",
    "model": "Team",
    "damperType": "Charger",
    "springType": "Coil",
    "wheelSize": "",
    "damperUpperVolume": "Bleed",
    "damperUpperOilWt": "3",
    "damperLowerVolume": "10",
    "damperLowerOilWt": "0w30",
    "springUpperVolume": "Grease",
    "springUpperOilWt": "",
    "springLowerVolume": "20",
    "springLowerOilWt": "0w30"
  },
  {
    "year": "2016",
    "fork": "Boxxer",
    "model": "World Cup",
    "damperType": "Charger",
    "springType": "Solo Air",
    "wheelSize": "",
    "damperUpperVolume": "Bleed",
    "damperUpperOilWt": "3",
    "damperLowerVolume": "10",
    "damperLowerOilWt": "0w30",
    "springUpperVolume": "Grease",
    "springUpperOilWt": "",
    "springLowerVolume": "10",
    "springLowerOilWt": "0w30"
  },
  {
    "year": "2016",
    "fork": "Domain",
    "model": "Dual Crown RC",
    "damperType": "Motion Control IS",
    "springType": "Coil",
    "wheelSize": "",
    "damperUpperVolume": "325",
    "damperUpperOilWt": "5",
    "damperLowerVolume": "10",
    "damperLowerOilWt": "15",
    "springUpperVolume": "Grease",
    "springUpperOilWt": "",
    "springLowerVolume": "40",
    "springLowerOilWt": "15"
  },
  {
    "year": "2016",
    "fork": "Domain",
    "model": "RC",
    "damperType": "Motion Control IS",
    "springType": "Coil",
    "wheelSize": "",
    "damperUpperVolume": "200",
    "damperUpperOilWt": "5",
    "damperLowerVolume": "10",
    "damperLowerOilWt": "15",
    "springUpperVolume": "Grease",
    "springUpperOilWt": "",
    "springLowerVolume": "30",
    "springLowerOilWt": "15"
  },
]

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('year', {
    header: () => <span>Year</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('fork', {
    id: 'fork',
    cell: info => info.renderValue(),
    header: () => <span>Fork</span>,
  }),
  columnHelper.accessor('model', {
    header: () => 'Model',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('damperType', {
    header: () => <span>Damper</span>,
  }),
  columnHelper.accessor('springType', {
    header: () => <span>Spring</span>,
  }),
]

const TanStackTable = (props) => {
  console.log(props.data);
  const [data, setData] = React.useState(() => [...props.data])
  const rerender = React.useReducer(() => ({}), {})[1]

const sendSelectedProductInformation = (rowData) => {
  console.log(rowData);
}

const handleClick = (rowData) => {
 console.log(rowData);
}

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <table style={{backgroundColor: 'black', color: 'white'}}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td>
                <Button onClick={() => sendSelectedProductInformation(row.original)}>
                  <FaSearch style={{backgroundColor: 'black', color: 'white'}} size={12} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  )
}
export default TanStackTable;
