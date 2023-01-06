import React, { useEffect, useState } from 'react'
import RickCard from './RickCard';
import RickSearch from './RickSearch';

const MiApi = () => {
    const [ricks, setRicks] = useState([]);
    const [search,setSearch] = useState("");
    
    const rickRequest = async ()=> {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        setRicks (data.results)
    }

    useEffect(() => {
        rickRequest()
    }, [])

    const filterRicks = ricks.filter((rick)=>rick.name.toLowerCase().includes(search.toLowerCase()))
    
  return (
    <div>

    <img className="imagen" src={require('./assets/img/Rick_and_Morty.png')}></img>
    <RickSearch setSearch={setSearch}/>
    <div className="cardContainer">
    
        {
            filterRicks.map((rick)=> <RickCard key={rick.name} rickUrl={rick.url}/>)
        }
    </div>
    </div>
  )
}

export default MiApi