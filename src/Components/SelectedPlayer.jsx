
import PropTypes from 'prop-types';

const SelectedPlayer = ({player,active,deleteHandeler}) => {
   const{name,picture,type,id}=player
    return (
        <div className={`${active.clicked?"flex align-middle items-center gap-5 bg-blue-300 mb-4":"hidden"}`}>
           <img className='w-[50px] h-[50px]' src={picture}  />
           <div>
           <h1>{name}</h1> 
           <p>{type}</p>
           <button onClick={()=>deleteHandeler(id)} className='bg-green-400 px-2' >Delete</button>
           </div>
          
        </div>
    );
};

SelectedPlayer.propTypes = {
    player:PropTypes.object,
    active:PropTypes.object,
    deleteHandeler:PropTypes.func
};

export default SelectedPlayer;