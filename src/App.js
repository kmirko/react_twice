import {useEffect, useState} from 'react'
import './App.css';

const BadStopwatch =()=>{
  const [count, setCount] = useState(0)

  useEffect(()=>{
    setInterval(()=>{
      setCount(v => v + 0.1)
    }, 100)
  },[])

  return(
    <div>Bad Stopwatch: {count.toFixed(1)}</div>
  )
}

const GoodStopwatch =()=>{
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount(v => v + 0.1)
    }, 100);
    return ()=> clearInterval(interval)
  },[])

  return(
    <div>Good Stopwatch: {count.toFixed(1)}</div>
  )
}


function App() {

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }}>
      <BadStopwatch/>
      <GoodStopwatch/>
    </div>
  );
}

export default App;
