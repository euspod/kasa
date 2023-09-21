function AppartInfos({title, location, tags}) {
    return  <div className='appart-page__infos'>
    <h1>{title}</h1>
    <h2>{location}</h2>
    <div className='appart-page__tags'>
        {tags.map((tag, index) => (
          <span className='appart-page__tag' key={index}> {tag} </span>
        ))}
      </div>
    
</div>

};
export default AppartInfos;