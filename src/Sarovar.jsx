import santokhsar from './image/santokhsar.jpg'
import ramsar from './image/ramsar.jpeg'
import bibeksar from './image/bibeksar.jpeg'
import kaulsar from './image/kaulsar.jpeg'
import amritsar from './image/amritsar.jpg'
import './Sarovar.css'
import { useState } from 'react'
import righticon from './image/right-arrow.png'

export default function Sarovar() {

  const [index, setIndex] = useState(0);

  const sarovar = [
    { name: 'ਸੰਤੋਖਸਰ ਸਰੋਵਰ', imagesrc: santokhsar },
    { name: 'ਰਾਮਸਰ ਸਰੋਵਰ', imagesrc: ramsar },
    { name: 'ਬਿਬੇਕਸਰ ਸਰੋਵਰ', imagesrc: bibeksar },
    { name: 'ਕੌਲਸਰ ਸਰੋਵਰ', imagesrc: kaulsar },
    { name: 'ਸ੍ਰੀ ਅੰਮ੍ਰਿਤਸਰ ਸਰੋਵਰ', imagesrc: amritsar }
  ];


  const right = () => {

    if (index === sarovar.length - 1) {
      let x = 0;
      setIndex(x);
    } else {
      let x;
      x = index + 1;
      setIndex(x);
    }

  }
  return <div>
    <h3 id="shead"> 5 ਸਰੋਵਰ</h3>
    <div id='sarovar'>
      <div className='sitem'> 
        <div className='imagewrapper'>
          <img src={sarovar[index].imagesrc} alt="sarovar" />
        <li key={index}>{sarovar[index].name}</li>
        <button onClick={right} className='btn'><img src={righticon} alt="" /></button>
        </div>  
      </div>

    </div>
  </div>
}