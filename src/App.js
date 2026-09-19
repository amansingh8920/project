import './App.css';
import Project from './Project'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './Nav.jsx'
import Takht from './Takht.jsx';
import Footer from './Footer.jsx'
import Hukamnamapage from './Hukamnamapage.jsx';
import Sarovar from './Sarovar.jsx'

function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Project/> }></Route>
          <Route path='/takht' element={<Takht/> }></Route>
          <Route path='/hukamnama' element={<Hukamnamapage/> }></Route>
          <Route path='/sarovar' element={<Sarovar/> }></Route>
       </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
