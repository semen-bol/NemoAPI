const request = require("../utils/request.js")
const err = require("../utils/errhandler.js")

var url = "http://localhost/m/"

class api {
    constructor(token, v) {
        this.token = token;
        this.version = v;
    }

    async acc_getInfo() {
        let params = `?access_token=${this.token}&v=${this.version}`
        let result = await request.newReq(url, "acc.getInfo", params)
        return result
    }
}

module.exports = { api }