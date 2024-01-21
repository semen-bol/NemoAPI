const request = require("../utils/request.js")

var url = "http://localhost/m/"

class api {
    constructor(token, v) {
        this._token = token;
        this._version = v;
    }  

    acc = {
        getInfo: async () => {
            let params = `?access_token=${this._token}&v=${this._version}`
            let result = await request.newReq(url, "acc.getInfo", params)
            return result
        }
    }

    utils = {
        getServerTime: async () => {
            let params = `?access_token=${this._token}&v=${this._version}`
            let result = await request.newReq(url, "utils.getServerTime", params)
            return result
        },
        getShortLink: async ({link}) => {
            let params = `?access_token=${this._token}&v=${this._version}&url=${link}`
            let result = await request.newReq(url, "utils.getShortLink", params)
            return result
        },
        getStats: async () => {
            let params = `?access_token=${this._token}&v=${this._version}`
            let result = await request.newReq(url, "utils.getStats", params)
            return result
        }
    }

    chats = {
        editTitle: async ({chat_id, title}) => {
            let params = `?access_token=${this._token}&v=${this._version}&chat_id=${chat_id}&title=${title}`
            let result = await request.newReq(url, "chats.editTitle", params)
            return result
        }
    }

    db = {
        check: async ({user_id}) => {
            if(!user_id) return { error: { error_code: -3, error_msg: "One of parametr invalid or empty" } }
            let params = `?access_token=${this._token}&v=${this._version}&user_id=${user_id}`
            let result = await request.newReq(url, "db.check", params)
            return result
        }
    }
}

module.exports = { api }