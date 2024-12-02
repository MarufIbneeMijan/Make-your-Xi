import PropTypes from 'prop-types';

const TwoButtons = ({selectedPlayer,handleActive}) => {
    
    
    return (
        <div>
            <div className="flex justify-between max-w-[1100px] mx-auto">
            <h1>Available Players</h1>
            <div className="gap-3 flex">
            <button  onClick={()=>{
                handleActive("Notshoi")
            }}>Available</button>
            <button  onClick={()=>{
               handleActive("shoi")
            }} >Selected {selectedPlayer.length}/6</button>
            </div>
        </div>
        </div>
    );
};
TwoButtons.propTypes={
    selectedPlayer:PropTypes.array,
    handleActive:PropTypes.func
}

export default TwoButtons;