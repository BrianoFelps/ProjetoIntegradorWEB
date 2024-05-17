import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MasterPage from './Pages/MasterPage';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/homepage" element={<MasterPage/>} />
            <Route path="/" element={<SignUp/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;