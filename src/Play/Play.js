import React, { useState,useEffect } from "react";
import GrayButton from "../GrayButton/GrayButton";
import {useNavigate} from "react-router-dom";
import "./Play.css";



const buttonHeight = 6.5;

function Play() {
    let navigate = useNavigate();

    const [show,setShow] = useState(false);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function temp() {
        await delay(10000)
        setShow(true);
    }

    useEffect(() => {
        temp();
    });
    
    

      
    return (
        <div>
            
            <iframe id="frame" frameBorder="0" title="classic.minecraft.net" src="https://classic.minecraft.net" style={{height:"100vh",width:"100vw"} } allowFullScreen={true}/>
            {
                show?<GrayButton x={90} y={82+ (buttonHeight+1.7)} h={buttonHeight} w={7} works={true} clickHandler = {()=>{navigate("/r", { replace: true })}} text="Exit"/>:null
            }
        </div>
    )
}

export default Play;