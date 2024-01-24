'use client'
import React, { useEffect, useState } from 'react'
import LabyrinthCard from './labyrinth/LabyrinthCard'
import axios from 'axios'
import { LabyrinthData } from '../vo/Labyrinth'

const MainBanner = () => {

  const [labyrinthList, setLabyrinthList] = useState<LabyrinthData[]>([]);

  const getData = async () => {

    const response = await axios.get('http://localhost:8080/api/v1/labyrinth?limit=8&isCert=1');

    const labyrinthList:LabyrinthData[] = response.data.responseData.labyrinthList;
    console.log(labyrinthList);

    setLabyrinthList(labyrinthList);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className='bg-gray-200 p-4 flex flex-row items-center justify-between'>
      {labyrinthList && labyrinthList.map((labyrinthData, index) => (
        <LabyrinthCard key={index} labyrinthData={labyrinthData} />
      ))}
      </main>
  )
}

export default MainBanner