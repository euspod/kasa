import React, { useState, useEffect } from 'react';
import '../sass/main.scss';
import { NavLink } from 'react-router-dom';





function HomeApparts() {   
    const [annonces, setAnnonces] = useState([]);  

    const annoncesFetch = async() => {
                try {
                    const response = await fetch('annonces.json');
                    const responseData = await response.json();
                    console.log(responseData);  
                    setAnnonces(responseData);
                } catch(error) {
                    console.log('Erreur',error);
                }
            }
            useEffect(() => {
                annoncesFetch();
            }, [] );
                 
            
            return  (
                <div className='cards'>
                {annonces.map((annonce) => (
                        <NavLink className="cards__apparts" key={annonce.id} to={`/appartments/${annonce.id}`}>
                        <img className="cards__cover" src={annonce.cover} alt={annonce.title} />
                        <h2>{annonce.title}</h2>
                        </NavLink>
                ))}
                </div>
            );
    }
        
    


export default HomeApparts;
