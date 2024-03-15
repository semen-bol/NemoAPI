const request = require("../utils/request.js")

class api {
    #_token; #_version; #_apiUrl;
    constructor({token, v = 1, url = "https://api.nemo-bot.site/m/"}) {
        this.#_token = token;
        this.#_version = v;

        this.#_apiUrl = url;
    } 

    acc = {
        getInfo: async () => {
            let params = `?access_token=${this.#_token}&v=${this.#_version}`
            let result = await request.newReq(this.#_apiUrl, "acc.getInfo", params)
            return result
        }
    }

    utils = {
        getServerTime: async () => {
            let params = `?access_token=${this.#_token}&v=${this.#_version}`
            let result = await request.newReq(this.#_apiUrl, "utils.getServerTime", params)
            return result
        },
        getShortLink: async ({link}) => {
            let params = `?access_token=${this.#_token}&v=${this.#_version}&url=${link}`
            let result = await request.newReq(this.#_apiUrl, "utils.getShortLink", params)
            return result
        },
        getStats: async () => {
            let params = `?access_token=${this.#_token}&v=${this.#_version}`
            let result = await request.newReq(this.#_apiUrl, "utils.getStats", params)
            return result
        }
    }

    chats = {
        editTitle: async ({chat_id, title}) => {
            let params = `?access_token=${this.#_token}&v=${this.#_version}&chat_id=${chat_id}&title=${title}`
            let result = await request.newReq(this.#_apiUrl, "chats.editTitle", params)
            return result
        }
    }

    db = {
        check: async ({user_id}) => {
            if(!user_id) return { error: { error_code: -3, error_msg: "One of parametr invalid or empty" } }
            let params = `?access_token=${this.#_token}&v=${this.#_version}&user_id=${user_id}`
            let result = await request.newReq(this.#_apiUrl, "db.check", params)
            return result
        }
    }

    premium = {
        citata: async ({name, avatar, text, date, background}) => {
            let body = {
                access_token: this.#_token,
                v: this.#_version,
                name: name,
                avatar: avatar,
                text: text,
                date: date,
                background: background
            }
            let result = await request.postReq(this.#_apiUrl, "premium.citata", body)
            return result
        }
    }
}

module.exports = { api }