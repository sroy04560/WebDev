import './productList.css';
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { prorows } from '../../data';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const [data, setData] = useState(prorows);
  const handleDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 130,
      renderCell: (params) => {
        return (
          <div className="proList">
            <img className="proListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className="proListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="proListDel"
              onClick={() => handleDel(params.row.id)}
            ></DeleteOutline>
          </>
        );
      },
    },
  ];

  return (
    <div className="pro">
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
