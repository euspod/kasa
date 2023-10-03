import React, { useState, useEffect } from 'react';
import '../sass/main.scss';
import { NavLink } from 'react-router-dom';

function HomeApparts() {
  const [annonces, setAnnonces] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [imageLoadStatus, setImageLoadStatus] = useState({});

  const annoncesFetch = async () => {
    setDataLoading(true);
    try {
      const response = await fetch('annonces.json');
      const responseData = await response.json();
      setAnnonces(responseData);
    }
    catch (error) {
      
    }
    finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    annoncesFetch();
  }, []);

  const handleImageLoad = (id) => {
    setImageLoadStatus((prevStatus) => ({
      ...prevStatus,
      [id]: true,
    }));
  };

  const isImageLoaded = (id) => {
    return imageLoadStatus[id] === true;
  };

  return (
    <div className="cards">
      {isDataLoading && <></>}
      {annonces.map((annonce) => (
        <NavLink className="cards__apparts" key={annonce.id} to={`/appartments/${annonce.id}`}>
          {!isImageLoaded(annonce.id) && <p className="cards__cover-loader"></p>}
          <img className={`cards__cover ${isImageLoaded(annonce.id) ? 'loaded' : ''}`} src={annonce.cover} alt={annonce.title} onLoad={() => handleImageLoad(annonce.id)} />
          <h2>{annonce.title}</h2>
        </NavLink>
      ))}
    </div>
  );
}

export default HomeApparts;