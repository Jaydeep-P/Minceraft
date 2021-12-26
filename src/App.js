import React, { useState,useEffect } from 'react';
import TitleScreen from './TitleScreen/TitleScreen';
import LoadingScreen from './LoadingScreen/LoadingScreen';

function App(props) {

    const [hasLoaded,setLoaded] = useState(true);
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    let resizeWindow = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
  
    useEffect(() => {
      resizeWindow();
      window.addEventListener("resize", resizeWindow);
      return () => window.removeEventListener("resize", resizeWindow);
    }, []);
  



    const removeLoadingScreen = async()=>{
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(6000);
        setLoaded(false);
    }

    if(!props.hasLoadedOnce){
        removeLoadingScreen();
    }

    var aspectRatio = windowHeight/windowWidth;
    if(aspectRatio>1){ //Just kill all mobile users.
        return(
            <div>
                <h1>Plz use landscape and refresh.</h1>
                <h6>I solemnly swear that I will fix this later.</h6>
            </div>
        )
    }




    return(
        <>
            <TitleScreen/>
            {
                (!props.hasLoadedOnce&&hasLoaded?(<LoadingScreen />):(null))
            }
        </>
    );
}

App.defaultProps = {
    hasLoadedOnce : false
}

export default App;