/*
/ 100% javascript. Made with Love 
/ Axios module :D
/ 100% javascript. Made with Love 
*/

const axios = require("axios")

async function newReq (url, method, params){ 
    let newUrl = url + method + params

    let request = await axios.get(newUrl)
    let data = request.data

    if(data.error){ 
        return data.error
    } else if (data.response){ 
        return data.response
    } else {
        return data
    }
}

async function postReq (url, method, body){
    let newUrl = url + method

    let request = await axios.post(newUrl, body)
    let data = request.data

    if(data.response){
        return data.response
    } else if(data.error){
        return data.error
    } else {
        return data
    }
}

module.exports = { newReq: newReq, postReq: postReq }