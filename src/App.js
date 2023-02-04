import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ListeEnchereComponent from './component/ListeEnchereComponent';
import LoginUser from './component/LoginUser';
import HistoriqueProp from './component/HistoriqueProp';
import EnchereEncoursComponent from './component/EnchereEncoursComponent';
import HistoriqueUser from './component/HistoriqueUser';
import EnchereByIdComponent from './component/EnchereByIdComponent';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/encheres' element={<ListeEnchereComponent/>}></Route>
        <Route exact path='/historiqueProp' element={<HistoriqueProp/>}></Route>
        <Route exact path='/historiqueUser' element={<HistoriqueUser/>}></Route>
        <Route exact path='/encours' element={<EnchereEncoursComponent/>}></Route>
        <Route exact path='/enchereById' element={<EnchereByIdComponent />}></Route>
       <Route exact path='/' element={<LoginUser/>}></Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
