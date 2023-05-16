import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rockets.rockets);
  const rocketsStatus = useSelector((state) => state.rockets.status);
  const rocketsError = useSelector((state) => state.rockets.error);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  console.log('data', rocketsData);

  if (rocketsStatus === 'loading') {
    return (
      <h1 style={{ marginLeft: '40px' }}>Loading...</h1>
    );
  }

  if (rocketsError !== null) {
    return (
      <h1 style={{ marginLeft: '40px' }}>{rocketsError}</h1>
    );
  }
  return (
    <div>Rockets</div>
  );
}

export default Rockets;
