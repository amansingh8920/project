
import { useState } from 'react';
import './App.css'
import sgpcImage from './image/sgpcbanner.png'
import logo from './image/logo.png'
import darbar from './image/darbar.jpg'
import akaltakht from './image/akal.jpeg'
import kesgarh from './image/kesgarh.jpg'
import patna from './image/patna.jpg'
import hazur from './image/hazur.jpg'
import damdama from './image/damdama.jpg'
import youtube from './image/youtube.png'
import instagram from './image/instagram.png'
import facebook from './image/facebook.png'

export default function Navbar(){

   
    const takht = ['ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ, ਸ੍ਰੀ ਅੰਮ੍ਰਿਤਸਰ ਸਾਹਿਬ, ਪੰਜਾਬ ','ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਜੀ ਪਟਨਾ ਸਾਹਿਬ, ਬਿਹਾਰ ', 'ਸ੍ਰੀ ਕੇਸਗੜ ਸਾਹਿਬ, ਸ੍ਰੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ, ਪੰਜਾਬ ',' ਸ੍ਰੀ ਦਮਦਮਾ ਸਾਹਿਬ, ਸਾਬੋ ਕੀ ਤਲਵੰਡੀ, ਬਠਿੰਡਾ, ਪੰਜਾਬ ','ਸ੍ਰੀ ਅਬਿਚਲ ਨਗਰ ਹਜੂਰ ਸਾਹਿਬ ਨਾਂਦੇੜ, ਮਹਾਰਾਸ਼ਟਰ' ];
    
    const [hide,setHide] = useState(true);    
    const handle=()=>{ 
        if(hide){
             document.getElementById('lis').style.display="block";
             setHide(false);
        }else{
             setHide(true);
             document.getElementById('lis').style.display="none";
        }
    }
    
    return <div>
        <nav>
            <div className="nav-item"><img src={sgpcImage} alt="sgpc logo" id="sgpc"/></div>
            <div className="nav-item">SGPC ਸ੍ਰੀ ਅਮ੍ਰਿਤਸਰ ਸਾਹਿਬ</div>
            <div className="nav-item" id="menu"  onClick={handle}>Menu</div>
        </nav>
            <div >
                <ul id="lis">
                    <li className='lis-item'>Live kirtan Harmandir Sahib</li>
                    <li className='lis-item'>Hukamnama</li>
                    <li className="lis-item">Ragi List</li>
                    <li className='lis-item'>Room Booking</li>
                </ul>
            </div>
        <main>
            <div className='text-center'>
                <img src={logo} alt="sgpc" />
            </div>
            <div className='maindiv'>
                <section>
                     <div className="darbarimg">
                    <img src={darbar} alt="Darbar Sahib" id="darbar" />
                </div> 
                </section>
                <div className='innerdiv'>
                    <ul id='takht'>
                     5 Takht
                     { takht.map((t,key)=>{
                        return <li key={key}>{t}</li>
                     })}
                    </ul>
                </div>
                             
            </div>
            <p id='info'> For online sarai booking visit https://sgpcsaraibooking.net</p>
        </main>

        <div className='newsection'>
            <div id='s1'>
                <h2>5 Sarovar</h2>
                <div>Santoksar Sahib</div>
                <div>Ramsar Sahib</div>
                <div>Bibeksar Sahib</div>
                <div>Kaulsar Sahib</div>
                <div>Amritsar Sahib</div>
            </div>
            <div id='s2'>
                <div id="item1" className='takhtpic'> <img src={akaltakht} alt='akal takht' id='akal'/> </div>
                <div id="item2" className='takhtpic'><img src={patna} alt="patna sahib" /></div>
                <div id='item3' className='takhtpic'><img src={kesgarh} alt="kesgarh sahib" /></div>
                <div id="item4" className='takhtpic'><img src={damdama} alt="damdama sahib" /></div>
                <div id="item5" className='takhtpic'><img src={hazur} alt="hazur sahib"/></div>
            </div>
        </div>
         <footer>
            <a href="https://www.youtube.com/@SGPCSriAmritsar" className='footer'><img src={youtube} alt="youtube" id="youtube"/></a>
            <a href="http://www.instagram.com/sgpc_amritsar" className='footer'><img src= {instagram} alt="" /></a>
            <a href="http://www.facebook.com/sgpcamritsar.org" className='footer'><img src={facebook} alt="" /></a>  
            <h5 className='footer'>Copyright @ SGPC </h5>
        </footer>
    </div>
}