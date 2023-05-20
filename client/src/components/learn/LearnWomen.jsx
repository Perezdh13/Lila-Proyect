import React, { useEffect, useState } from 'react';
import WomenHTTP from '../../services/boards/WomenHTTP';


function LearnWomen () {
  const [selectedWoman, setSelectedWoman] = useState(null);
  const [opacity, setOpacity] = useState('1')
  
  const [women, setWomen] = useState("")
  console.log(women)
  
  useEffect(()=>{
    WomenHTTP().getAllData().then((w)=>{
setWomen(w)
  })
},[])



  const showDetails = (woman) => {
    setSelectedWoman(woman);
    setOpacity('0.3')
  };

  const hideDetails = () => {
    setSelectedWoman(null);
    setOpacity('1')
  };
   return (

    <div style={{maxHeight:"100vh", overflowY:"auto"}}>
      <div>
      {women && (women.map((woman, index) => (
        <section key={index} style={{backgroundColor:'#8c52ff',opacity:opacity , boxShadow: '15px 15px 15px #A582AF', display: 'flex', alignItems: 'center', height: '10vh', width: '60vw', marginLeft: '5vw', marginTop: '3vw', borderRadius: '1vw', position: 'relative'}}>
          <img src={woman.imgReal} alt={`Imagen de ${woman.name}`} style={{maxHeight: '100%', width:"7vw", height:"10vw"}} /> 
          <p style={{marginLeft: '2rem', marginTop:"1rem", fontSize:"2vw", fontFamily:"sans-serif"}}>{woman.name}</p> 
          <button className="btn btn-secondary" style={{position: 'absolute', bottom: '10px', right: '10px', padding: '10px'}} onClick={() => showDetails(woman)}>ver más</button>
        </section>
      )))}
</div>
      {selectedWoman && (
        <div style={{position: "fixed", top: "50%", left: "40%", transform: "translate(-50%, -50%)", backgroundColor: "white", width: "50%", border: "5px solid #8c52ff", borderRadius: "10px", padding: "20px", boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)", zIndex: "1"}}>
          <span style={{color: "#8c52ff", fontWeight: "bold", fontSize: "2rem", marginBottom: "1rem"}}>{selectedWoman.name}</span>
          <p style={{textAlign: "justify"}}>{selectedWoman.description}</p>
          <button style={{backgroundColor: "#8c52ff", color: "#fff", border: "none", borderRadius: "5px", padding: "10px", marginRight: "1rem", marginTop: "1rem", cursor: "pointer", float: "right"}} onClick={hideDetails}>Cerrar</button>
        </div>
      )}
    </div>
  ); 
};

export default LearnWomen;






