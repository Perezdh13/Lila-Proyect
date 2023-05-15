import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Form from '../../../common/Form';
import { WomenHTTP } from '../../../../services/boards/WomenHTTP';

function EditWoman() {
  const [data, setData] = useState('');console.log(data)
  

  const { id } = useParams();

  useEffect(() => {
    WomenHTTP().getWomanById(id).then((data) => {
      setData(data);
      
    });
   
  }, [id]);

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

export default EditWoman;



