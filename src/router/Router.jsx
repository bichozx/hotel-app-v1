import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import AboutPage from '../page/AboutPage'
import ContacPage from '../page/ContacPage'
import FooterPage from '../page/FooterPage'
import HomePage from '../page/HomePage'
import MenuPage from '../page/MenuPage'
import RoomDetail from '../components/RoomDetails'
import RoomsPage from '../page/RoomsPage'

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <MenuPage/>
        <section>
          <Routes>
            <Route path='/' element={<Navigate to="/home"/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/rooms' element={<RoomsPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContacPage/>}/>
            <Route path="/room/:id" element={<RoomDetail/>} />
            
          
          </Routes>
        </section>
        <FooterPage/>
      </BrowserRouter>
    </>
  )
}
