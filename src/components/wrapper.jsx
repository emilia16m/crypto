import React, { useEffect, useState } from "react";
import "./wrapper.css"
import Axios from 'axios';
import { APP_KEY } from "../key";
import Left from "./left";
import Right from "./right";

const Wrapper = () => {
    const [result, setResult] = useState([])
    const [from, setFrom] = useState("btc");
    const [img, setImg] = useState("https://changenow.io/images/coins/btc.svg")
    const [to, setTo] = useState("eth");
    const [imgto, setImgto] = useState("https://content-api.changenow.io/uploads/eth_f4ebb54ec0.svg")
    const [input, setInput] = useState();
    const [min, setMin] = useState(0);
    const api_key = APP_KEY

    useEffect(() => {
        Axios.get(
            `https://api.changenow.io/v1/min-amount/${from}_${to}?api_key=${api_key}`)
            .then((data) => {
                let minFix = data.data.minAmount
                setMin(minFix)
                console.log(data.data.minAmount)
            }, []);
        Axios.get(
            `https://api.changenow.io/v1/exchange-amount/${input}/${from}_${to}?api_key=${api_key}`)
            .then((data) => {
                setResult(data.data.estimatedAmount)
            }, []);
        
    })

    const flip = () => {
        setFrom(to);
        setTo(from);
        setImg(imgto)
        setImgto(img)
    }

    return(
        <div className="prob_wrapper">
            <Left api_key={api_key} setFrom={setFrom} from={from} setInput={setInput} input={input} setImg={setImg} img={img}/>

            <div className="switch" onClick={flip}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3_98)">
                        <path d="M7.99 17H20V19H7.99V22L4 18L7.99 14V17Z" fill="#11B3FE" />
                        <path d="M16.01 8H4V10H16.01V13L20 9L16.01 5V8Z" fill="#11B3FE" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3_98">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <Right api_key={api_key} setTo={setTo} to={to} setResult={setResult} result={result} setImgto={setImgto} imgto={imgto}/>
        </div>
    )
}
export default Wrapper;
