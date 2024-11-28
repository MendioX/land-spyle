import React from "react";
import MyNav from "../components/navbar";
import MyFooter from "../components/footer";

import "../css/style.css"
import Carrousel from "../components/carrousel";

function Home() {
    return (
        <div className=" main-container">
        <MyNav/>   


            <div className="content-container">
            
            <Carrousel/>

            </div>

            
            <MyFooter/>
            
        
        </div>
       
    )
    
}

export default Home; 