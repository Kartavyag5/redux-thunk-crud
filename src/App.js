import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import AddUser from './pages/AddUser';




function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addUser' element={<AddUser/>} />
      </Routes>
      
    </div>
  );
}

export default App;
