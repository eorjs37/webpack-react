import { Routes, Route } from 'react-router-dom'
import PageOne from './layout/PageOne'
import { useNavigate } from 'react-router-dom'
interface MyButtonProps {
  title: string
  disabled: boolean
}

function MyButton({ title, disabled }: MyButtonProps) {
  return <button disabled={disabled}>{title}</button>
}

import Counter from './components/Counter'
import InputSample from './components/InputSample'
import SubPageOne from './views/PageOne/SubPageOne'
export default function App() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/pageone')
  }
  return (
    <div className="container">
      <h1>Welcome to my app11</h1>
      <MyButton title="I`m a button" disabled={false} />
      <Counter />
      <InputSample />
      <button onClick={handleNavigate}>PageOne 이동</button>
      <Routes>
        <Route path="/pageone" element={<PageOne />}>
          <Route path="/pageone/subpageone" element={<SubPageOne />} />
        </Route>
      </Routes>
    </div>
  )
}
