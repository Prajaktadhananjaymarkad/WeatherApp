import React,{useState} from 'react'
import Data from './Hooks/Data'

function App() {
  const[data , setData]=useState(Data)
  return (
    <div className='App'>
      <section>
        <main>
            <p>Today's Birthday {data.length}</p>
            {data.map((x)=>{
                  return(
                      <div className='Cards' key={x.image}>
                        <img src={x.image} alt="" height={'50px'} width={'50px'} />
                        <ruby><p>{x.age}</p><rt>{x.name}</rt></ruby>
                      </div>
                  )
            })}
        </main>
        <button onClick={()=>setData([])}>Clear All</button>
      </section>
    </div>
  )
}
export default App
