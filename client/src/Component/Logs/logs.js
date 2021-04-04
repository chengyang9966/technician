import React, { useEffect } from 'react';
import LogItem from './logItem';
import Preloader from '../Layout/Preloader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLogs } from '../../action/logActions';
const Logs = (props) => {
  const {
    log: { logs, loading },
    getLogs,
  } = props;
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return <Preloader />;
  }
  if (logs === null) {
    return <p className="center">Add New Logs ...</p>;
  }
  return (
    <div style={{ marginLeft: '60px', marginRight: '60px' }}>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center">No Logs to show ...</p>
        ) : (
          logs.map((w, i) => {
            return <LogItem log={w} key={`${w}, ${i}`} />;
          })
        )}
      </ul>
    </div>
  );
};

Logs.prototype = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
