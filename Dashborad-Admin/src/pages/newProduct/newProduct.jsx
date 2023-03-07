import './newProduct.css';
import React from 'react';

export default function NewProduct() {
  return (
    <div className="pro">
      <div className="new">
        <h1 className="newTitle">New User</h1>
        <form className="newForm">
          <div className="newItem">
            <label>Image</label>
            <input type="file" id="file" />
          </div>

          <div className="newItem">
            <label>Name</label>
            <input type="text" placeholder="Apple Airpod" />
          </div>

          <div className="newItem">
            <label>Stock</label>
            <input type="text" placeholder="123" />
          </div>

          <div className="newItem">
            <label>Active</label>
            <select name="active" id="active" className="newSelect">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="newBtn">Create</button>
        </form>
      </div>
    </div>
  );
}
