import sgpcImage from './image/sgpcbanner.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Hukamnamapage from './Hukamnamapage.jsx';
import Sarovar from './Sarovar.jsx'
import Takht from './Takht.jsx';
import './Nav.css'

export default function Nav() {

    const [hide, setHide] = useState(true);

    const handle = () => {
        if (hide) {
            document.getElementById('lis').style.display = "block";
            setHide(false);
        } else {
            setHide(true);
            document.getElementById('lis').style.display = "none";
        }
    }

    return <div>

        <nav>
            <div className="nav-item"><img src={sgpcImage} alt="sgpc logo" id="sgpc"/></div>
            <div className="nav-item">SGPC ਸ੍ਰੀ ਅਮ੍ਰਿਤਸਰ </div>
            <div className="nav-item" id="menu" onClick={handle}>Menu</div>
        </nav>


        <div >

            <HashRouter>
                <ul id="lis">
                    <li className="lis-item" ><Link to="/">Home</Link></li>
                    <li className='lis-item' ><Link to="/takht">Takht</Link></li>
                    <li className='lis-item' ><Link to="/sarovar">Sarovar</Link></li>
                    <li className="lis-item" ><Link to="/hukamnama">Hukamnama</Link></li>

                </ul>
                <Routes>
                    <Route path='/' element={<Project />}></Route>
                    <Route path='/takht' element={<Takht />}></Route>
                    <Route path='/hukamnama' element={<Hukamnamapage />}></Route>
                    <Route path='/sarovar' element={<Sarovar />}></Route>
                </Routes>
            </HashRouter>
        </div>
    </div>
}