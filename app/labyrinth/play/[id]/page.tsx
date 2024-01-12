'use client';
import axios from 'axios';
import React, { useState } from 'react'

const PlayLabyrinth = (props: any) => {

  const [load, setLoad] = useState(false);

  const getQuestData = async () => {

    const response = await axios.get(`http://localhost:8080/labyrinth/${props.params.id}/quest/`);
  }

  return (
    <>
      <h2>Read</h2>
      {/*  read/1 , read/2 */}
      paramters : {props.params.id}
    </>
  )
}

export default PlayLabyrinth;