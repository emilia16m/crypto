import Descr from './components/descr'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import './App.css';
import ReactDropdown from 'react-dropdown';
import Convert from './components/convert';
import Prob from './components/prob';

function App() {

return (
	<div className="App">
	<Descr />
    
  <div className='exchange'>
      <div className='container'>
        <Prob></Prob>
      </div>
  </div> 



  <div className="form">
    <div className="container">
      <div className='form_wrapp'>
        <div className='input_wrapp'>
          <label>Your Ethereum address</label>
          <input></input>
        </div>

        <button className='btn_form'>Exchange</button>
      </div>
    </div>
  </div> 
	</div>


)
};
 export default App;
