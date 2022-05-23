import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import MainStore from '../MainStore'
import { useEffect } from 'react';


function India() {
  const [indiaData,setIndiaData]=useState();
  const url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4583328f31604630a0ce81abaf0821ab`
  const apiData=()=>{
    axios.get(url).then((response)=>{
           setIndiaData(response.data.articles);
          }).catch(()=>{
              throw new Error();
          })
        
  }
   useEffect(()=>{
    apiData();
   },[])
  return (
    <>
         <MainStore data={indiaData}></MainStore>
    </>
  )
}

export default India