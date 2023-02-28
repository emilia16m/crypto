import Descr from './components/descr'
import './App.css';
import Wrapper from './components/wrapper';
import Forms from './components/form';

function App() {
  return (
    <div className="App">
      <Descr />
      <div className='exchange'>
          <div className='container'>
            <Wrapper />
          </div>
      </div> 
      <Forms />
    </div>
  )
};

export default App;
