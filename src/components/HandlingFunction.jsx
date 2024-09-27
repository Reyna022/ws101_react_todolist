function HandlingFunction(){
    const HandleFunction = () =>{console.log("Hello There")}
    return(
        <>
            <h1>this is how to handle events in functional components</h1>
            <button onClick={HandleFunction}> Click Me!</button>
        </>
    )
}

export default HandlingFunction;