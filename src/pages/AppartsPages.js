import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../sass/main.scss';
import Specifications from '../componentsJs/SpecSection';
import AppartCover from '../componentsJs/AppartCover';
import AppartInfos from '../componentsJs/AppartInfos';
import AppartHost from '../componentsJs/AppartHost';

function AppartPages() {
  const { id } = useParams();
  const [annonces, setAnnonces] = useState([]);

  const annoncesFetch = async () => {
    try {
      const response = await fetch('/annonces.json');
      const responseData = await response.json();
      console.log(responseData);
      setAnnonces(responseData);
    } catch (error) {
      console.log('Erreur', error);
    }
  };

  useEffect(() => {
    annoncesFetch();
  }, []);

  const annonce = annonces.find((annonce) => annonce.id === id);

  if (!annonce) {
    return <div>Chargement...</div>;
  }

  return (
    <main className="appart-page" key={annonce.id}>
      <section className="appart-cover">
        <AppartCover image={annonce.cover} />
      </section>
      <section className="appart-page__infos-container">
        <AppartInfos />
        <AppartHost />
      </section>
      <section className="appart-page__spec-sections">
        <Specifications />
        <Specifications />
      </section>
    </main>
  );
}

export default AppartPages;