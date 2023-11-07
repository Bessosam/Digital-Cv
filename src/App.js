import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import profilePicture from './profile-pic/pic.jpg'
import './App.css';
function App(){
  return (
    <div className="App">
      <nav>
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      <Header />
      <Experience/>
      <Education/>
      <Skills />
      <Contact />
      </nav>
    </div>
 );
}
<nav>
<link></link>

</nav>

export default App;
