import './Project.css'
import logo from './image/logo.png'
import darbar from './image/darbar.jpg'
import Hukamnama from './Hukamnama.jsx'


export default function Project() {

    return <div>
     

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
                    <ul id='hukam'>
                        <Hukamnama />
                    </ul>
                </div>

            </div>
            <p id='info'> ਡਿਠੇ ਸਭੇ ਥਾਵ ਨਹੀ ਤੁਧੁ ਜੇਹਿਆ ॥ ਬਧੋਹੁ ਪੁਰਖਿ ਬਿਧਾਤੈ ਤਾਂ ਤੂ ਸੋਹਿਆ ॥ ਵਸਦੀ ਸਘਨ ਅਪਾਰ ਅਨੂਪ ਰਾਮਦਾਸਪੁਰ ॥ ਹਰਿਹਾਂ ਨਾਨਕ ਕਸਮਲ ਜਾਹਿ ਨਾਇਐ ਰਾਮਦਾਸ ਸਰ ॥੧੦॥</p>
        </main>

        <div className='livesection'>         
              <section id='live'>
                Live Kirtan Darbar Sahib
                   <audio controls>        
                <source src="https://live.sgpc.net:8442/; nocache=889869" type="audio/mpeg"></source>
            </audio> 
            </section>
        </div>

    </div>
}