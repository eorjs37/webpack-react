import { Outlet } from 'react-router-dom'
export default function App() {
  return (
    <div className="container">
      <h1>WelComeApp</h1>
      <Outlet />
    </div>
  )
}
