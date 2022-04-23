import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { useState } from 'react';
import tableIcons from './IconProvider';

const MatTable = () => {
  const url = 'http://localhost:4000/students';
  const [data, setData] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = () => {
    fetch(url)
      .then((res) => res.json())
      .then((resp) => setData(resp));
  };

  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Year', field: 'year' },
    { title: 'Fee', field: 'fee' },
  ];
  return (
    <div>
      <h1 align='center'>CRUD on Material</h1>
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              //the api calls
              console.log(newData);
            }),
        }}
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
        // components={{
        //   Action: (props) => (
        //     <button
        //       style={{
        //         backgroundColor: 'tomato',
        //         border: 'none',
        //         borderRadius: '3px',
        //         padding: '3px 5px',
        //       }}
        //       onClick={(event) => props.action.onClick(event, props.data)}
        //     >
        //       Delete
        //     </button>
        //   ),
        // }}
        options={{
          exportButton: true,
        }}
      ></MaterialTable>
    </div>
  );
};

export default MatTable;
