import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookedRockets } from '../redux/rockets/rocketsSlice';

function Profile() {
  const reservedRockets = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookedRockets());
  }, [dispatch]);
  console.table(reservedRockets);
  return (
    <div>Profile</div>
  );
}

export default Profile;
