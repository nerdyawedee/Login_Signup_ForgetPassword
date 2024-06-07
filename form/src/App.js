import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Component/Signup'
import Signin from './Component/Signin'
import Home from './Component/Home'
import ForgetPassword from './Component/ForgetPassword.js';
import NewSubmit from './Component/NewSubmit.js';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/forget-pass' element={<ForgetPassword />} />
          <Route path='/submit' element={<NewSubmit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
