import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      {/* If you do not pass props, it will take default props */}
      {/*<Navbar />*/}
    </>
  );
}

export default App;
