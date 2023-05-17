import React from 'react';
import PropTypes from 'prop-types';

function RocketCard({
  id, name, description, flickrImages, onClick,
}) {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-3"><img src={flickrImages} className="img-thumbnail" alt="rocketThumb" /></div>
        <div className="col-9">
          <h4>{name}</h4>
          <p>{description}</p>
          <button type="button" className="btn btn-primary" id={id} onClick={(e) => onClick(e)}>Reserve rockets</button>
        </div>
      </div>
    </div>
  );
}

RocketCard.defaultProps = {
  id: '',
  name: '',
  description: '',
  flickrImages: '',
  onClick: '',
};
RocketCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  flickrImages: PropTypes.string,
  onClick: PropTypes.func,
};

export default RocketCard;
