// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';

import Profile from './components/profile';
import Holidays from './components/holidays';
import Time from './components/time';
import Dashboard from './components/dashboard';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="holiday" element={<Holidays />} />
          <Route path="time" element={<Time />} /> 
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
