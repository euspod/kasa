import '../sass/main.scss';
import Specifications from '../componentsJs/SpecSection';
import AppartCover from '../componentsJs/AppartCover';
import AppartInfos from '../componentsJs/AppartInfos';
import AppartHost from '../componentsJs/AppartHost';


 function Pages() {
    return  (
       <main className="appart-page">
            <section className='appart-cover'>
                <AppartCover />
            </section>
            <section className='appart-page__infos-container'>
               <AppartInfos />
                <AppartHost />
            </section>
          <section className='appart-page__spec-sections'>
              <Specifications />
              <Specifications />
          </section>
        </main>
  );
};
export default Pages;



