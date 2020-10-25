import React ,{ useState } from "react";

function Header (){
    const [headerH1,setheaderH1] = useState("MARVEL");
    window.onscroll = ()=>{
       
        if(window.scrollY!==0){
            setheaderH1("M");
            
        }
        else{
            
            setheaderH1("MARVEL");
        }
       
    }
    return (
        <div className="header">
             <header>
            <h1>{headerH1}</h1>
        </header></div>
       
    );
 } 
export default Header;
