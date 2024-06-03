import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MasterPage from './Pages/MasterPage';

<!-- import Login from './Pages/Login';
import SignUp from './Pages/SignUp'; -->


function App() {
  return (
    <>
<!--         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/homepage" element={<MasterPage/>} />
            <Route path="/SignUp" element={<SignUp/>} />
          </Routes>
        </BrowserRouter> -->
      <MasterPage/>
    </>
  )
}

export default App;