import { render } from 'preact'
import { useState } from 'preact/hooks'

export const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>hello world</h1>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </>
  )
}

render(<App />, document.getElementById('app')!)
