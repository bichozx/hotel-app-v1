import About from '../components/About'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Ours from '../components/Ours'
import Rooms from '../components/Rooms'

export default function HomePage() {
  return (
    <>
      
     <Banner />
     <div className="w3-content" style={{"maxWidth":"1532px"}}>
      <Rooms />
      <About />
      <Ours />
      <Contact/>
     </div>
     
    </>
  )
}
