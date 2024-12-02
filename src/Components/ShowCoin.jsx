import PropTypes from "prop-types";


const ShowCoin = ({coin}) => {
   
    return (
        <div>
            {
                
            }
          <span className="btn bg-green-400 px-5 py-3 rounded-sm">Coin:{coin} </span>  
        </div>
    );
};
ShowCoin.propTypes={
    coin:PropTypes.any
}
export default ShowCoin;