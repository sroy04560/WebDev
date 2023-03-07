import './UserPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarToday,
  LocationSearching,
  PermIdentity,
  PhoneAndroid,
  MailOutline,
  Publish,
} from '@mui/icons-material';

export default function UserPage() {
  return (
    <div className="user">
      <div className="userTitleCon">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAdd">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="showTop">
            <img
              src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="show"
            />
            <div className="showTopTitle">
              <span className="showUsername">Anna Backer</span>
              <span className="showJob">Software Engineer</span>
            </div>
          </div>
          <div className="showBtn">
            <span className="showTitle">Acount Details</span>

            <div className="showInfo">
              <PermIdentity className="icon"></PermIdentity>
              <span className="showInfoTitle">amback000</span>
            </div>

            <div className="showInfo">
              <CalendarToday className="icon"></CalendarToday>
              <span className="showInfoTitle">10.12.1998</span>
            </div>

            <span className="showTitle">Contact Details</span>

            <div className="showInfo">
              <PhoneAndroid className="icon"></PhoneAndroid>
              <span className="showInfoTitle">+1 133 155 435</span>
            </div>

            <div className="showInfo">
              <MailOutline className="icon"></MailOutline>
              <span className="showInfoTitle">amba12@gmail.com</span>
            </div>

            <div className="showInfo">
              <LocationSearching className="icon"></LocationSearching>
              <span className="showInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>

        {/* ---------------------Update user------------------------- */}

        <div className="userUpdate">
          <span className="upTitle">Edit</span>
          <form className="upForm">
            <div className="upLeft">
              <div className="upItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="amback000"
                  className="upInput"
                />
              </div>

              <div className="upItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Backer"
                  className="upInput"
                />
              </div>

              <div className="upItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="amba12@gmail.com"
                  className="upInput"
                />
              </div>

              <div className="upItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 133 155 435"
                  className="upInput"
                />
              </div>

              <div className="upItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="upInput"
                />
              </div>
            </div>
            <div className="upRight">
              <div className="upUpload">
                <img
                  src="https://images.pexels.com/photos/15730408/pexels-photo-15730408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="upImg"
                />
                <label htmlFor="file">
                  <Publish className="upIcon"></Publish>
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>

              <button className="upBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
