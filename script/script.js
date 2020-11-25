//переносим адрес сервера в переменную
const requestURL = 'https://jsonplaceholder.typicode.com/photos'
//создаем переменную для окна основного контента переменной list
let list = document.querySelector('.content')
//создаем переменную для кнопки делающей запрос в переменной bottonRequest
let bottonRequest = document.querySelector('.request')

//функция запроса на сервер и дополнения контента
async function getResponse() {
//делаем запрос
    let response = await fetch(requestURL)
    let content = await response.json()
        content = content.splice(0, 5)
//добавляем данные на страницу
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

//вызываем функцию запроса по нажатию на кнопку
bottonRequest.addEventListener('click', event => {
    getResponse()
})

//функция меняет цвет фона контента
function setColorBlue() {
    list.setAttribute("style", "background-color: blue;")
    }
