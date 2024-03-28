import x from './assets/x.jpg'

function Card(){
  return(
    <div className="card">
      <img className='card-img' src={x} alt="profile picture" width={150} height={150}></img>
      <h2 className='card-title'>drip Card</h2>
      <p className='card-text'>Nah i'd Win</p>
    </div>
  );

}

export default Card