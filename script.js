const requestURL = 'https://jsonplaceholder.typicode.com/photos'
let list = document.querySelector('.content')
let bottonRequest = document.querySelector('.request')
let bottonBackgroundBlue = document.querySelector('.background_blue')
let header = document.querySelector('header')


async function getResponse() {
    let response = await fetch(requestURL)

    let content = await response.json()
        content = content.splice(0, 5)

        let key;

        for (key in content) {
            list.innerHTML += `
        <div class="post">
            <h4>${content[key].title}</h4>
            <img src="${content[key].url}" width="600">
            </div>
        `
        }

    }


bottonRequest.addEventListener('click', event => {
    getResponse()
})

/*bottonBackgroundBlue.addEventListener('click', event => {
    list.setAttribute("style", "background-color: blue;")
})*/

function setColorBlue() {
    list.setAttribute("style", "background-color: blue;")
    }

