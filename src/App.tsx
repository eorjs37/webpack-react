import { BrowserRouter } from 'react-router-dom'
interface MyButtonProps {
  title: string
  disabled: boolean
}

function MyButton({ title, disabled }: MyButtonProps) {
  return <button disabled={disabled}>{title}</button>
}

import Counter from './components/Counter'
import InputSample from './components/InputSample'

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <h1>Welcome to my app11</h1>
        <MyButton title="I`m a button" disabled={false} />
        <Counter />
        <InputSample />
      </BrowserRouter>
    </div>
  )
}
