import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookedRockets } from '../redux/rockets/rocketsSlice';
import RocketCard from '../components/RocketCard';

function Profile() {
  const reservedRockets = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookedRockets());
  }, [dispatch]);

  return (
    <>
      <h1 className="container">Booked Rockets</h1>
      {reservedRockets.reservedRockets.length !== 0 ? '' : <p className="container">Please Book some Rockets</p>}
      {reservedRockets.reservedRockets?.map((item) => (
        <RocketCard
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          flickrImages={item.image}
          reserved={item.reserved}
        />
      ))}
      ;
    </>
  );
}

export default Profile;
