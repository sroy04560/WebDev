import './sidebar.css';

import React from 'react';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  Chat,
  WorkOutline,
  Report,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h1 className="sidebarTitle">Dashboard</h1>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon"></LineStyle>
                Home
              </li>
            </Link>

            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"></Timeline>
              AnaLaytics
            </li>

            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"></TrendingUp>
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h1 className="sidebarTitle">Quick Menu</h1>
          <ul className="sidebarList">
            <Link to="/user" className="link">
              <li className="sidebarListItem">
                <PersonOutline className="sidebarIcon"></PersonOutline>
                User
              </li>
            </Link>

            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon"></Storefront>
                Products
              </li>
            </Link>

            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon"></AttachMoney>
              Transaction
            </li>

            <li className="sidebarListItem">
              <BarChart className="sidebarIcon"></BarChart>
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h1 className="sidebarTitle">Notification</h1>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon"></MailOutline>
              Mail
            </li>

            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon"></DynamicFeed>
              Feedback
            </li>

            <li className="sidebarListItem">
              <Chat className="sidebarIcon"></Chat>
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h1 className="sidebarTitle">Staff</h1>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon"></WorkOutline>
              Message
            </li>

            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"></Timeline>
              AnaLaytics
            </li>

            <li className="sidebarListItem">
              <Report className="sidebarIcon"></Report>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
