import { useState } from "react"


function App() {

  const [color , setColor] = useState("indigo")

  return (
  <div className="w-full h-screen "
    style={{backgroundColor:color}}>
      <div className="fixed bottom-10 flex flex-wrap justify-center align-center w-[100%] bg-white px-5 py-3 gap-3 " >
        <button className="bg-red-500 text-white px-4 py-1 rounded-xl shadow-lg "
        onClick={()=>setColor("red")}
        >Red</button>
         <button className="bg-green-500 text-white px-4 py-1 rounded-xl shadow-lg "
        onClick={()=>setColor("green")}
        >green</button>
         <button className="bg-blue-500 text-white px-4 py-1 rounded-xl shadow-lg "
        onClick={()=>setColor("blue")}
        >blue</button>
           <button className="bg-gray-500 text-white px-4 py-1 rounded-xl shadow-lg "
        onClick={()=>setColor("gray")}
        >gray</button>
           <button className="bg-black text-white px-4 py-1 rounded-xl shadow-lg "
        onClick={()=>setColor("black")}
        >black</button>
      </div>
  </div>
  )
}

export default App
