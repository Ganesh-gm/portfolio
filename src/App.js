import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/intro";
import { Navbar } from "./components/NavBar/navbar";
import Skils from "./components/Skils/Skils";
// import Work from "./components/Works/Work";


function App() {
  return (
    <div>
      <Navbar />
      <Intro/>
      <Skils/>
      {/* <Work/>  */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
 