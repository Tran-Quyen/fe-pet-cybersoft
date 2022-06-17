import AppBar from './components/AppBar/appbar.component'
import HomePage from './pages/Homepage/homepage.component'
import { ToastContainer } from 'material-react-toastify';
function App() {
  return (
    <div className="App">
      <AppBar/>
      <HomePage/>
      <ToastContainer />
    </div>
  );
}

export default App;
