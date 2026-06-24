import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData]=useState({})
    // console.log(data)

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/kishanpatel19")
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data))
    // },[])

  return (
    <div className='flex flex-col items-center gap-2 bg-black/30 ' >
        <div className='mt-3 bg-gray-300 p-4  text-center text-2xl '>Github followers : {data.followers}</div>
        <img height="300px" width="400px" className='mb-2' src={data.avatar_url} alt="" />
        <div className=' bg-gray-300 p-4  text-center text-2xl '>Name : {data.login}</div>

    </div>

    
  )
}

export const githubLoader = async()=>{
   let res = await fetch("https://api.github.com/users/kishanpatel19")
   return res.json()
}

export default Github