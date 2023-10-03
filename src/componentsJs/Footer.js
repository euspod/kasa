import logo from '../assets/logo-white.png';
import { useLocation } from 'react-router-dom';

function Footer({ router }) {

    const location = useLocation();
    const currentPath = location.pathname;
    const footerClass = currentPath === '/error' ? 'footer-error' : currentPath === '/about' ? 'footer-about' : 'footer';

    return <div className={footerClass}>
        <img className="footer__img" src={logo} alt="logo Kasa blanc" />
        <p>ⓒ 2020 Kasa. All rights reserved</p>
    </div>
}
export default Footer;