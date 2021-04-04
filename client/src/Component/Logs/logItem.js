import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteLogs, SetCurrent } from '../../action/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';
const LogItem = ({
  log,
  log: { _id, attention, message, date, tech },
  deleteLogs,
  SetCurrent,
}) => {
  const onDelete = () => {
    deleteLogs(_id);
    M.toast({ html: 'Log Deleted', inDuration: 400 });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
          onClick={() => SetCurrent(log)}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          last updated by <span className="black-text">{tech}</span> on{' '}
          {moment(date).format('MMMM Do YYYY, h:mm:ss a')}
        </span>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLogs: PropTypes.func.isRequired,
  SetCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLogs, SetCurrent })(LogItem);
