import React from "react";
import MyNav from "../components/navbar";
import MyFooter from "../components/footer";


import Sections from "../components/sections";
import "../css/style.css"
import Carrousel from "../components/carrousel";

function Home() {
    return (
        <div className=" main-container">
        <MyNav/>   


            <div className="content-container">
            
            <Carrousel/>

            <Sections/>
            <MyFooter/>
            
            </div>

            
            
            
        
        </div>
        
       
    )
    
}

export default Home; 