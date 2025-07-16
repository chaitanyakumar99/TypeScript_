
function Component() {

    const result = displayUser("Chaitanya", "chkumar@gmail.com")

    
    return (
        <div>
            <h1>User Details</h1>
            <h3>{result}</h3>
        </div>
    )
}


export default Component;

export function displayUser(name:string, email:string){
    return `Name:${name},Email:${email}`
}