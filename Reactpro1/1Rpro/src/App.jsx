import { useState } from "react"

function App() {
  const [color , setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}>
     <h1 className="text-center mb-5 px-4 py-5 rounded-full
             bg-gradient-to-r from-sky-200 via-cyan-200 to-teal-100
             shadow-xl">
  <span className="block text-3xl font-semibold tracking-wide
                   text-transparent bg-clip-text
                   bg-gradient-to-r from-indigo-600 to-purple-600">
    My First React Project
  </span>


  <span className="block text-base font-normal text-gray-600 mt-2 text-shadow-lg">
    Built using React and Tailwind CSS
  </span>
</h1>
           <div className="fixed flex flex-wrap justify-center bottom-30 inset-x-2 px-0">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl 
               px-3 py-2 rounded-3xl bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-1000">
               <button onClick={()=>setcolor("red")} 
            className="outline-none px-5 py-5 rounded-full text-white shadow-xl text-shadow-xl
            transition-transform duration-200 hover:scale-110 "
            style={{backgroundColor:"red"}}>RED</button>

            <button onClick={()=>setcolor("green")}
            className="outline-none px-5 py-5 rounded-full text-white shadow-2xs text-shadow-xl
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"green"}}>GREEN</button>

            <button onClick={()=>setcolor("blue")}
            className="outline-none px-5 py-5 rounded-full text-white shadow-2xs text-shadow-xl
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"blue"}}>BLUE</button>

            <button onClick={()=>setcolor("olive")}
            className="outline-none px-5 py-5 rounded-full text-white shadow-xl text-shadow-xl
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"olive"}}>OLIVE</button>

            <button onClick={()=>setcolor("purple")}
            className="outline-none px-5 py-5 rounded-full text-white shadow-xl text-shadow-xl
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"purple"}}>PURPLE</button>

            <button onClick={()=>setcolor("orange")}
            className="outline-none px-5 py-5 rounded-full text-white shadow-xl text-shadow-xl
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"orange"}}>ORANGE</button>

            <button onClick={()=>setcolor("pink")}
            className="outline-none px-5 py-5 rounded-full text-white shadow-xl text-shadow-xl
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"pink"}}>PINK</button>

            <button onClick={()=>setcolor("yellow")}
            className="outline-none px-5 py-5 rounded-full text-black shadow-xl text-shadow-xl
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"yellow"}}>YELLOW</button>

            <button onClick={()=>setcolor("cyan")}
            className="outline-none px-5 py-5 rounded-full text-black shadow-xl text-shadow-xl
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"cyan"}}>CYAN</button>

            <button onClick={()=>setcolor("teal")}
            className="outline-none px-5 py-5 rounded-full text-white shadow-2xs
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"teal"}}>TEAL</button>

            <button onClick={()=>setcolor("indigo")}
            className="outline-none px-5 py-5 rounded-full text-white shadow-2xs
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"indigo"}}>INDIGO</button>

            <button onClick={()=>setcolor("lime")}
            className="outline-none px-5 py-5 rounded-full text-black shadow-2xs
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"lime"}}>LIME</button>

            <button onClick={()=>setcolor("gray")}
            className="outline-none px-5 py-5 rounded-full text-white shadow-2xs
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"gray"}}>GRAY</button>

            <button onClick={()=>setcolor("black")}
            className="outline-none px-5 py-5 rounded-full text-white shadow-2xs
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"black"}}>BLACK</button>

            <button onClick={()=>setcolor("white")}
            className="outline-none px-5 py-5 rounded-full text-black shadow-2xs
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"white"}}>WHITE</button>

            <button onClick={()=>setcolor("brown")}
            className="outline-none px-5 py-5 rounded-full text-white shadow-2xs
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"brown"}}>BROWN</button>

            <button onClick={()=>setcolor("maroon")}
            className="outline-none px-5 py-5 rounded-full text-white shadow-2xs
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"maroon"}}>MAROON</button>

            <button onClick={()=>setcolor("navy")}
            className="outline-none px-5 py-5 rounded-full text-white shadow-2xs
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"navy"}}>NAVY</button>

            <button onClick={()=>setcolor("gold")}
            className="outline-none px-5 py-5 rounded-full text-black shadow-2xs
            transition-transform duration-200 hover:scale-110"
            style={{backgroundColor:"gold"}}>GOLD</button>

          </div>
        </div>
    </div>  
  )
}

export default App
