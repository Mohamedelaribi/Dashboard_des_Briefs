import {Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home'; 
import Addtodos from './components/todoviews/Addtodos';
import Edittodos from './components/todoviews/Edittodos';
import Indextodos from './components/todoviews/Indextodos';
import {BrowserRouter} from 'react-router-dom';



function App() {
  return (
    <div className="App">

    <nav>
        <ul>
            <li>
              <Link to="/" >Home</Link>  </li>
            <li> 
              <Link to="/Indextodos" >Indextodos</Link> </li>
            <li>
            <Link to="/Addtodos" >Addtodos</Link>  </li>
        
            <li>
            <Link to="/Edittodos/:id" >Edittodos</Link>  </li>
        
        </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Addtodos' element={<Addtodos/>}/>
      <Route path='/Indextodos' element={<Indextodos/>}/>
      <Route path='/Edittodos/:id' element={<Edittodos/>}/>
     </Routes>

    </div>
    

  );
}

export default App;
