import Home from './VIEWS/HOME/home.jsx';
import Landing from './VIEWS/LANDING/landing.jsx';
import Form from './VIEWS/FORM/form.jsx';
import Detail from './VIEWS/DETAIL/detail.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './COMPONENTS/NavBar/NavBar';

function App() {
  const location=useLocation;
  return (
  <div className="App">
    <h1>Hola</h1>
    {location.pathname !== "/" && <NavBar/>}
    <Routes>
    <Route exact path='/' element={<Landing/>}></Route>
    <Route exact path='/create' element={<Form/>}></Route>
    <Route exact path='/detail' element={<Detail/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    </Routes>
  </div>
  );
};

export default App;
