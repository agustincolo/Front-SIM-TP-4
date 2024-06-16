import './App.css'
import Parametros from './components/Parametros';
import VectorTabla from './components/VectorTabla';
import './css/Main.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (<>
  <Router>
      <Routes>
        <Route path="" element = {<Parametros/>}/>
        <Route path='/Vector' element={<VectorTabla/>}/>
      </Routes>
  </Router>
  </>)
}

export default App
