
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import profile from './assets/profile.jpg'

function App() {

  const user = {
    name: 'Fauki Rijatul',
    profilePicture: profile
  }

  return (
    <Routes>
      <Route path="/" element={<Home user={user} />}></Route>
    </Routes>
  )
}

export default App
