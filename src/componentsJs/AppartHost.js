import host from '../assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg';

function AppartHost() {
   return <div className='appart-page__host'>
                    <div className="appart-page__profile">
                        <div className='appart-page__name'>Alexandre<br></br>Dumas</div>
                        <img src={host} alt="appartment host"/>
                    </div>
                    <div className='appart-page__rating'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
}
export default AppartHost;