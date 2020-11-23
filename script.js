const requestURL = 'https://jsonplaceholder.typicode.com/photos'

async function getResponse() {
    let response = await fetch(requestURL)
    let content = await response.json()
    content = content.splice(0, 3)

    let list = document.querySelector('.content')

    let key;

    for (key in content) {
        list.innerHTML += `
        <div class="post">
            <h4>${content[key].title}</h4>
            <img src="${content[key].url}" width="150">
            </div>
        `
    }
}

getResponse();