import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  
  const [count=0, setCount] = useState(props.count);

  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={() => setCount(count-1)}>-1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
      <button onClick={() => setCount(count+1)}>+1</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
