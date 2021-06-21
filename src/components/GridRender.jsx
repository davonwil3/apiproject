import React, { useState, useEffect } from 'react';
import Headline from './headline'


function Grid(props){

    var [articlearray, setArticle]= React.useState(null);
   
    let render = <div></div>

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({headline: props.headline})

        };

        console.log(JSON.stringify(options));
    
        
        useEffect(() => {
           
                
                fetch('/headlines', options).then(response => response.json()).then(data =>{
                          
                    var newsData = data.newsObject
        
                    
                    
                   setArticle(newsData)
                   console.log("ran once");
                    
                    
                })
                
                        
            
          },[props.headline]);
    

          console.log(articlearray);

          if (articlearray){

            render = <div className=" flex-container render-wrapper" >
            
            <div class="grid-container top-grid">
            <div class="grid-item grid-1"><Headline title= {articlearray[0].title} urlToImage= {articlearray[0].urlToImage} section='main' url={articlearray[0].url}/></div>
            <div class="grid-item grid-2"><Headline title= {articlearray[1].title} urlToImage= {articlearray[1].urlToImage} url={articlearray[1].url} title2= {articlearray[2].title} urlToImage2= {articlearray[2].urlToImage} url2={articlearray[2].url}  section='long'/></div>
            <div class="grid-item grid-3"><Headline title= {articlearray[4].title} urlToImage= {articlearray[4].urlToImage} url={articlearray[4].url}  section='short'/></div>
            <div class="grid-item grid-4"><Headline title= {articlearray[5].title} urlToImage= {articlearray[5].urlToImage} url={articlearray[5].url} section='short'/></div>
                
            </div>

            <div class="grid-container bottom-grid">
                <div class="grid-item grid-5"><Headline title= {articlearray[6].title} urlToImage= {articlearray[6].urlToImage} url={articlearray[6].url} section='double' /></div>
                <div class="grid-item grid-6"><Headline title= {articlearray[7].title} urlToImage= {articlearray[7].urlToImage} url={articlearray[7].url} section='double'/></div>

            </div>
            </div>
          }

   
    
return(
<div className="flex-container render-container" >
    
    {render}
</div>
)



}


export default Grid