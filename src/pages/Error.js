import '../sass/main.scss';
import { Link } from 'react-router-dom';

function Error() {
 
    return <>
    <div className='page-layout'>
        <div className='error-page'>
            <p className='error-page__404'>404</p>
            <p className='error-page__message'>Oups! La page que <br />vous demandez n'éxiste pas.</p>
            <Link to='/'>Retourner sur la page d'accueil.</Link>
        </div>
    </div>
    </>
};
export default Error;