import Home from './VIEWS/HOME/home.jsx';
import Landing from './VIEWS/LANDING/landing.jsx';
import Form from './VIEWS/FORM/form.jsx';
import Detail from './VIEWS/DETAIL/detail.jsx';
import { Route } from 'react-router-dom';

function App() {
  return (
  <div className="App">
    <Route exact path='/' element={<Landing/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/create' element={<Form/>}></Route>
    <Route path='/home/:id' element={<Detail/>}></Route>
    </div>
  );
};

export default App;
