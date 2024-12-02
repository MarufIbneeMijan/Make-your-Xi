import { useEffect, useState } from "react";
import Player from "./Player";
import PropTypes from 'prop-types';
import "./Styles/Banner.css"


const Players = ({minusCoin,handleSelectedPlayer,active}) => {
   const[players,setPlayers]=useState([])
   useEffect(()=>{
    async function getPlayers() {
        const res = await fetch("https://static.staticsave.com/assingment7/player.json")
        const data = await res.json()
    setPlayers(data)
    }
    getPlayers()
   },[] 
)

  
    return (
        <div className={active.clicked?"hidden ":"grid md:grid-cols-3 max-w-[1100px] mx-auto gap-4 rounde p-4 border-2 mb-[100px]"}>
            {
                players.map((player,idx)=><Player key={idx} minusCoin={minusCoin}  player={player} handleSelectedPlayer={handleSelectedPlayer} ></Player>)
            }
        </div>
    );
};
Players.propTypes={
    minusCoin:PropTypes.func,
    handleSelectedPlayer:PropTypes.func,
    handleButton: PropTypes.func,
    active:PropTypes.object
}

export default Players;