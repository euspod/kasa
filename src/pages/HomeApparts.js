import React, { useState, useEffect } from 'react';
import '../sass/main.scss';
import { NavLink } from 'react-router-dom';
import CoverLoader from '../componentsJs/CoverLoader';





function HomeApparts() {   
    const [annonces, setAnnonces] = useState([]);  
    const [isDataLoading, setDataLoading] = useState(false)
    const annoncesFetch = async() => {
        setDataLoading(true)
                try {
                    const response = await fetch('annonces.json');
                    const responseData = await response.json();
                    console.log(responseData);  
                    setAnnonces(responseData);
                } catch(error) {
                    console.log('Erreur',error);
                }
                finally {
                    setDataLoading(false);
                }
            }
            useEffect(() => {
                annoncesFetch();
            }, [] );
                
            
            return  (
                <div className='cards'>
                {annonces.map((annonce) => (
                        <NavLink className="cards__apparts" key={annonce.id} to={`/appartments/${annonce.id}`}>
                              {isDataLoading ? ( <CoverLoader />) :
                              (<img className="cards__cover" src={annonce.cover} alt={annonce.title} />)
                              }
                        <h2>{annonce.title}</h2>
                        </NavLink>
                ))}
                </div>
            );
    }
        
    


export default HomeApparts;
