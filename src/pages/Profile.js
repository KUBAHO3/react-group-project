import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const missionsData = useSelector((state) => state.missions.missions);
  const joinedMissions = missionsData.filter((mission) => mission.joined);

  const profileStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '20px auto',
  };

  const ulStyles = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  };

  const listStyles = {
    border: '1px solid lightgrey',
    padding: '10px 25vw 10px 20px',
  };

  return (
    <div style={profileStyle} className="profile">
      <div className="mission">
        <h2 className="mission-h1">My Missions</h2>
        <ul style={ulStyles} className="mission-ul">
          { joinedMissions.map((mission) => (
            <li style={listStyles} className="mission-li" key={mission.mission_id}>{ mission.mission_name }</li>
          )) }
        </ul>
      </div>

      <div>
        <h2>My Rockets</h2>
      </div>
    </div>
  );
}

export default Profile;
