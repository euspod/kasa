import { useLocation } from 'react-router-dom';


function Banner() {

  const location = useLocation();
  const currentPath = location.pathname;
  const bannerClass = currentPath === '/' ? 'banner-home' : 'banner-about';

  return (
    <div className={bannerClass}>
      Chez vous, <br />partout et ailleurs
    </div>
  );
}

export default Banner;