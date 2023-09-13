import '../sass/main.scss';
import { NavLink } from 'react-router-dom';
import host from '../assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg';
import Specifications from '../componentsJs/Spec-section';


 function Pages() {
    return  (
       <main className="appart-page">
            <section>
                <img className='appart-page__cover' src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="appart cover"/>
            </section>
            <section className='appart-page__infos-container'>
                <div className='appart-page__infos'>
                    <h1>Cozy loft, Canal Saint Martin</h1>
                    <h2>Paris, Ile de France</h2>
                    <div className='appart-page__tags'>
                        <span className='appart-page__tag'>Cozy</span>
                        <span className='appart-page__tag'>Canal</span>
                        <span className='appart-page__tag'>Canal saint martin</span>
                    </div>
                </div>
                <div className='appart-page__host'>
                    <div class="appart-page__profile">
                    <div>Alexandre<br></br>Dumas</div>
                    <img src={host} alt="appartment host"/>
                        </div>
                    <div className='appart-page__rating'>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                    </div>
                </div>
            </section>
          <section className='appart-page__spec-sections'>
              <Specifications />
              <Specifications />
          </section>
        </main>
  );
};
export default Pages;



