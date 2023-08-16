//Ricerca tramite bottone e tasto invio
let button = document.getElementById("myBtn").addEventListener('click', searchUser);
let input = document.getElementById("myInput");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchUser()
  }
});

//All'avvio compare la tabella completa degli utenti
window.onload = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        const users = document.getElementById('users')
        users.innerHTML = await data.map((user) => {  
        
            return `<tr>
                <th scope="row">${user.id}</th>
                <td>${user.email}</td>
                <td>${user.username}</td>
                <td>${user.name}</td>
                </tr>`
    }).join('')
    }catch(error){
        console.log('error :', error )
    }
}

//Questa è la funzione di ricerca utente
async function searchUser(){
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      let data = await response.json()
      console.log(input.value)
      const users = document.getElementById('users')
      const drop = document.getElementById('dropdown')
      users.innerHTML = ' '
      users.innerHTML = await data.map((user) => {  
        
        //Il filtro è dato dal valore del tag <select> e quello dell'input di testo
        if(drop.selectedIndex === 1){
          if(user.email.toLowerCase().includes(input.value.toLowerCase())){
            return `<tr>
            <th scope="row">${user.id}</th>
            <td>${user.email}</td>
            <td>${user.username}</td>
            <td>${user.name}</td>
            </tr>`
          }
        } else if(drop.selectedIndex === 2){
          if(user.username.toLowerCase().includes(input.value.toLowerCase())){
            return `<tr>
            <th scope="row">${user.id}</th>
            <td>${user.email}</td>
            <td>${user.username}</td>
            <td>${user.name}</td>
            </tr>`
          }
        } else if(drop.selectedIndex === 3){
          if(user.name.toLowerCase().includes(input.value.toLowerCase())){
            return `<tr>
            <th scope="row">${user.id}</th>
            <td>${user.email}</td>
            <td>${user.username}</td>
            <td>${user.name}</td>
            </tr>`
          }
        } else if(drop.selectedIndex === 0){
          if(user.name.toLowerCase().includes(input.value.toLowerCase()) || user.username.toLowerCase().includes(input.value.toLowerCase()) || user.email.toLowerCase().includes(input.value.toLowerCase())){
            return `<tr>
            <th scope="row">${user.id}</th>
            <td>${user.email}</td>
            <td>${user.username}</td>
            <td>${user.name}</td>
            </tr>`
          }
        }}).join('')
    }catch(error){
      console.log('error :', error )
  }
}



