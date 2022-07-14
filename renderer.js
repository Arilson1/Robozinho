const { shell } = require('electron')
const os = require('os')

const message = document.getElementById('message').value

content = {
    hostname: os.hostname(),
    userinfo: os.userInfo(),
    message: "" + message.value,
}

document.getElementById('openTicket').addEventListener('click', (event) => {
    console.log(content)
})