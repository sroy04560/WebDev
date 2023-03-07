import React from 'react';
import './newUser.css';

export default function newUser() {
  return (
    <div className="new">
      <h1 className="newTitle">New User</h1>
      <form className="newForm">
        <div className="newItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>

        <div className="newItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>

        <div className="newItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>

        <div className="newItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>

        <div className="newItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 333 4444 555" />
        </div>
        <div className="newItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>

        <div className="newItem">
          <label>Gender</label>
          <div className="gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>

            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>

            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
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
  );
}
