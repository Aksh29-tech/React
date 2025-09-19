import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      {/* If you do not pass props, it will take default props */}
      {/*<Navbar />*/}

      <div className="container my-3"> 
        <TextForm heading="Enter text to analyze below" />
      </div>
    </>
  );
}

export default App;
