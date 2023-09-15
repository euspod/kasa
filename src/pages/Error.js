import '../sass/main.scss';
import Footer from '../componentsJs/Footer';
import Navbar from '../componentsJs/Navbar';
import { Link } from 'react-router-dom';

function Error() {
    return <>
    <div className='page-layout'>
    <Navbar />
        <div className='error-page'>
            <p className='error-page__404'>404</p>
            <p className='error-page__message'>Oups! La page que <br />vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d'accueil.</Link>
        </div>
    </div>
    <Footer />
    </>
};
export default Error;