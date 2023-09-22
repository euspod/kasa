import React, {useState} from 'react';


function Slideshow(props) {
  
   const gallery = props.gallery;
   console.log('gallery.length', gallery.length);
   console.log('gallery.picture', gallery[0]);
   const [currentPicture, setCurrentPicture] = useState(0);
   const getClassName = (i) => {
    if (i === currentPicture) return 'show-next';
    if (i === (currentPicture - 1 + gallery.length) % gallery.length) return 'show-prev';
    return '';
  };
   const settNext = () => (
    setCurrentPicture((currentPicture +1)% gallery.length)
   );

   const setPrev = () => {
    const newCurrentPicture = currentPicture -1;
    if (newCurrentPicture < 0) {
        setCurrentPicture(gallery.length -1);
        return;
    }
    setCurrentPicture((currentPicture - 1)% gallery.length);
   };

  

   return (
    <div className='slideshow'>
        <div className='slideshow-banner'>
            {gallery.length === 1 ? (
                <img src={gallery[0]} alt='' className={`slideshow-banner__img ${getClassName(0)}`} />
            ) : (
                <>
                    {gallery.map((picture, i) => (
                        <img src={picture} alt='' key={picture} className={`slideshow-banner__img ${getClassName(i)}`} />
                    ))}
                    <span className='slideshow-banner__counter'>{currentPicture + 1}/{gallery.length}</span>
                    <i className='fa-solid fa-chevron-right xl slideshow-banner__btn-next' onClick={settNext}></i>
                    <i className='fa-solid fa-chevron-left xl slideshow-banner__btn-prev ' onClick={setPrev}></i>
                </>
            )}
        </div>
    </div>
)
 
   }
   
   export default Slideshow;