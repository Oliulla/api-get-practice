function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postContainer = document.getElementById('posts-container');
    posts.map(post => {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h4>User-${post.id}</h4>
            <h5>Post: ${post.title}</h5>
            <p>${post.body}</p>
        `

        postContainer.appendChild(div);
    })
}

loadPosts();