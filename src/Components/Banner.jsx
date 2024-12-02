import PropTypes from "prop-types";
import "../Components/Styles/Banner.css"

const Banner = ({setCoin}) => {
   
    
    
    return (
        <div className="banner mb-7 gap-4 space-y-4">
 
           <img src="../assets/banner-main.png"  />
           <h1 className="text-xl">Assemble Your Ultimate Dream 11 Cricket Team</h1>
           <p className="text-lg">Beyond Boundaries Beyond Limits</p>
           <button className="btn p-2 bg-green-500 rounded-md" onClick={setCoin}  >Claim Free</button>
           
       
       </div>
        
    );
};
Banner.propTypes={
    setCoin: PropTypes.func
}

export default Banner;