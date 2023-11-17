import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Create from './Components/Create';
import Home from './Pages/Home';
import Read from './Components/Read';
import Update from './Components/Update';






function App() {
  return (
    <div className="App">
<Header/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/add' element={<Create/>}></Route>
    <Route path='/read' element={<Read/>}></Route>
    <Route path='/edit/:id' element={<Update/>}></Route>
   </Routes>
    </div>
  );
}

export default App;
