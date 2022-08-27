const postComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => allComments(comments))
}

const allComments = comms => {
    const commentsContainer = document.getElementById('comments-container');
    comms.map(comms => {
        // console.log(comms)
        const div = document.createElement('div');
        div.classList.add('comms');
        div.innerHTML = `
            <h4>User-${comms.id}</h4>
            <h3>User-${comms.name}</h3>
            <h5>User-${comms.email}</h5>
            <p>User-${comms.body}</p>
        `
        commentsContainer.appendChild(div);
    })
}

postComments();