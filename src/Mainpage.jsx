import React, { useState } from "react";
import Navbars from './components/Navbars'
import Grid from './components/GridRender'
import Search from './components/SearchRender'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
function Mainpage(){







var render = <div className="grid-margin">
       
            <Grid headline='general' ></Grid>
            </div>


var [resetRender , SetRender] =  React.useState(render)

function search(searchchoice){


    console.log("searched");
    render = <div className="grid-margin">
       
                <Search headline={searchchoice} ></Search>
            </div>

    SetRender(render)

}

function navChoice(choice){

    if(choice === "business"){
        render = <div className="grid-margin">
       
                <Grid headline='business' ></Grid>
                </div>
  
    }
    if(choice === "entertainment"){
        render = <div className="grid-margin">
           
                <Grid headline='entertainment' ></Grid>
                </div>
      
    }
    if(choice === "sports"){
        render = <div className="grid-margin">
           
                <Grid headline='sports' ></Grid>
                </div>
      
    }
    if(choice === "technology"){
        render = <div className="grid-margin">
           
                <Grid headline='technology' ></Grid>
                </div>
      
    }
    
   

    SetRender(render)
    
    
}



return(

<div  id="content">
    <Navbars function = {navChoice} search = {search}/>

   
    {resetRender}

    <div className="flex-container footer">

    <div className="flex-container Contact-info">
      <h2>US headlines</h2>
      <em>78 Baron Ave, WestBabylon, NY 11704</em>
      <em>usheadlines@gmail.com</em>
      <em>631-671-0018</em>
    </div>
    <div className="flex-container footer-details">
    <div className="flex-container social-media">
      <div className="flex-container">
        <FontAwesomeIcon icon={faFacebookF} size="md"  className="social-icon"/><em> Facebook</em>
      </div>
      <div className="flex-container">
        <FontAwesomeIcon icon={faTwitter} size="md"  className="social-icon"/><em> Twitter</em>
      </div>
      <div className="flex-container">
        <FontAwesomeIcon icon={faInstagram} size="md" className="social-icon" /><em> Instagram</em>
      </div>

    </div>

    <div className="flex-container sections">
      <div className="flex-container">
        <em onClick={()=> navChoice('business')}> Buisness</em>
      </div>
      <div className="flex-container">
        <em onClick={()=> navChoice('entertainment')}> Entertainment</em>
      </div>
      <div className="flex-container">
        <em onClick={()=> navChoice('sports')}> Sports</em>
      </div>
      <div className="flex-container">
        <em onClick={()=> navChoice('technology')}> Technology</em>
      </div>

    </div>

    </div>
    </div>

</div>




)




}

export default Mainpage;

