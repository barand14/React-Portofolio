import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header.jsx';
import AboutMe from './components/aboutMe.jsx';
 import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';import Resume from './components/resume';
import Footer from './components/footer.jsx';
import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AboutMe} />
         <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
