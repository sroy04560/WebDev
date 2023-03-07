import React from 'react';
import { Link } from 'react-router-dom';
import './products.css';
import Chart from '../../components/chart/chart';
import { ProductData } from '../../data';
import { Publish } from '@mui/icons-material';
export default function Product() {
  return (
    <div className="prod">
      <div className="prodTitleCon">
        <h1 className="prodTitle">product</h1>
        <Link to="/newproduct">
          <button className="prodBtn">Create</button>
        </Link>
      </div>
      <div className="prodTop">
        <div className="prodTopLeft">
          <Chart
            data={ProductData}
            dataKey="Sales"
            title="Sales Performance"
          ></Chart>
        </div>
        <div className="prodTopRight">
          <div className="prodInfoTop">
            <img
              src="https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="prodInfoImg"
            />
            <span className="prodName">Apple Airpd</span>
          </div>
          <div className="prodInfoBottom">
            <div className="prodInfoItem">
              <span className="prodInfoKey"> id:</span>
              <span className="prodInfoValue">123</span>
            </div>

            <div className="prodInfoItem">
              <span className="prodInfoKey">sales:</span>
              <span className="prodInfoValue">5128</span>
            </div>

            <div className="prodInfoItem">
              <span className="prodInfoKey">active:</span>
              <span className="prodInfoValue">yes</span>
            </div>

            <div className="prodInfoItem">
              <span className="prodInfoKey">in stock:</span>
              <span className="prodInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="prodBottom">
        <form className="prodForm">
          <div className="prodLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />

            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="prodRight">
            <div className="prodUp">
              <img
                src="https://images.pexels.com/photos/6373001/pexels-photo-6373001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="prodUpImg"
              />
              <label for="file">
                <Publish></Publish>
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="pordUpBtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
