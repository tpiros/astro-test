import * as React from 'react'

function Counter() {
  const count = 0;
    // const [count, setCount] = useState(0);
    // const increment = () => {
    //   setCount(prevCount => prevCount + 1);
    // };
  
    // const decrepement = () => {
    //   setCount(prevCount => prevCount - 1);
    // };
    return (
      <>
      {/* <div>
          <button onClick={decrepement}> - </button>
          <button onClick={increment}> + </button>
      </div> */}
      <p>Count is {count}.</p>
      </>
    )
  }
  
  export default Counter;