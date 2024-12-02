

import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Header from './Components/Header'
import Players from './Components/Players'
import TwoButtons from './Components/TwoButtons'
import { ToastContainer,toast } from 'react-toastify';
import ShowSelectedPlayers from './Components/ShowSelectedPlayers'
import Footer from './Components/Footer'




function App() {
  const [coin,setCoins]=useState(0)
  const [selectedPlayer,setSelectedPlayer]=useState([])
  const setCoin=()=>{
    toast("Free Credit Claimed")
    setCoins(coin+10000)
    
    
  }
const minusCoin=(price)=>{
 
  const newCoin=coin-price
  if(newCoin>0){
    setCoins(newCoin)
   
  }else{
    toast("Please Claim Free Credit!")
  }


}

const deleteHandeler=(id)=>{
  const deletedPlayer= selectedPlayer.filter((p)=>p.id!=id)
  setSelectedPlayer(deletedPlayer)
  toast("SuccesFully Deleted")
}


const handleSelectedPlayer=(player)=>{
  const isExist=selectedPlayer.find((p)=>p.id===player.id)
  if(isExist || selectedPlayer.length>5 ){
    toast("Player Alreaady Selected Or You Can Select Only 6 Players")
  }else{
  
     const newName = [...selectedPlayer,player]
    setSelectedPlayer(newName)
    toast(player.name + " Added")
    
  }
 
 
}
const [active,setActive] = useState({
  clicked:false
})
const handleActive=(p)=>{
  if(p=="shoi"){
    setActive({
      clicked:true
    })
  }else{
    setActive({
      clicked:false
    })
  }
  console.log(active)
}

  return (
    <>
     
      <Header coin={coin} ></Header>
      <Banner setCoin={setCoin}></Banner>
      
      <TwoButtons selectedPlayer={selectedPlayer} handleActive={handleActive} active={active}  ></TwoButtons>
     
     <ShowSelectedPlayers selectedPlayer={selectedPlayer} active={active} deleteHandeler={deleteHandeler}></ShowSelectedPlayers>
      <Players minusCoin={minusCoin} active={active} handleSelectedPlayer={handleSelectedPlayer}  ></Players>
      <Footer></Footer>
      <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Bounce
        />
      
     
    </>
  )
}

export default App
