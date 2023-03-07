import React from 'react';
import './topbar.css';

import { NotificationsNone, Language, Settings } from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SRadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone></NotificationsNone>
            <span className="topIconBag">2</span>
          </div>

          <div className="topbarIconContainer">
            <Language></Language>
            <span className="topIconBag">2</span>
          </div>

          <div className="topbarIconContainer">
            <Settings></Settings>
            <span className="topIconBag"></span>
          </div>
          <img
            src="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
