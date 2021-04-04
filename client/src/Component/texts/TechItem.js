import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { deleteTechs } from '../../action/techAction';
const TechItem = ({ tech, deleteTechs }) => {
  const { firstName, lastName, _id } = tech;
  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a
          href="#!"
          className="secondary-content modal-close"
          onClick={() => {
            deleteTechs(_id);
            M.toast({
              html: `${firstName} ${lastName} technician has been deleted`,
            });
          }}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTechs: PropTypes.func.isRequired,
};

export default connect(null, { deleteTechs })(TechItem);
