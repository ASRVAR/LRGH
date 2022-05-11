import "./App.css";
import Navbar from "./shortComponent/Navbar";
import Slider from "./shortComponent/Slider";
import About from "./shortComponent/About";
import Card from "./shortComponent/Card";
import Footer from "./shortComponent/Footer";
import Imageoverlays from "./shortComponent/Imageoverlays";

function App() {
  const CardDesc= `This content is a little bit longer."+ <br /> + "  Is there a patron saint
  of your country?" <br />"
  Do you have a story about a dragon in "<br />" 
  your culture? Write a
  comment and tell us about it!`;

  return (
    <div>
      <Navbar
        titleHome="Home"
        titleAbout="About Us"
        titleContact="Contact"
        titleGallery="Gallery"
        titlePostList="User Post & List"
      />
      <Slider />
      <About
        title="Sorry for that code dump, but not sure how to explain what I am
            trying to do otherwise. I saw something about using require() but I
            could not get that to work and now I am kind of stumped. Been at
            this for a while now so I hope that some of you would give some hint
            as to how to proceed. Sorry for that code dump, but not sure how to
            explain what I am trying to do otherwise. I saw something about
            using require() but I could not get that to work and now I am kind
            of stumped. Been at this for a while now so I hope that some of you
            would give some hint as to how to proceed.Sorry for that code dump,
            but not sure how to explain what I am trying to do otherwise. I saw
            something about using require() but I could not get that to work to how to proceed.  "
      />
      <Card />
      <Imageoverlays
        title="Second Story by LearnEnglish Kids"
        desc={CardDesc}
      />
      <Footer />
    </div>
  );
}

export default App;
