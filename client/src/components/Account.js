import React, { useState } from 'react';


function Account() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSave = () => {
    
    console.log('Saved!', firstName, lastName, phoneNumber);
  };

  return (
    <div>
    <div className="account-details">
      <h1>My Details</h1>

      <div className="details-header">
        <h2>Personal Details</h2>
        <hr />
      </div>

      <div className="name-inputs">
        <div className="form-group">
          <h3>First Name</h3>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <h3>Last Name</h3>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <h3>Phone Number</h3>
        <input
          type="text" placeholder="Phone number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
            <div className="email-input">
               <h3>Email Address</h3>
                 <input type="email" placeholder="Email Address" required />
                   </div>
                       </div>
           <button type="button" onClick={handleSave}>
             Save
               </button>
            </div>
              <div>
  
      </div>
      
    </div>
  );
}

export default Account;
