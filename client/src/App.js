import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Registion } from './component/Registaion';
import { Signin } from './component/signin';
import { Viewuser } from './component/viewuser';
import { Overview } from './component/overview';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Registion/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/viewdet' element={<Viewuser/>}/>
      <Route path='/overview' element={<Overview/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
