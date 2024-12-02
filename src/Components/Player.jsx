import PropTypes from 'prop-types';

  import 'react-toastify/dist/ReactToastify.css';


const Player = ({player,minusCoin,handleSelectedPlayer}) => {
    
      
   
    const {name,picture,price,battingHand,rating,type}=player
    return (
        <div className='mt-7 border-2' >
            
    <div className="card bg-base-100  shadow-xl">
  <figure>
    <img  className='h-[250px] w-full p-2 rounded-xl '
      src={picture} alt={name}
       />
  </figure>
  <div className="space-y-3 p-2">
    <h2 className="card-title">{name}</h2>
    <p>Price:{price}</p>
    <p>Batting-Hand : {battingHand}</p>
    <p >Rating {rating}</p>
    <p >Type : {type}</p>

    <div className="">
      <button onClick={()=> {
        minusCoin(price)
       
        handleSelectedPlayer(player)
      } }  className="btn bg-blue-400 px-4 rounded-lg">Add Player</button>
    
    </div>
    
  </div>
</div>
                

           
        </div>
    );
};

Player.propTypes = {
   player: PropTypes.object ,
   minusCoin:PropTypes.func,
   handleSelectedPlayer:PropTypes.func

}

export default Player;