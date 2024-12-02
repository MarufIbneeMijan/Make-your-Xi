
import PropTypes from 'prop-types';
import SelectedPlayer from './SelectedPlayer';


const ShowSelectedPlayers =({selectedPlayer,active,deleteHandeler}) => {

    return (
     <div >
        {
            selectedPlayer.map((player,idx)=><SelectedPlayer key={idx} player={player} active={active} deleteHandeler={deleteHandeler}></SelectedPlayer>)
        }
     </div>
    )
};

ShowSelectedPlayers.propTypes = {
   selectedPlayer:PropTypes.array,
   active:PropTypes.object,
   deleteHandeler:PropTypes.func
};

export default ShowSelectedPlayers;