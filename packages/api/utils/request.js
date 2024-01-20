/*
/ 100% javascript. Made with Love 
/ xmlhttprequest module
/ 100% javascript. Made with Love 
*/

const axios = require("axios")

async function newReq (url, method, params){ 
    let newUrl = url + method + params

    let request = await axios.get(newUrl)
    let data = request.data

    if(data.error){ 
        return data 
    } else if (data.response){ 
        return data 
    } else { 
        return { error: { error_code: -1, error_msg: "Server has been disabled" }} 
    }
}

module.exports = { newReq: newReq }