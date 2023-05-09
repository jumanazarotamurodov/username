let box = document.querySelector(".box1")
let input = document.querySelector("input")
let btn = document.querySelector("button")
btn.addEventListener("click" , () =>{
  
    let ui = "";
    fetch('https:api.github.com/users/' + input.value)
      .then(response => response.json())
      .then(json => {
  
        ui += `
            
            <img src=${json.avatar_url} alt="" />
         
          
            
              <h2>${json.name}</h2>
              <a href="#" class="login">@${json.login}</a>
              
            
            
              
                <p>Followers:</p>
                <p id="pp"> ${json.followers}</p>
             <p>   Following:</p>
             <p id="pp">${json.following}</p>
  
             
                <p>Repos:</p>
                <p id="pp"> ${json.public_repos}</p>
            
           
  
            
                `
  
        box.innerHTML = ui
      })
  
  
  })
  

