import './sass/main.scss'; 
import annonces from './annonces.json';

function Appartments() {
    return  (
            <div className='cards'>
        {annonces.map((item, index) => (
                <div className="cards__apparts" key={index}>
                    <img className="cards__cover" src={item.cover} alt={item.title} />
                    <h2>{item.title}</h2>
                </div>
        ))}
            </div>
    );
}
export default Appartments