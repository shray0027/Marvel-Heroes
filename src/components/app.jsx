import React from "react"
import Header from "./header"
import NavBar from "./navbar";
import TopContainer from "./top-container";
function App(){
    return(
        <div> <Header />
        <NavBar />
        <TopContainer />
        <div className ="hero"></div></div>
   
     );
}
export default App;