/* import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Form from '../../../common/Form';
import { WomenHTTP } from '../../../../services/boards/WomenHTTP';

function EditWoman() {
  const [data, setData] = useState('');console.log(data)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imgCartoon, setImgCartoon] = useState('');
  const [imgReal, setImgReal] = useState('');
  const [eyes, setEyes] = useState('');
  const [hair, setHair] = useState('');



  const { id } = useParams();
  console.log(data);
 
    useEffect(() => {
    WomenHTTP().getWomanById(id).then((data) => {
      setData(data);
    })
  }, [id])
      

  const editWoman = () => { 
  };
  console.log(data)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Form       
        Name={data.name}
        Description={data.description}
        ImgCartoon={data.imgCartoon}
        ImgReal={data.imgReal}
        Eyes={data.ojos}
        Hair={data.pelo}
      /> 


      <Link to="/">
        <button onClick={() => editWoman()} type="submit" className="btn btn-dark mt-3">Enviar</button>
      </Link>
    </div>
  );
}

export default EditWoman; */





import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Form from '../../../common/Form';
import { WomenHTTP } from '../../../../services/boards/WomenHTTP';

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
      setData(data);
    })
  }, [id])


  const editWoman = () => { 
   
  };

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
}

export default EditWoman; 






