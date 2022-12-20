import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Brief from './componenes/Brief/Brief';
import AddBrief from './componenes/Brief/AddBrief';
import { Breif } from './componenes/ContextBrief';
function App() {
  return (
    <div className="App">
      <>
      <Breif>
          <BrowserRouter>
            <Routes>
            <Route path='/Brief' element={<Brief/>} />
            <Route path='/AddBrief' element={<AddBrief/>} />
            </Routes>
        </BrowserRouter>
      </Breif>
      </>
    </div>
  );
}

export default App;
