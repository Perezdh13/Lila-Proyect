import React, { useEffect, useState } from 'react'
import Card from './Card'
import HTTPService from '../../../services/HTTPService'


function WomenGroup() {
  const [woman, setWoman] = useState([])
  console.table(woman)

  useEffect(() => {
    HTTPService().getAllData()
      .then(data => {
        setWoman(data);
        console.table(data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <div>
      <div>
        {woman.map((woman) =>
          <Card
            woman={woman}
            id={woman.id}
            name={woman.name}
            imgCartoon={woman.imgCartoon}
          />
        )}
      </div>
    </div>
  )
}

export default WomenGroup