import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Home />
    </div>
  );
}

export default App
