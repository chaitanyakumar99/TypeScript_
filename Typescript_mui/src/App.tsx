// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <h1>you clicked {count}</h1>
//       <button onClick={()=>setCount (count +1)}>Click Here</button>
//     </div>
//   )

// }

// export default Counter



let Hero :String;

function getHero(){
    return "Hello...!"
}

Hero=getHero()


function App(){
    return <div><h1>{Hero}</h1></div>
}

export default App