import { useState, useEffect, useRef } from 'react';


function Sample (props){

    const [greet, setGreet] = useState("Hello, I'm using React Hooks");

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
