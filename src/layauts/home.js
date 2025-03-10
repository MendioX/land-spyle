import React , { useState }  from "react";
import MyNav from "../components/navbar";
import MyFooter from "../components/footer";


import Sections from "../components/sections";
import "../css/style.css"
import Carrousel from "../components/carrousel";

import SplashScreen from "../components/splashScreen";

function Home() {

    const [showSplash, setShowSplash] = useState(true);

    return (
        <div className=" main-container">

{showSplash ? (
                <SplashScreen onFinish={() => setShowSplash(false)} />
            ) : (
                <>
        <MyNav/>   


            <div className="content-container">
            
            <Carrousel/>

            <Sections/>
            <MyFooter/>
            
            </div>

            </>
            )}
            
            
        
        </div>
        
       
    )
    
}

export default Home; 