import youtube from './image/youtube.png'
import instagram from './image/instagram.png'
import facebook from './image/facebook.png'
import './Footer.css'

export default function Footer(){
    return <div className='footerdiv'>
            <footer>
            <a href="https://www.youtube.com/@SGPCSriAmritsar" className='footer'><img src={youtube} alt="youtube" /></a>
            <a href="http://www.instagram.com/sgpc_amritsar" className='footer'><img src={instagram} alt="instagram" /></a>
            <a href="http://www.facebook.com/sgpcamritsar.org" className='footer'><img src={facebook} alt="facebook" /></a>
            <h5 className='footer'>Copyright @ SGPC </h5>
        </footer>
    </div>
}