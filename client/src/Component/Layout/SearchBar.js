import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../action/logActions';
const SearchBar = ({ searchLogs }) => {
  const text = useRef('');
  return (
    <nav style={{ marginBottom: '30px' }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs...."
              ref={text}
              onChange={(e) => {
                searchLogs(text.current.value);
              }}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.prototype = {
  searchLogs: PropTypes.array.isRequired,
};
export default connect(null, { searchLogs })(SearchBar);
