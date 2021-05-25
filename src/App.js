
import Routes from './config/routes.js';
import './index.css';
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
