import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Lost from './pages/Lost'
import UpdatePassword from './pages/components/UpdatePassword';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Login />} />
      <Route path='/updatepassword' element={<UpdatePassword />} />
      <Route path='*' element={<Lost />} />
    </Routes>
  );
}

export default App;
