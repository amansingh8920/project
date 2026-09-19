import santokhsar from './image/santokhsar.jpg'
import ramsar from './image/ramsar.jpeg'
import bibeksar from './image/bibeksar.jpeg'
import kaulsar from './image/kaulsar.jpeg'
import amritsar from './image/amritsar.jpg'
import './App.css'

export default function Sarovar(){

    const sarovar = [
            {name:'ਸੰਤੋਖਸਰ ਸਰੋਵਰ',imagesrc:santokhsar}, 
            {name:'ਰਾਮਸਰ ਸਰੋਵਰ', imagesrc:ramsar}, 
            {name:'ਬਿਬੇਕਸਰ ਸਰੋਵਰ',imagesrc:bibeksar}, 
            {name:'ਕੌਲਸਰ ਸਰੋਵਰ',imagesrc:kaulsar}, 
            {name:'ਸ੍ਰੀ ਅੰਮ੍ਰਿਤਸਰ ਸਰੋਵਰ',imagesrc:amritsar}
        ];

    return    <div>
      <h3 id="shead"> 5 ਸਰੋਵਰ</h3>
        <div id='sarovar'>
                {sarovar.map((item, key) => {
                    return <div className='sitem'>
                      <img src={item.imagesrc} alt="sarovar" />
                      <li key={key}>{item.name}</li>
                    </div>
                })}
    </div>
    </div>
}