

import React, { useEffect, useState } from "react";
import "./left.css"
import Axios from 'axios';
import { APP_KEY } from "../key";
import Right from "./right";



const CryptoLeft = ({setFrom, setImg}) =>{
    const leftList = document.getElementById('left_ul')
    leftList?.querySelectorAll('li').forEach((li, index) => { // записывает индекс эмента массива , на который кликнули, в переменную 
        li.addEventListener('click', () => {
        let valueTicker = crypto_item[index].props.children[1].props.children    //достает значение ticker элемента, на который кликнули
        let valueImg = crypto_item[index].props.children[0].props.children[1].props.src
        setFrom(valueTicker)
        setImg(valueImg)
        console.log(valueImg, valueTicker)
});});
   

    const api_key = APP_KEY
    const src =`https://api.changenow.io/v1/currencies?active=true${api_key}`
    const [dates, setDate] = useState([])
    useEffect(() => {
        Axios.get(src)
    .then((data) => {
        setDate(data.data)
})
}, []);

    const crypto_item = dates.map( item => {
        return(
            <li id="element" className="item">
                <div  className="icon"> <img src={item.image} alt='icn'/> </div>
                <div id="tickerCrypto" className="crypto_tic">{item.ticker}</div>
                <div className="crypto_name"> {item.name}</div>
            </li>
)})
        return (
                <ul className="cont" id="left_ul"> 
                    {crypto_item}
                </ul> 
             
    
)}




const CryptoRight = ({setTo, setImgto}) =>{

    const rightList = document.getElementById('right_ul')
    rightList?.querySelectorAll('li').forEach((li, index) => { // записывает индекс эмента массива , на который кликнули, в переменную 
        li.addEventListener('click', () => {
        let valueTicker = crypto_items[index].props.children[1].props.children  
        let valueImg = crypto_items[index].props.children[0].props.children[1].props.src
        setTo(valueTicker);
        setImgto(valueImg)
});});
   

    const api_key = APP_KEY
    const src =`https://api.changenow.io/v1/currencies?active=true${api_key}`
    const [dates, setDate] = useState([])
    useEffect(() => {
        Axios.get(src)
    .then((data) => {
        setDate(data.data)
})
}, []);

    const crypto_items = dates.map( item => {
        return(
            <li  className="item">
                <div  className="icon"> <img src={item.image} alt='icn'/> </div>
                <div id="tickerCrypto" className="crypto_tic">{item.ticker}</div>
                <div className="crypto_name"> {item.name}</div>
            </li>
)})
        return (

                <ul className="cont" id="right_ul"> 
                    {crypto_items}
                </ul> 
             
    
)}


