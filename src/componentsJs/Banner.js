import { useLocation } from 'react-router-dom';


function Banner() {
 
  const location = useLocation();
  const currentPath = location.pathname;
  console.log('currentPath',currentPath);
  const bannerClass = currentPath === '/' ? 'banner-home' : 'banner-about';

  return (
    <div className={bannerClass}>
      Chez vous, <br />partout et ailleurs
    </div>
  );
}

export default Banner;