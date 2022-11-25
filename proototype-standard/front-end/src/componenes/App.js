import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Header/Nav';
import Promotion from './Header/Promotion';
import Brief from './Header/Brief';
import Apprenant from './Header/Apprenant';
import AddBrief from './Brief/AddBrief';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>}/>
          <Route path='/Promotion' element={<Promotion/>} />
          <Route path='/Apprenant' element={<Apprenant/>} />
          <Route path='/Brief' element={<Brief/>} />
          <Route path='/AddBrief' element={<AddBrief/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
