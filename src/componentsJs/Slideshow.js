import React from 'react';

function Slideshow(props) {
   const gallery = props.gallery;
   console.log('gallery.length', gallery.length);
    return (
        <div className='slideshow-banner'>
            {gallery.map((picture)=>(
                <img key={picture} src={picture} alt=''className='slideshow-banner__img'></img>
            ))}
        
        </div>
    )

  }
  
  export default Slideshow;