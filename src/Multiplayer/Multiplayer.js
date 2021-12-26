import "./Multiplayer.css";
import dirtBackground from "../images/dirtBackground.png"
import GrayButton from '../GrayButton/GrayButton';
import React from "react";
import {useNavigate} from "react-router-dom";

function Multiplayer(){
    let containerStyleObj = {
        backgroundRepeat:"repeat",
        backgroundImage:`url(${dirtBackground})`
    }
    let navigate = useNavigate();
    var buttonHeight = 6.5;
    

    return(
        <div id="container" style={containerStyleObj}>
            <div className="buttons">
                <GrayButton x={30} y={40} h={buttonHeight} w={40}  works={false} text="Test" />
                <GrayButton x={30} y={40+(buttonHeight+2.5)} h={buttonHeight} w={40} works={false} text="Test" clickHandler = {()=>{navigate("/multiplayer", { replace: true })}}/>
                
                <GrayButton x={30} y={40+ 2*(buttonHeight+2.5)} h={buttonHeight} w={40} enabled={false} works={false} text="Test" />
                <GrayButton x={30} y={40+ 3.5*(buttonHeight+2.5)} h={buttonHeight} w={19} enabled={false} works={false} text="Test" clickHandler = {()=>{navigate("/options", { replace: true })}}/>
                <GrayButton x={21+30} y={40+ 3.5*(buttonHeight+2.5)} h={buttonHeight} w={19} works={true} clickHandler = {()=>{navigate("/r", { replace: true })}} text="Cancel"/>

            </div>
        </div>
    )
}

export default Multiplayer;