import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GetTechs } from '../../action/techAction';
const TechListModal = ({ GetTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    GetTechs();
  }, []);

  return (
    <div style={{ marginLeft: '60px', marginRight: '60px' }}>
      <div id="tech-list-modal" className="modal">
        <div className="modal-content">
          <h4>Technician List</h4>
          <ul className="collection">
            {!loading &&
              techs !== null &&
              techs.map((w, i) => <TechItem tech={w} key={`${w._id},${i}`} />)}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});
TechListModal.PropsType = {
  tech: PropTypes.object.isRequired,
  GetTechs: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, { GetTechs })(TechListModal);
