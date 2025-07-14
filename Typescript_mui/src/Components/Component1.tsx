function Component1(num: number) {
    return num + 5
}

function greet(){
 const result =Component1(80);

 return <div>
    <h1>Added Value:{result}</h1>
 </div>
} 


export default greet