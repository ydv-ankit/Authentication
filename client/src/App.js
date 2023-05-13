import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import { Home } from './components/Home';
import { Adminpanel } from './components/Adminpanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Adminpanel />} />
      </Routes>
    </Router>
  );
}

export default App;
