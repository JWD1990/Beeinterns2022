const requestURLUsers = 'https://reqres.in/api/users'
const requestURLLogin = 'https://reqres.in/api/login'

newData = {
    "username": "george.bluth@reqres.in",
    "email": "george.bluth@reqres.in",
    "password": "george"
}

function sendRequestFirst(method, url, body = null){
    return new Promise(((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true)
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
        xhr.onload = () =>{
            if (xhr.status >= 400){
                reject(xhr.response)
            }else {
                resolve(xhr.response)
            }
        }
        // обработка ошибки сети
        xhr.onerror = () =>{
            console.log(xhr.response)
        }
        xhr.send(JSON.stringify(body))

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status <= 400) {
                console.log(xhr.status)
            }
        }
    }))
}

function sendRequestSecond(method, url, userToken){
    return new Promise(((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true)
        xhr.responseType = 'json'
        xhr.setRequestHeader('Cache-Control','no-cache')
        xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
        xhr.setRequestHeader('Accept-Language' , 'ru')
        xhr.setRequestHeader('Authorization',`Bearer ${userToken}`)
        xhr.onload = () =>{
            if (xhr.status >= 400){
                reject(xhr.response)
            }else {
                resolve(xhr.response)
            }
        }
        // обработка ошибки сети
        xhr.onerror = () =>{
            console.log(xhr.response)
        }
        xhr.send()
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status <= 400) {
                console.log(xhr.status)
            }
        }
    }))
}

sendRequestFirst('POST', requestURLLogin, newData)
    .then(res =>{
        sendRequestSecond('GET', requestURLUsers, res.token)
            .then(res =>{
                let emailUsersArray = []
                res.data.forEach((items) =>{
                    emailUsersArray.push(items.email)
                })
                console.log(emailUsersArray)
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))