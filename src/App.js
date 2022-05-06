import logo from "./logo.svg";
import "./App.css";
import Userlist from "./Userlist";
import Navbar from "./shortComponent/Navbar";
import Slider from "./shortComponent/Slider"
import About from "./shortComponent/About";
import Card from "./shortComponent/Card";

function App() {
  return (
    <div >
      <Navbar
        titleHome="Home"
        titleAbout="About Us"
        titleContact="Contact"
        titleGallery="Gallery"
        titlePostList="User Post & List"
      />
     <Slider />
     <About />
     <Card />
    </div>
  );
}

export default App;
