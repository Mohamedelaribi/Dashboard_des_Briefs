import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Promotion from './componentes/promotions/Promotion';
import AddPromotion from './componentes/promotions/AddPromotion';
import EditPromotion from './componentes/promotions/EditPromotion';
import Apprenant from './componentes/apprenants/Apprenant';
import Brief from './componentes/briefs/Brief';
import Home from './componentes/home/Home';
import SidBar from './componentes/SideBar/SideBar';
import TopBar from './componentes/topBar/TopBar';
import ConsulterBrief from './componentes/briefs/ConsulterBrief';
import Task from './componentes/briefs/Task';
import PlusDetail from './componentes/briefs/PlusDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar/>
        <div className='container'>
            <SidBar/>
          <div className='rightcontaint'>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Promotion' element={<Promotion/>}/>
          <Route path='/AddPromotion' element={<AddPromotion/>}/>
          <Route path='/promotion/:id/edit' element={<EditPromotion/>}/>
          <Route path='/Apprenant' element={<Apprenant/>}/>
          <Route path='/Brief' element={<Brief/>}/>
          <Route path='/ConsulterBrief/:id' element={<ConsulterBrief/>}/>
          <Route path='Brief/:id/tasks' element={<Task/>}/>
          <Route path='Brief/:id/plusdetail' element={<PlusDetail/>}/>
          
          
          </Routes>
        </div>

        </div>

      
      </BrowserRouter>

    </div>
  );
}

export default App;
