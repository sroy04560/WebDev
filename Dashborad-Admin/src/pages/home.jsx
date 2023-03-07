import React from 'react';
import Chart from '../components/chart/chart';
import FeatureInfo from '../components/featureInfo/featureInfo';
import Widgetlg from '../components/widgetLg/widgetlg';
import WidgetSmal from '../components/WidgetSim/widgetSmal';
import './home.css';
import { Data } from '../data';

export default function home() {
  return (
    <div className="home">
      <FeatureInfo></FeatureInfo>
      <Chart
        data={Data}
        title="User Analytics"
        grid
        dataKey="Active User"
      ></Chart>
      <div className="homeWidgets">
        <WidgetSmal></WidgetSmal>
        <Widgetlg></Widgetlg>
      </div>
    </div>
  );
}