const Left = (props) => {

    const [from, setFrom] = useState("btc");
    const [img, setImg] = useState("https://changenow.io/images/coins/btc.svg")
    const [to, setTo] = useState("eth");
    const [imgto, setImgto] = useState("https://content-api.changenow.io/uploads/eth_f4ebb54ec0.svg")
    const [input, setInput] = useState(0);
    const [output, setOutput] = useState(0);
    function flip() {
        var temp = from;
        setFrom(to);
        setTo(temp);
    }
    function convert() {
        var rate = info[to];
        setOutput(input * rate);
    }
    const handleClick = () => {
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById("leftActiv").classList.toggle("activ_crypto_menu");
        document.getElementById("hrVert").classList.toggle("hr_activ_menu");
        document.getElementById("hrVert").classList.toggle("activ_menu");
        document.getElementById("activCrypto").classList.toggle("activ_menu");
      };
    const handleClickright = () => {
        document.getElementById("myDropdow").classList.toggle("show");
        document.getElementById("leftActive").classList.toggle("activ_crypto_menu");
        document.getElementById("hrVerta").classList.toggle("hr_activ_menu");
        document.getElementById("hrVerta").classList.toggle("activ_menu");
        document.getElementById("activCryptos").classList.toggle("activ_menu");
      };
      

 

    return(
        <div className="prob_wrapper">
            <div className="prob_left" id="leftActiv">

                <div className="input_form">
                    <input placeholder="" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <svg id='hrVert' width="1" height="30" viewBox="0 0 1 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="-2.18557e-08" x2="0.500001" y2="30" stroke="#E3EBEF"/>
                    </svg>
                </div>

                <div className="dropdown">
                    <div className="crypto_info" id="activCrypto" >
                        <div className="icon"><img className="genimg" src={img}></img></div>
                       <input id="input" className="crypto_tic" value={from}></input>
                    </div>
                    <button id='buttonChange' className="drop" onClick={handleClick}>
                        <svg width="10" height="6" viewBox="0 0 10 6"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.01077 5.99987C5.23471 5.99804 5.44916 5.90703 5.60872 5.74612L9.74595 1.5096C9.90811 1.34428 9.99949 1.11977 10 0.885451C10.0005 0.651135 9.91008 0.42621 9.74864 0.260157C9.5872 0.0941027 9.36795 0.000521907 9.13913 2.17641e-06C8.91031 -0.000517555 8.69066 0.0920662 8.52849 0.257385L5 3.87057L1.47151 0.257386C1.39121 0.175528 1.29595 0.110666 1.19118 0.066504C1.08641 0.0223427 0.974171 -0.000254555 0.86087 2.94837e-06C0.747568 0.000259974 0.635423 0.0233675 0.530842 0.0680047C0.426262 0.112642 0.331288 0.177935 0.25135 0.260156C0.171411 0.342378 0.108078 0.439918 0.0649512 0.547206C0.0218248 0.654494 -0.0002492 0.76943 2.12213e-06 0.885452C0.000253444 1.00147 0.0228229 1.11631 0.0664137 1.2234C0.110004 1.33049 0.17376 1.42774 0.254054 1.5096L4.39127 5.74612C4.47288 5.82845 4.56971 5.8933 4.67608 5.93687C4.78244 5.98043 4.89623 6.00185 5.01077 5.99987Z" fill="#80A2B6"/>
                        </svg>
                    </button>
           
                </div>  

                <div id="myDropdown" className="crypto_menu">
                <CryptoLeft setFrom={setFrom} setImg={setImg}></CryptoLeft>
                </div>
            </div>

            <div className="switch" onClick={() => { flip()}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3_98)">
                <path d="M7.99 17H20V19H7.99V22L4 18L7.99 14V17Z" fill="#11B3FE"/>
                <path d="M16.01 8H4V10H16.01V13L20 9L16.01 5V8Z" fill="#11B3FE"/>
                </g>
                <defs>
                <clipPath id="clip0_3_98">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </div>
            
            <div className="prob_left" id="leftActive">

            <div className="input_form">
                <input placeholder="" />
                <svg id='hrVerta' width="1" height="30" viewBox="0 0 1 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="-2.18557e-08" x2="0.500001" y2="30" stroke="#E3EBEF"/>
                </svg>
            </div>

            <div className="dropdown">
                <div className="crypto_info" id="activCryptos" >
                    <div className="icon"><img className="genimg" src={imgto}></img></div>
                <input id="input_copy" className="crypto_tic" value={to}></input>
                </div>
                <button id='buttonChange' className="drop" onClick={handleClickright}>
                    <svg width="10" height="6" viewBox="0 0 10 6"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.01077 5.99987C5.23471 5.99804 5.44916 5.90703 5.60872 5.74612L9.74595 1.5096C9.90811 1.34428 9.99949 1.11977 10 0.885451C10.0005 0.651135 9.91008 0.42621 9.74864 0.260157C9.5872 0.0941027 9.36795 0.000521907 9.13913 2.17641e-06C8.91031 -0.000517555 8.69066 0.0920662 8.52849 0.257385L5 3.87057L1.47151 0.257386C1.39121 0.175528 1.29595 0.110666 1.19118 0.066504C1.08641 0.0223427 0.974171 -0.000254555 0.86087 2.94837e-06C0.747568 0.000259974 0.635423 0.0233675 0.530842 0.0680047C0.426262 0.112642 0.331288 0.177935 0.25135 0.260156C0.171411 0.342378 0.108078 0.439918 0.0649512 0.547206C0.0218248 0.654494 -0.0002492 0.76943 2.12213e-06 0.885452C0.000253444 1.00147 0.0228229 1.11631 0.0664137 1.2234C0.110004 1.33049 0.17376 1.42774 0.254054 1.5096L4.39127 5.74612C4.47288 5.82845 4.56971 5.8933 4.67608 5.93687C4.78244 5.98043 4.89623 6.00185 5.01077 5.99987Z" fill="#80A2B6"/>
                    </svg>
                </button>
            </div>  

            <div id="myDropdow" className="crypto_menu">
              <CryptoRight setTo={setTo} setImgto={setImgto}></CryptoRight>
            </div>
        </div>
            
        </div>
)}


export default Left;


