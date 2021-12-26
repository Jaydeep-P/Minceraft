import "./Singleplayer.css";
import dirtBackground from "../images/dirtBackground.png";
import worldImage from "../images/newWorldImg.png";
import GrayButton from '../GrayButton/GrayButton';
import React from "react";

import {useNavigate} from "react-router-dom";
import { useState } from "react";

const buttonHeight = 6.5;

function World(props){

    function handleClick(){
        props.setSel(!props.selected);
    }

    const worldContainerStyleObj = {
        outline: props.selected?"0.15em solid white":""
    }

    const whiteTextStyleObj = {
        color:"white",
        fontSize:"3.1vh",
    };
    return(
        <div id="worldContainer" onClick={handleClick} style={worldContainerStyleObj}>
            <div style={{width:"12.5vh"}}>
                <img src={worldImage} style={{width:"12.5vh",height:"12.5vh"}} alt="No Pic :(" />
            </div>

            <div style={{padding:"0.3em 0.7em",fontFamily:"Minecraft",overflow:"hidden",fontSize:"2.8vh",color:"gray"}}>
                <div style={{padding:"0.1em 0em",lineHeight:"1em"}}><span style={whiteTextStyleObj}>New_World</span></div>
                <div style={{padding:"0.1em 0em",lineHeight:"1em"}}><span>New_World_(6/9/21,_4:20_AM)</span></div>
                <div style={{padding:"0.1em 0em",lineHeight:"1em"}}><span>Beta_Mode,_May_not_work_the_first_time</span></div>
            </div>
        </div>
    )
}



function Singleplayer(){
    let containerStyleObj = {
        backgroundRepeat:"repeat",
        backgroundImage:`url(${dirtBackground})`
    }
    let navigate = useNavigate();

    const [selected,setSel] = useState(false);

    return(
        <div id="container" style={containerStyleObj}>


            <div id = "darkBackGround">
                <World h={buttonHeight} selected={selected} setSel={setSel}/>
            </div>







            <div className="buttons">
                <GrayButton x={20} y={82} h={buttonHeight} w={30}  works={true} text="Play_Selected_World" clickHandler={()=>{if(selected){navigate("/play", { replace: true })}}} />
                <GrayButton x={52} y={82} h={buttonHeight} w={30} works={false} text="Create_New_World" />
                
                <GrayButton x={20} y={82+ (buttonHeight+1.7)} h={buttonHeight} w={14} enabled = {false} works={false} text="Edit" />
                <GrayButton x={36} y={82+ (buttonHeight+1.7)} h={buttonHeight} w={14} enabled = {false} works={false} text="Delete"/>
                <GrayButton x={52} y={82+ (buttonHeight+1.7)} h={buttonHeight} w={14} enabled = {false} works={false} text="Re-Create"/>
                <GrayButton x={68} y={82+ (buttonHeight+1.7)} h={buttonHeight} w={14} works={true} clickHandler = {()=>{navigate("/r", { replace: true })}} text="Cancel"/>

            </div>
        </div>
    )
}

export default Singleplayer;