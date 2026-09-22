import akaltakht from './image/akal.jpeg'
import kesgarh from './image/kesgarh.jpg'
import patna from './image/patna.jpg'
import hazur from './image/hazur.jpg'
import damdama from './image/damdama.jpg'
import './Takht.css'
import { useState } from 'react'
import righticon from './image/right-arrow.png'

export default function Takht() {
     const [index, setIndex]= useState(0);

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

     const right = () => {

    if (index === data.length - 1) {
      let x = 0;
      setIndex(x);
    } else {
      let x;
      x = index + 1;
      setIndex(x);
    }

  }

    return <div id='takhtdiv'>
             <h3>5 ਤਖ਼ਤ</h3>
             <div className='takhtitem'>
                <img src={data[index].imagesrc} alt="takht" className='takhtpic' />
                <li key={index} className='takhtname'>{data[index].name}</li>
                <button onClick={right} className='btn'><img src={righticon} alt="right" /></button>
            </div>
            
    </div>
}