import './featureInfo.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import React from 'react';

export default function featureInfo() {
  return (
    <div className="featured">
      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureMoneyRate">
            -11.4 <ArrowDownward className="featureIcon neg"></ArrowDownward>
          </span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>

      <div className="featureItem">
        <span className="featureTitle">Sales</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">$4,415</span>
          <span className="featureMoneyRate">
            -1.4 <ArrowDownward className="featureIcon neg"></ArrowDownward>
          </span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>

      <div className="featureItem">
        <span className="featureTitle">Cost</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">$2,225</span>
          <span className="featureMoneyRate">
            2.4 <ArrowUpward className="featureIcon pos"></ArrowUpward>
          </span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
    </div>
  );
}
