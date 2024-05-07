import Menubar from './menubar.jsx'
import JoinDiscord from './JoinDiscord.jsx'
import AboutDiscord from './AboutDiscord.jsx'
import Serverstat from './serverstat.jsx'
import Footer from './footer.jsx'

export const Home = () => {
  return (
    <>
      <Menubar/>
      <JoinDiscord/>
      <AboutDiscord/>
      <Serverstat/>
      <Footer/>
    </>
  )
}