import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="missions" element={<Missions />} />
          <Route path="rockets" element={<Rockets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
