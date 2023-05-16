import React from 'react';

function RocketCard() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-3"><img src="https://cdn.mos.cms.futurecdn.net/qTmvroik2NtHVGsfCHyyxF-1200-80.jpg" className="img-thumbnail" alt="rocketThumb" /></div>
        <div className="col-9">
          <h4>Falcon1</h4>
          <p>some text</p>
          <button type="button" className="btn btn-primary">Primary</button>
        </div>
      </div>
    </div>
  );
}

export default RocketCard;
