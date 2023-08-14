window.onload = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        const users = await document.getElementById('users')
        users.innerHTML = await data.map((user) => {  
        
            return `<tr>
                <th scope="row">${user.id}</th>
                <td>${user.email}</td>
                <td>${user.username}</td>
                <td>${user.name}</td>
                </tr>`
                        
    }).join('')
    } catch (error) {
        console.log('error :', error )
    }
}

function searchUser(){
    
}


let input = document.getElementById("myInput");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("myBtn").click();
    searchUser()
  }
});
