import { Route, Routes } from 'react-router-dom'
import { About } from './pages/About'
import { Adm } from './pages/Adm'
import { AdmHome } from './pages/AdmHome'
import { Data } from './pages/Data'
import { Feed } from './pages/Feed'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Adot } from './pages/toAdot'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Adm" element={<Adm />} />
      <Route path="/AdmHome" element={<AdmHome />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Data" element={<Data />} />
      <Route path="/Feed" element={<Feed />} />
      <Route path="/About" element={<About />} />
      <Route path="/Adot" element={<Adot />} />
    </Routes>
  )
}
