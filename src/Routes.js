import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Maior from './pages/maior'
import Cinema from './pages/cinema'
import Dobro from './pages/dobro'
import Febre from './pages/febre'
import Freq from './pages/freq'
import Media from './pages/media'
import Primaria from './pages/primaria'
import Soma from './pages/soma'
import Tabuada from './pages/tabuada'


export default function SiteRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/maior' element={<Maior />} />
            <Route path='/cinema' element={<Cinema />} />
            <Route path='/dobro' element={<Dobro />} />
            <Route path='/febre' element={<Febre />} />
            <Route path='/freq' element={<Freq />} />
            <Route path='/media' element={<Media />} />
            <Route path='/primaria' element={<Primaria />} />
            <Route path='/soma' element={<Soma />} />
            <Route path='/tabuada' element={<Tabuada />} />
        </Routes>
        </BrowserRouter>
    )
}