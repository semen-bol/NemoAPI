const nemo = require("nemocm-api"); 

const api = new nemo.api({token: "nemo.t.test", url: "http://localhost/method/"})

async function getInfo() {
    let request = await api.utils.getShortLink({link: "vk.com"})
    console.log(request)
}

getInfo() 