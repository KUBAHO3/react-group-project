import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookedRockets } from '../redux/rockets/rocketsSlice';

function Profile() {
  const reservedRockets = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookedRockets());
  }, [dispatch]);

  const missionsData = useSelector((state) => state.missions.missions);
  const joinedMissions = missionsData.filter((mission) => mission.joined);

  const profileStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    margin: '20px auto',
  };

  const ulStyles = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  };

  const listStyles = {
    border: '1px solid lightgrey',
    padding: '15px 25vw 15px 20px',
  };

  return (
    <div style={profileStyle} className="profile">
      <div className="missions">
        <h2 className="missions-h1">My Missions</h2>
        <ul style={ulStyles} className="missions-ul">
          { joinedMissions.map((mission) => (
            <li style={listStyles} className="missions-li" key={mission.mission_id}>{ mission.mission_name }</li>
          )) }
        </ul>
      </div>
      <div className="rockets">
        <h2 className="rockets-h1">My Rockets</h2>
        <ul style={ulStyles} className="rockets-ul">
          {reservedRockets.reservedRockets.length !== 0 ? '' : <p className="container">Please Book some Rockets</p>}
          {reservedRockets.reservedRockets?.map((item) => (
            <li style={listStyles} className="missions-li" key={item.id}>{ item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
