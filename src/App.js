import Tabs from './components/Tabs/Tabs.js';
import Slider from './components/Slider/Slider.js'
import Navbar from './components/NavBar/Navbar.js';
import Accordion from './components/Accordion/Accordion.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Services from './components/Services/Services.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Hero from './components/Hero/Hero.js';
import Projects from './components/Projects/Projects.js';
import Footer from './components/Footer/Footer.js';

function App() {

  return <Router>
    <header className='header'>
      <Navbar />
    </header>
    <div className="main__content">
      <Switch>
        <Route exact path='/'>
          <Hero />
          <Services />
          {/* <Tabs /> */}
          <Projects/>
          {/* <Accordion />
          <Slider /> */}
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
    <Footer/>
  </Router>
}

export default App
