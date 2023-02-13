import React, { useEffect, useState } from "react";
import "./prob.css"
import Axios from 'axios';
const Crypto = (props) =>{
    
    const src ='https://api.changenow.io/v1/currencies?active=true'

    const [names, setName] = useState([]);
    const [imges, setImg] = useState([]);
    const [tickers, setTicker] = useState([])
    useEffect(() => {
        Axios.get(src)
    .then((data) => {
        console.log(data.data)
        setName(data.data);
        setImg(data.data);
        setTicker(data.data);
        })
    }, []);
    
    return(
        <li >
            <div  className="icon">
                    {imges.map(image =>  {
                        return(
                            <img src={imges.image} alt='crp'/>
                    )})}
            </div>
            <div className="crypto_tic">{tickers.map(tickers =>  {
                return(
                <p>{tickers.ticker}</p>
            )})}</div>


            <div className="crypto_name">
            {names.map(names =>  {
                return(
                <p>{names.name}</p>
            )})}
            </div>
        </li>
                
    )
}

// let cryptoData =[
//   {ticker: "btc", name: "Bitcoin",  image: "https://changenow.io/images/coins/btc.svg"},
//  {ticker: "eth", name: "Ethereum", image: "https://changenow.io/images/coins/eth.svg"},
//    {ticker: "xrp", name: "Ripple",  image: "https://changenow.io/images/coins/xrp.svg"},
//    {ticker: "ltc", name: "Litecoin",  image: "https://changenow.io/images/coins/ltc.svg"}
//]






const Prob = () => {


    const handleClick = () => {
        // 👇️ toggle class on click
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById("leftActiv").classList.toggle("activ_crypto");
      };

    return(
        <div className="prob_wrapper">
            <div className="prob_left" id="leftActiv">
                <div className="input_form">
                    <input placeholder="0"/>
                    <svg width="1" height="30" viewBox="0 0 1 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="-2.18557e-08" x2="0.500001" y2="30" stroke="#E3EBEF"/>
                    </svg>

                </div>


                <div className="dropdown">
                    <div className="crypto_info">
                        <div className="icon"> <img src="https://changenow.io/images/coins/btc.svg" alt="btc" /></div>
                        <div className="crypto_tic">BTC</div>
                    </div>
                    <button className="drop" onClick={handleClick}>
                        <svg width="10" height="6" viewBox="0 0 10 6"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.01077 5.99987C5.23471 5.99804 5.44916 5.90703 5.60872 5.74612L9.74595 1.5096C9.90811 1.34428 9.99949 1.11977 10 0.885451C10.0005 0.651135 9.91008 0.42621 9.74864 0.260157C9.5872 0.0941027 9.36795 0.000521907 9.13913 2.17641e-06C8.91031 -0.000517555 8.69066 0.0920662 8.52849 0.257385L5 3.87057L1.47151 0.257386C1.39121 0.175528 1.29595 0.110666 1.19118 0.066504C1.08641 0.0223427 0.974171 -0.000254555 0.86087 2.94837e-06C0.747568 0.000259974 0.635423 0.0233675 0.530842 0.0680047C0.426262 0.112642 0.331288 0.177935 0.25135 0.260156C0.171411 0.342378 0.108078 0.439918 0.0649512 0.547206C0.0218248 0.654494 -0.0002492 0.76943 2.12213e-06 0.885452C0.000253444 1.00147 0.0228229 1.11631 0.0664137 1.2234C0.110004 1.33049 0.17376 1.42774 0.254054 1.5096L4.39127 5.74612C4.47288 5.82845 4.56971 5.8933 4.67608 5.93687C4.78244 5.98043 4.89623 6.00185 5.01077 5.99987Z" fill="#80A2B6"/>
                        </svg>
                    </button>
                
                </div>
                <div id="myDropdown" className="crypto_menu">
                    <ul>
                        <Crypto/>
                    </ul>
                </div>

            </div>
            
        </div>
    )
}


export default Prob;