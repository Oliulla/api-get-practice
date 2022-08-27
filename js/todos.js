const postToDos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => toDoList(data))
}

const toDoList = todo => {
    const todoContainer = document.getElementById('todos-container');
    todo.map(listObj => {
        // console.log(listObj)
        const div = document.createElement('div');
        div.classList.add('comms')
        div.innerHTML = `
            <h4>User-${listObj.id}</h4>
            <p>${listObj.title}</p>
            <p>${listObj.completed === true ? 'Task Completed' : 'Task Incompleted'}</p>
        `
        todoContainer.appendChild(div);
    })
}

postToDos()