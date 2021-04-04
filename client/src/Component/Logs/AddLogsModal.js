import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLogs } from '../../action/logActions';
import TechSelectOptions from '../texts/TechSelectOptions';
const AddLogsModal = ({ addLogs }) => {
  const [message, SetMsg] = useState('');
  const [attention, SetAttention] = useState(false);
  const [tech, SetTech] = useState('');

  const onsubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      const NewLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };
      addLogs(NewLog);
      M.toast({ html: `Log Addded By ${tech}` });
      SetMsg('');
      SetAttention(false);
      SetTech('');
    }
  };
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => SetMsg(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message{' '}
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => SetTech(e.target.value)}
            >
              <option value="" disabled>
                Select Tech
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => {
                    SetAttention(!attention);
                  }}
                />
                <span>Need Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          disabled={message === '' || tech === ''}
          onClick={onsubmit}
          className="modal-close waves-effect blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};
const modalStyle = {
  width: '75%',
  height: '75%',
};
AddLogsModal.prototype = {
  addLogs: PropTypes.func.isRequired,
};
export default connect(null, { addLogs })(AddLogsModal);
