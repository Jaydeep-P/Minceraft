import "./LoadingScreen.css";
import logo from "../images/MojangLogo.svg";
import React from "react";

function LoadingScreen(){

    const loadingDoneStyleObj = {
        zIndex: "100",
        animation: "fadeOut 5000ms",
        animationFillMode: "forwards",
    };

    return(
        <div id = "backgr" style = {loadingDoneStyleObj}>
            <div id ="Logo" style = {loadingDoneStyleObj}>
                <img src={logo} style = {loadingDoneStyleObj} alt="Not Loaded :("/>
            </div>
        </div>
    )
}

export default LoadingScreen;