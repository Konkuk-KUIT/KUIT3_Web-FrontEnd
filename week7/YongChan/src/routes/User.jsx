import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../db';

const User = () => {
    const params=useParams();
    console.log(params.id);
  return (
    <>
        <div>{data[params.id].country}</div>
        <div>{data[params.id].havebeen}</div>
        <div>{data[params.id].description}</div> 
    </>
  )
}

export default User