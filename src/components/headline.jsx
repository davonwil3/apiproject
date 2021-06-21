import React, { useState } from "react";


function Headline(props){

    var render = <div></div>;
    if (props.section == "main"){

        var title = props.title

        render = <div className="flex-container" id="main-article">
                    <div className="img-container">
                    <a href={props.url} target="_blank">
                        <img src={props.urlToImage}  alt=""/>
                    </a>
                    </div>
                    <h3>{title}</h3>   
                </div>
       
    }
    if (props.section == "long"){

        var title = props.title
        var title2 = props.title2

        render = <div className="flex-container" id="long-article">
                    <div className="flex-container long-article1">
                        <a href={props.url} target="_blank">
                            <img src={props.urlToImage}  alt=""/>
                        </a>
                        <h3>{title}</h3>  
                    </div> 
                    <div className="flex-container long-article2">
                        <a href={props.url2} target="_blank">
                            <img src={props.urlToImage2}  alt=""/>
                        </a>
                        <h3>{title2}</h3> 
                    </div>

                </div>
       
    }

    if (props.section == "short"){

        var title = props.title

        render = <div className="flex-container" id="short-article">
                    <a href={props.url} target="_blank">
                        <img src={props.urlToImage}  alt=""/>
                    </a>
                    <h3>{title}</h3>   
                </div>
       
    }

    if (props.section == "double"){

        var title = props.title
        var title2 = props.title2

        render = <div className="flex-container" id="double-article">
                    <div className="flex-container double-article1">
                    <a href={props.url} target="_blank" >
                        <img src={props.urlToImage}  alt=""/>
                    </a>
                        <h3>{title}</h3>  
                    </div> 
                  

                </div>
       
    }
    



return(
<div className="headline-container"> 
{render}
</div>
)



}


export default Headline