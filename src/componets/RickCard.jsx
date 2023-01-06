import React, { useEffect} from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';


const RickCard = ({rickUrl}) => {

    const [rickData,setRickData]=useState ({})
   
    const getRick = async()=>{
        const response = await fetch(rickUrl)
        const data = await response.json()
        setRickData(data)
        }

    useEffect(() => {
        getRick()
    }, []);

  return (

    <div className="card">
    <Card  className="tarjeta" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={rickData.image}/>
      <Card.Body>
        <Card.Title className="titulo">{rickData.id}.- {rickData.name}</Card.Title>
      </Card.Body>
    </Card>
</div>

  )
}
export default RickCard