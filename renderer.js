const { shell } = require('electron')
const os = require('os')

const message = document.getElementById('message')
const grato = document.getElementById('grato')
const app = document.getElementById('app')

grato.style.display = "none"

content = {
    message: "",
    hostname: os.hostname(),
    userinfo: os.userInfo(),
}

document.getElementById('openTicket').addEventListener('click', (event) => {
    content.message = message.value
    console.log(content)
    app.style.display = "none"
    grato.style.display = "flex"
})


