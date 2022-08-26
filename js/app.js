// function loadData2(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(data => console.log(data))
// }

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data))
}

const displayUsers = user => {
    const userContainer = document.getElementById('user-container');
    user.map(person => {
        const userName = person.username;
        
        const li = document.createElement('li');
        li.textContent = `${userName}`;

        userContainer.appendChild(li);
    })
}