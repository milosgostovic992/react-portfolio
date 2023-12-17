import Tabs from './components/Tabs/Tabs.js';
import Slider from './components/Slider/Slider.js'
import Navbar from './components/NavBar/Navbar.js';
import Accordion from './components/Accordion/Accordion.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import bgImg from './bg.jpg';
import bgInnerImg from './bginner.jpg'
import Wrapper from './Helper/Wrapper.js';

function App() {

  return <Router>
    <img className='overlay has-cover' src={bgInnerImg} alt="" />
    <header className='header'>
      <Navbar />
    </header>
    <Wrapper>
    <div className="main__content">
        {/* <img className='main__content-bg' src={bgInnerImg} alt="inner img" /> */}
      <Switch>
        <Route exact path='/'>
          <Tabs />
          <Accordion />
          <Slider />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
    </Wrapper>
  </Router>
}

export default App
