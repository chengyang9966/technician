import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTechs } from '../../action/techAction';
const AddTechModalModal = ({ addTechs }) => {
  const [firstName, SetFirstName] = useState('');
  const [lastName, SetLastName] = useState('');

  const onsubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a first and last name' });
    } else {
      const AddTag = {
        firstName,
        lastName,
      };
      addTechs(AddTag);
      M.toast({ html: `${firstName} ${lastName} was added as tech` });
      SetFirstName('');
      SetLastName('');
    }
  };
  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => SetFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name{' '}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="LastName"
              value={lastName}
              onChange={(e) => SetLastName(e.target.value)}
            />
            <label htmlFor="LastName" className="active">
              Last Name{' '}
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          disabled={firstName === '' || lastName === ''}
          onClick={onsubmit}
          className="modal-close waves-effect blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};
AddTechModalModal.prototype = {
  addTechs: PropTypes.func.isRequired,
};
export default connect(null, { addTechs })(AddTechModalModal);
