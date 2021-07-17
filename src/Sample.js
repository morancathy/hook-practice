import { useState, useEffect, useRef } from 'react';


function Sample (props){

    const [greet, setGreet] = useState("Hello, I'm using React Hooks");

    useEffect(() => {
      console.log(greet);  //anything in this function will run when the component loads and this effect is retriggered

      return () => {
        console.log("anything in the returned function is run when the component dismounts")
      }

    }, [greet]);//any variable passed into the array will be watched and will retrigger the above function if changed

    const handleClick = () => {
      setGreet('Hey I just changed state using React Hooks')
    };

    return (
      <>
        <h1>{greet}</h1>
        <button onClick={handleClick}> Click Me Please</button>
      </>
    )
};

export default Sample;
