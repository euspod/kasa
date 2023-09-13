
import '../sass/main.scss';
import annonces from '../annonces.json';
import { NavLink } from 'react-router-dom';
import Banner from '../componentsJs/Banner';


function Home() {
  return  (
      <div className='cards'>
{annonces.map((item, index) => (
        <div className="cards__apparts" key={index}>
            <img className="cards__cover" src={item.cover} alt={item.title} />
            <NavLink to="/appartments">
                <h2>{item.title}</h2>
            </NavLink>
        </div>
))}
    </div>
);
}


export default Home;
