import { useState, useEffect, useRef } from 'react';


function Sample (props){

    const [greet, setGreet] = useState("Hello, I'm using React Hooks");
    const [hi, setHi] = useState("HIIII")
    const input = useRef(null);

    useEffect(() => {
      console.log(greet);  //anything in this function will run when the component loads and this effect is retriggered

      return () => {
        console.log("anything in the returned function is run when the component dismounts")
      }             //this remounts and runs this part of useeffect
    }, [greet]);//any variable passed into the array will be watched and will retrigger the above function if changed.


    const handleClick = () => {
      setGreet('Hey I just changed state using React Hooks')
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setGreet(input.current.value)
      input.current.value = "";
    };

    return (
      <>
        <h1>{greet}</h1>
        <button onClick={handleClick}>Click ME</button>
        <form onSubmit = {handleSubmit}>
          <input type="text" ref={input} />
          <input type="submit" value={"Submit"} />
        </form>
      </>
    )
};

export default Sample;
