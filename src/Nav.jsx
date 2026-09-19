import sgpcImage from './image/sgpcbanner.png'
import { useState } from 'react';

export default function Nav(){

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

        const handle1=()=>{
            document.location='/takht'
        }
        
        const handle2=()=>{
            document.location='/sarovar'
        }

        const handle3=()=>{
            document.location='/hukamnama'
        }

        const handle4=()=>{
            document.location='/'
        }
    
    return <div>
        
           <nav>
                    <div className="nav-item"><img src={sgpcImage} alt="sgpc logo" id="sgpc" onClick={handle4}/></div>
                    <div className="nav-item">SGPC ਸ੍ਰੀ ਅਮ੍ਰਿਤਸਰ </div>
                    <div className="nav-item" id="menu" onClick={handle}>Menu</div>
            </nav>
        
        
                <div >
                    <ul id="lis">
                       <li className='lis-item' onClick={handle1}>5 Takht</li>
                        <li className='lis-item' onClick={handle2}>5 Sarovar</li>
                        <li className="lis-item" onClick={handle3}>Hukamnama</li>
                       
                    </ul>
                </div>
    </div>
}