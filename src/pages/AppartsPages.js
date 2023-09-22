import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../sass/main.scss';
import Specifications from '../componentsJs/SpecSection';
import AppartInfos from '../componentsJs/AppartInfos';
import AppartHost from '../componentsJs/AppartHost';
import Slideshow from '../componentsJs/Slideshow';

function AppartPages() {
  const { id } = useParams();
  const [annonces, setAnnonces] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const annoncesFetch = async () => {
    try {
      const response = await fetch('/annonces.json');
      const responseData = await response.json();
      console.log(responseData);
      setAnnonces(responseData);
      setLoading(false);
    } catch (error) {
      console.log('Erreur', error);
    }
  };

  useEffect(() => {
    annoncesFetch();
  }, []);

  const annonce = annonces.find((annonce) => annonce.id === id);

  const equipmentList = annonce ? (
    <ul>
      {annonce.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>
  ) : null;

  useEffect(() => {
    if (!annonce && !loading) {
      navigate('/error');
    }
  }, [annonce, loading, navigate]);

  if (loading) {
    return <div>Contenu en cours de chargement...</div>;
  }

  if (!annonce) {
    return <div>Aucune annonce trouvée.</div>;
  }


  
  return (
    <main className="appart-page" key={annonce.id}>
      <section className="appart-cover">
        
        <div className="appart-page__carousel-navigation">
          <Slideshow gallery= {annonce.pictures}/>
        </div>
      </section>
      <section className="appart-page__infos-container">
        <AppartInfos title={annonce.title} location={annonce.location} tags={annonce.tags} />
        <AppartHost name={annonce.host.name} picture={annonce.host.picture} rating={annonce.rating} />
      </section>
      <section className="appart-page__spec-sections">
        <Specifications title='Description' contents={annonce.description} />
        <Specifications title='Equipements' contents={equipmentList} />
      </section>
    </main>
  );
}

export default AppartPages;