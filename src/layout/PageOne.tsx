import { useNavigate, Outlet } from 'react-router-dom'

export default function PageOne() {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/pageone/subpageone')
  }
  return (
    <div>
      <h1>PageOne</h1>
      <button onClick={handleNavigate}>SubPageOne</button>

      <Outlet />
    </div>
  )
}
