import React from 'react';
import MaterialTable from 'material-table';
import { useState } from 'react';
import tableIcons from './IconProvider';

const MatTable = () => {
  const [tableData, setTAbleData] = useState([]);

  const data = [
    { name: 'Kuddus', age: 23, phone: '01838947346' },
    { name: 'Antu', age: 22, phone: '00000004564' },
    { name: 'Najim', age: 45, phone: '14564874454' },
    { name: 'Shamim', age: 26, phone: '145648745487' },
  ];

  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Age', field: 'age' },
    { title: 'phone', field: 'phone' },
  ];
  return (
    <div>
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={data}
        actions={[
          {
            icon: tableIcons.Delete,
            tooltip: 'Delete User?',
            onClick: (event, rowData) =>
              alert('you want to delete' + rowData.name),
          },
          {
            icon: tableIcons.Add,
            tooltip: 'Add User',
            isFreeAction: true,
            onClick: (event) => alert('You want to add a new row '),
          },
        ]}
        components={{
          Action: (props) => (
            <button
              style={{
                backgroundColor: 'tomato',
                border: 'none',
                borderRadius: '3px',
                padding: '3px 5px',
              }}
              onClick={(event) => props.action.onClick(event, props.data)}
            >
              Delete
            </button>
          ),
        }}
        options={{
          exportButton: true,
        }}
      ></MaterialTable>
    </div>
  );
};

export default MatTable;
