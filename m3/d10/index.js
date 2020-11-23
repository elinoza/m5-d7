


 const url= "https:striveschool-api.herokuapp.com/api/movies/"
let array=[]
window.onload=()=>{
    
    fetch(url,{
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNGRhZmFkOGMzODAwMTc1YTMxYjAiLCJpYXQiOjE2MDUyNjMyNDEsImV4cCI6MTYwNjQ3Mjg0MX0.2wS2vqKOgwvGs8sqWRA3Uy5WjIT9mrxctVexGeSB5Vo",
            }
        })
        .then((response) => {
        if (response.ok) {
       
          return response.json();
          }
         })
      .then((body) => {
         
              array.push(body)

              body.forEach(el=>{
              
                fetch(url+ el,{
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNGRhZmFkOGMzODAwMTc1YTMxYjAiLCJpYXQiOjE2MDUyNjMyNDEsImV4cCI6MTYwNjQ3Mjg0MX0.2wS2vqKOgwvGs8sqWRA3Uy5WjIT9mrxctVexGeSB5Vo",
                        }
                    })
                    .then((response) => {
                    if (response.ok) {
                   
                      return response.json();
                      }
                     })
                  .then((body) => {
                     
                    const main=document.querySelector('#main')
                    let div=document.createElement('div')
                    
                    main.appendChild(div)

                   let row=document.createElement('div')
                    row.className="row no-gutters"
                    div.innerHTML=`<h3 class="mt-4 text-white ml-2 mt-5 mb-3">${el}</h3>`
                    body.forEach(element=>{
                        console.log(element)                            
                        
                 row.innerHTML+=  `	
        <a href="backoffice.html?id=${element._id}" id="info"  " >
            <div class="col text-center col-6 col-md-4 col-lg-2 mb-3 px-1"  >
                <img class=" rounded" src="${element.imageUrl} "/>
                <h3 class="text-white">${element.name}</h3>
               
            </div>			
        </div></a>`
                    main.appendChild(row)
                    
                    })

                    })
                
                  .catch((err) => {
                    //alert("AN ERROR HAS OCCURRED  " + err);
                    console.error(err)     
                  })
              })
            
           
            
        })
  
      .catch((err) => {
        //alert("AN ERROR HAS OCCURRED  " + err);
        console.error(err)     
      })
    

}




        

    

   
       
 
    
 


  
