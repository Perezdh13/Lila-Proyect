import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Form from '../../../common/Form';
import { WomenHTTP } from '../../../../services/boards/WomenHTTP';
import { WomenUpdate } from '../../../../services/boards/womenHTTP/WomenUpdate';


function EditWoman() {
  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imgCartoon, setImgCartoon] = useState('');
  const [imgReal, setImgReal] = useState('');
  const [eyes, setEyes] = useState('');
  const [hair, setHair] = useState('');

  const { id } = useParams();




    useEffect(() => {
   
        WomenHTTP().getWomanById(id).then((data) => {
            setData(data)
            setImgCartoon(data.imgCartoon)
            setImgReal(data.imgReal)
        })
    }, [id])


    const editWoman = () => {
        const newData = {
            id: id,
            name: name || data.name,
            description: description || data.description,
            imgCartoon: imgCartoon || data.imgCartoon,
            imgReal: imgReal || data.imgReal,
            ojos: eyes || data.ojos,
            pelo: hair || data.pelo,
        }
        console.log(newData);
        WomenUpdate().updateWoman(newData)
    }
    useEffect(() => {
        const imgData = new CustomEvent("imgData",{
            detail:{
                cartoon: imgCartoon,
                real: imgReal
            }
        });
        document.dispatchEvent(imgData)
    })



  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Form       
        Name={name}
        Description={description}
        ImgCartoon={imgCartoon}
        ImgReal={imgReal}
        Eyes={eyes}
        Hair={hair}
        setName={setName}
        setDescription={setDescription}
        setImgCartoon={setImgCartoon}
        setImgReal={setImgReal}
        setEyes={setEyes}
        setHair={setHair}
      /> 


      <Link to="/">
        <button onClick={() => editWoman()} type="submit" className="btn btn-dark mt-3">Enviar</button>
      </Link>
    </div>
  );
  /*   return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Form
                Name={data.name} onChangeName={(e) => setName(e.target.value)}
                Description={data.description} onChangeDescription={(e) => setDescription(e.target.value)}
                ImgCartoon={setImgCartoon} 
                ImgReal={setImgReal}
                Eyes={data.ojos} onChangeEyes={(e) => setEyes(e.target.value)}
                Hair={data.pelo} onChangeHair={(e) => setHair(e.target.value)}
                
            />
            <Link to="/">
                <button onClick={() => editWoman()} type="submit" className="btn btn-dark mt-3">Enviar</button>
            </Link>


        </div>
    ) */
}

export default EditWoman; 






