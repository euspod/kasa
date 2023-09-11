import annonces from './annonces.json'

function Annonces() {
    return (
      <div>
        {annonces.map((annonce)=> (
          <div key = {annonce.id}>
          <h2>{annonce.title}</h2>
          <p>{annonce.description}</p>
          </div>
        ))}
      </div>
    );
  }
  export default Annonces;