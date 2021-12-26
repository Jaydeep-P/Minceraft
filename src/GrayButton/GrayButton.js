import { useState } from 'react';
import React from "react";

import buttonBackImg from "../images/button.png";
import disabledDuttonBackImg from "../images/disabledButton.png";
import './GrayButton.css';

function GrayButton(props) {

    let [hover,setHover] = useState(false);
    var currBack = props.enabled?props.buttonBackImg:disabledDuttonBackImg;
    
    const buttonStyleObj = {
        left:props.x+"vw",
        top:props.y+"vh",
        height:props.h+"vh",
        width:props.w+"vw",
        lineHeight: (props.h-0.7)+"vh",
        fontSize:(props.h*0.5)+"vh",
    }

    const buttonImgStyleObj = {
        left:props.x+"vw",
        top:props.y+"vh",
        height:props.h+"vh",
        width:props.w+"vw",
        backgroundImage:`url(${currBack})`
    }

    buttonImgStyleObj["backgroundSize"]= props.enabled?"100% 100%":""

    var xmar = 1.5*100/window.innerWidth,ymar=1.5*100/window.innerHeight;

    const notWorkingStyleObj = {
        left:(props.x-xmar+props.w+(5*xmar))+"vw",
        top:(props.y-2*ymar)+"vh",
        height:(props.h*0.5)+"vh",
        fontSize:(props.h*0.3)+"vh",
    }

    if(hover&!props.works){
        notWorkingStyleObj["zIndex"]=5;
        notWorkingStyleObj["animation"]="fadeOut 1500ms forwards";
    }


    return (
        <div className="buttonContainer">
            <div className = "grayButtonImg" style={buttonImgStyleObj} onClick={()=>{props.clickHandler()}}></div>
            <span className = "grayButton" style={buttonStyleObj} onMouseOver={()=>{if(props.enabled){setHover(true)}}} onMouseOut={()=>{if(props.enabled){setHover(false)}}} onClick={()=>{props.clickHandler()}}>{props.text}</span>
            <div className ="notWorking" style={notWorkingStyleObj} >Beta!</div>
        </div>
    )
}

GrayButton.defaultProps = {
    buttonBackImg:buttonBackImg,
    enabled:true,
    clickHandler: ()=>{}
}

export default GrayButton;