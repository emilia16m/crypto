import React, { useEffect, useState } from "react";
import Axios from 'axios';

const CryptoLeft = ({ setFrom, setImg, api_key }) => {
    const handleClick = function(e) {
            let index = e.currentTarget.getAttribute("data-index")
            let valueTicker = crypto_item[index].props.children[1].props.children  
            let valueImg = crypto_item[index].props.children[0].props.children[1].props.src
            setFrom(valueTicker)
            setImg(valueImg)
    }

    const [dates, setDate] = useState([])
    useEffect(() => {
        Axios.get(`https://api.changenow.io/v1/currencies?active=true${api_key}`)
            .then((data) => {
                setDate(data.data)
            })
    }, []);

    const crypto_item = dates.map(function(item, index){
        return (
            <li data-index={index} className="item" onClick={handleClick}>
                <div className="icon"> <img src={item.image} alt='icn' /> </div>
                <div id="tickerCrypto" className="crypto_tic">{item.ticker}</div>
                <div className="crypto_name"> {item.name}</div>
            </li>
        )
    })
    
    return (
        <ul className="cont" id="left_ul">
            {crypto_item}
        </ul>
    )
}

export default CryptoLeft;
