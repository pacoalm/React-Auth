import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Preferences from './Components/Preferences/Preferences';
import HomePage from './Components/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import useToken from './useToken';

// @ts-ignore

function App() {
  const { token, setToken } = useToken();

  // @ts-ignore
  if (!token) {
    // @ts-ignore
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <HomePage />
      <BrowserRouter>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
