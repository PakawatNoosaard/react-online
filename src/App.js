import Header from './components/Header';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Sidebar from './components/Sidebar';
import './App.css';
import Menu from './components/Menu';


function App() {
  return (
  <div className="logo">
    <Logo/>
      <Header/>
      <Footer title={"Facebook"} website="www.google.com"
       address="Bangkok" postcode={1207}
       isOpen={true}></Footer>
       <Sidebar />
       <Menu/>

    
  </div>

  );
}

export default App;
