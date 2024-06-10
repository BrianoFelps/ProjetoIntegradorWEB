import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MasterPage from './Pages/MasterPage';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { useState } from 'react';


function App() {
  const [userName, setUserName] = useState('');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUser={setUserName} />} />
          <Route path="/homepage" element={<MasterPage userName={userName} />} />
          <Route path="/SignUp" element={<SignUp setUser={setUserName}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
