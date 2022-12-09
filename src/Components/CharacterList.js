import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import CharacterSearch from "./CharacterSearch";


export default function CharacterList(){
const SearchableList = ({list}) => {
const [query, setQuery] = useState([])

const {id} = useParams()
useEffect(() => {
    
    fetch("https://rickandmortyapi.com/api/character/")
    .then((res) => res.json())
    .then((json) => {
        setQuery(json.results);
        
    })
    .catch(console.error)
}, []);


const handleChange = (e) => {
    // e.preventDefault();
     setQuery(e.target.value);
 }
return (
    <div>
{query.filter(value => {
    if (query === '') {
        return value;
      } else if (value.name.includes(query)) {
      return value;
    }
  }).map((value, index) => {
    return (
        <Link to={`/details/${value.id}`} key={value.id}>
    <div className="box" key={index}>
      <p>{value.name}</p>
      <img src={value.image}/>
    </div>
    </Link>
    )
    })}

  

    </div>

)}

}