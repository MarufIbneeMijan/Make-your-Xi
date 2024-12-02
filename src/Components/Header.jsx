import ShowCoin from "./ShowCoin";
import PropTypes from "prop-types";


const Header = ({coin}) => {
    return (
       
           <div className='md:flex max-w-[1100px] justify-between items-center mx-auto p-5 '>
           
                <img  src="../assets/logo.png"/>

           
            <div className='md:flex list-none gap-5 '>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
                <ShowCoin coin={coin}></ShowCoin>
            </div>
           </div>
        
    );
};
Header.propTypes={
    coin: PropTypes.any
}

export default Header;