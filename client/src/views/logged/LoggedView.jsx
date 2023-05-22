/* import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import game from '../../assets/img/ButtonQeq.png'
import learn from '../../assets/img/reading.png'
import admin from '../../assets/img/admin-panel.png'

function LoggedView() {
  const rol = "admin"
  const [authorization, setAuthorization] = useState({ display: "none" });

  useEffect(() => {
    if (rol === "admin") {
      setAuthorization({ display: "block" })
    }
  },[rol])

  return (
    <div> 
      <div style={{ display: "flex" }}>        
      
        <Link to='/games'>
          <img src={game} style={{ width: "20vw",margin:"5vw", marginTop:"14vw", marginLeft:"20vw" }} />
        </Link>

        <Link to='/learn'>
          <img src={learn} style={{ width: '20vw', margin:"5vw", marginTop:"14vw" }} />
        </Link>

        <div style={authorization}>
          <Link to='/admin'>
            <img src={admin} style={{ width: "5vw",marginLeft:"13.5vw", marginTop:"5vh" }} />
          </Link>
        </div>
      </div>
      
      </div>
      )
}

      export default LoggedView */




      import React, { useEffect, useState } from 'react'
      import { Link } from 'react-router-dom'
      import game from '../../assets/img/ButtonQeq.png'
      import learn from '../../assets/img/reading.png'
      import admin from '../../assets/img/admin-panel.png'
      import LilaButton from '../../assets/img/LilaButton.png'
      
      function LoggedView() {
        const rol = "admin"
        const [authorization, setAuthorization] = useState({ display: "none" });
        const [modalVisible, setModalVisible] = useState(false);
      
        useEffect(() => {
          if (rol === "admin") {
            setAuthorization({ display: "block" })
          }
        },[rol])
      
        return (
          <div> 
            <div style={{ display: "flex" }}>        
      
              <img src={game} style={{ width: "20vw", margin:"5vw", marginTop:"14vw", marginLeft:"20vw" }} onClick={() => setModalVisible(true)} />
      
              <Link to='/learn'>
                <img src={learn} style={{ width: '20vw', margin:"5vw", marginTop:"14vw" }} />
              </Link>
      
              <div style={authorization}>
                <Link to='/admin'>
                  <img src={admin} style={{ width: "5vw",marginLeft:"13.5vw", marginTop:"5vh" }} />
                </Link>
              </div>
            </div>
      
            {modalVisible && (
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <div style={{
                  position: 'relative',
                  backgroundColor: '#fff',
                  padding: '2em',
                  width: '50vw',
                  height: '30vw',
                  border: '5px solid #975AFF',
                  borderRadius: '10px'                            
                }}>
                  <button onClick={() => setModalVisible(false)} style={{backgroundColor:'#8C52FF', position: 'absolute', bottom: '10px', right: '10px', border: 'none', borderRadius:'5px', padding:'10px', fontWeight: 'bold'}}>Volver</button>
                  <p style={{fontWeight: 'bold'}}>En "Quién es Quién", tendrás la oportunidad de poner a prueba tus habilidades de 
                     deducción, estrategia y pensamiento lógico mientras intentas adivinar el personaje 
                     secreto. Cada ronda tendrás que formular preguntas para eliminar posibles opciones, 
                     hasta que logres adivinar el personaje misterioso.<br/>
                     Prepárate para disfrutar de un emocionante juego.<br/>
                     ¡Que comience la diversión!</p>
                  <Link to='/games/guessWho'>
                  <img src= {LilaButton} style={{position:'absolute' , width: '15vw', bottom: '0', left: '35%'}} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )
      }
      
      export default LoggedView