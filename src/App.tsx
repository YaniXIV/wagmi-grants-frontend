import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { jsx } from 'react/jsx-runtime'
import {CardExample} from './components/components.tsx'

function App() {
  const [count, setCount] = useState(1)
return(
    <div className='pika-title font-extrabold'>
    <h1>Wagmi Grants</h1>
  <div className="flex flex-wrap gap-4 p-4">
  {/* Using map() to render multiple CardExample components */}
    {Array.from({ length: 12 }, (_, i) => (
        <CardExample key={i} />
    ))}
</div>
    </div>
)
}

function daisybutton(){
    return (<div className="p-4">
        <button className="btn btn-primary">Click Me!</button>
    </div>);
}

function HelloWorld(){
  return <h1 className="text-3xl font-bold underline" > Fuck you </h1>;
}
export default App
