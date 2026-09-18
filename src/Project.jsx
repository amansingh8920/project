
import { useEffect, useState } from 'react';
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
import Hukamnama from './Hukamnama.jsx'

export default function Navbar() {

    const sarovar = ['ਸੰਤੋਖਸਰ ਸਰੋਵਰ', 'ਰਾਮਸਰ ਸਰੋਵਰ', 'ਬਿਬੇਕਸਰ ਸਰੋਵਰ', 'ਕੌਲਸਰ ਸਰੋਵਰ', 'ਸ੍ਰੀ ਅੰਮ੍ਰਿਤਸਰ ਸਰੋਵਰ'];
    const data = [
        {
            name: "ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ, ਸ੍ਰੀ ਅੰਮ੍ਰਿਤਸਰ ਸਾਹਿਬ, ਪੰਜਾਬ ",
            imagesrc: akaltakht
        },
        {
            name: "ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਜੀ ਪਟਨਾ ਸਾਹਿਬ, ਬਿਹਾਰ ",
            imagesrc: patna
        },
        {
            name: "ਸ੍ਰੀ ਕੇਸਗੜ ਸਾਹਿਬ, ਸ੍ਰੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ, ਪੰਜਾਬ ",
            imagesrc: kesgarh
        },
        {
            name: "ਸ੍ਰੀ ਦਮਦਮਾ ਸਾਹਿਬ, ਸਾਬੋ ਕੀ ਤਲਵੰਡੀ, ਬਠਿੰਡਾ, ਪੰਜਾਬ ",
            imagesrc: damdama
        },
        {
            name: "ਸ੍ਰੀ ਅਬਿਚਲ ਨਗਰ ਹਜੂਰ ਸਾਹਿਬ ਨਾਂਦੇੜ, ਮਹਾਰਾਸ਼ਟਰ",
            imagesrc: hazur
        }
    ]
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
            <div className="nav-item"><img src={sgpcImage} alt="sgpc logo" id="sgpc" /></div>
            <div className="nav-item">SGPC ਸ੍ਰੀ ਅਮ੍ਰਿਤਸਰ </div>
            <div className="nav-item" id="menu" onClick={handle}>Menu</div>
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
                        <Hukamnama />
                    </ul>
                </div>

            </div>
            <p id='info'> ਡਿਠੇ ਸਭੇ ਥਾਵ ਨਹੀ ਤੁਧੁ ਜੇਹਿਆ ॥ ਬਧੋਹੁ ਪੁਰਖਿ ਬਿਧਾਤੈ ਤਾਂ ਤੂ ਸੋਹਿਆ ॥ ਵਸਦੀ ਸਘਨ ਅਪਾਰ ਅਨੂਪ ਰਾਮਦਾਸਪੁਰ ॥ ਹਰਿਹਾਂ ਨਾਨਕ ਕਸਮਲ ਜਾਹਿ ਨਾਇਐ ਰਾਮਦਾਸ ਸਰ ॥੧੦॥</p>
        </main>

        <div className='newsection'>
            <div id='s1'>
                <h3>5 ਸਰੋਵਰ</h3>

                {sarovar.map((item, key) => {
                    return <div><li key={key}>{item}</li></div>
                })}
            </div>

            <div id='s2'>


                {data.map((t, key) => {
                    return <div id={'item' + (key + 1)}>
                        <img src={t.imagesrc} alt="takht" className='takhtpic' />
                        <li key={key} className='takhtname'>{t.name}</li>
                    </div>
                })}
            </div>
        </div>

        <footer>
            <a href="https://www.youtube.com/@SGPCSriAmritsar" className='footer'><img src={youtube} alt="youtube" id="youtube" /></a>
            <a href="http://www.instagram.com/sgpc_amritsar" className='footer'><img src={instagram} alt="" /></a>
            <a href="http://www.facebook.com/sgpcamritsar.org" className='footer'><img src={facebook} alt="" /></a>
            <h5 className='footer'>Copyright @ SGPC </h5>
        </footer>

    </div>
}