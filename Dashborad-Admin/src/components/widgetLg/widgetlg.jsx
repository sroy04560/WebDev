import './widgetLg.css';

import React from 'react';

export default function widgetlg() {
  const Button = ({ type }) => {
    return <button className={'lgBtn' + type}>{type}</button>;
  };

  return (
    <div className="lg">
      <h3 className="lgTitle">Latest Transaction</h3>
      <table className="lgTable">
        <tr className="lgTr">
          <th className="lgTh">Custmer</th>
          <th className="lgTh">Date</th>
          <th className="lgTh">Amount</th>
          <th className="lgTh">Status</th>
        </tr>
        <tr className="lgTr">
          <td className="lgUser">
            <img
              src="https://images.pexels.com/photos/15744728/pexels-photo-15744728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="lgImg"
            />
            <span className="lgName">Susan Carol</span>
          </td>
          <td className="lgDate">2 Jun 2011</td>
          <td className="lgAmt">$122.00</td>

          <td className="lgSat">
            <Button type="Approved"></Button>
          </td>
        </tr>

        <tr className="lgTr">
          <td className="lgUser">
            <img
              src="https://images.pexels.com/photos/15744728/pexels-photo-15744728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="lgImg"
            />
            <span className="lgName">Susan Carol</span>
          </td>
          <td className="lgDate">2 Jun 2011</td>
          <td className="lgAmt">$122.00</td>

          <td className="lgSat">
            <Button type="Approved"></Button>
          </td>
        </tr>
        <tr className="lgTr">
          <td className="lgUser">
            <img
              src="https://images.pexels.com/photos/15744728/pexels-photo-15744728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="lgImg"
            />
            <span className="lgName">Susan Carol</span>
          </td>
          <td className="lgDate">2 Jun 2011</td>
          <td className="lgAmt">$122.00</td>

          <td className="lgSat">
            <Button type="Approved"></Button>
          </td>
        </tr>
        <tr className="lgTr">
          <td className="lgUser">
            <img
              src="https://images.pexels.com/photos/15744728/pexels-photo-15744728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="lgImg"
            />
            <span className="lgName">Susan Carol</span>
          </td>
          <td className="lgDate">2 Jun 2011</td>
          <td className="lgAmt">$122.00</td>

          <td className="lgSat">
            <Button type="Pending"></Button>
          </td>
        </tr>
        <tr className="lgTr">
          <td className="lgUser">
            <img
              src="https://images.pexels.com/photos/15744728/pexels-photo-15744728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="lgImg"
            />
            <span className="lgName">Susan Carol</span>
          </td>
          <td className="lgDate">2 Jun 2011</td>
          <td className="lgAmt">$122.00</td>

          <td className="lgSat">
            <Button type="Decline"></Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
