import './User.css';
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { rows } from '../../data';
import { Link } from 'react-router-dom';

export default function User() {
  const [data, setData] = useState(rows);
  const handleDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 130,
      renderCell: (params) => {
        return (
          <div className="uList">
            <img className="uListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className="uListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="uListDel"
              onClick={() => handleDel(params.row.id)}
            ></DeleteOutline>
          </>
        );
      },
    },
  ];

  return (
    <div className="user">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[11]}
        checkboxSelection
      />
    </div>
  );
}
