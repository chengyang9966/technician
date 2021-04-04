import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GetTechs } from '../../action/techAction';

const TechSelectOptions = ({ GetTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    GetTechs();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option
        value={`${t.firstName} ${t.lastName}`}
        key={`${t._id}${t.firstName}`}
      >
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};
TechSelectOptions.prototype = {
  tech: PropTypes.object.isRequired,
  GetTechs: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  tech: state.tech,
});

const mapDispatchToProps = {
  GetTechs,
};

export default connect(mapStateToProps, mapDispatchToProps)(TechSelectOptions);
