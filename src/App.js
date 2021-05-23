
import Routes from './config/routes.js';
import './App.css';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <>
    <NavBar/>
      <Routes />
      {/* <Footer /> */}
    </>
  );
}

export default App;
