const request = require("../utils/request.js")

class api {
    #_token; #_version; #_apiUrl; #_base_params
    constructor({token, v = 1, url = "https://api.nemo-bot.site/m/"}) {
        this.#_token = token;
        this.#_version = v;

        this.#_apiUrl = url;
        this.#_base_params = `?access_token=${this.#_token}&v=${this.#_version}`
    } 

    acc = {
        getInfo: async () => {
            let result = await request.newReq(this.#_apiUrl, "acc.getInfo", "", this.#_base_params)
            return result
        }
    }

    utils = {
        getServerTime: async () => {
            let result = await request.newReq(this.#_apiUrl, "utils.getServerTime", "", this.#_base_params)
            return result
        },
        getShortLink: async ({link}) => {
            let result = await request.newReq(this.#_apiUrl, "utils.getShortLink", `&link=${link}`, this.#_base_params)
            return result
        },
        getStats: async () => {
            let result = await request.newReq(this.#_apiUrl, "utils.getStats", "", this.#_base_params)
            return result
        }
    }

    chats = {
        editTitle: async ({chat_id, title}) => {
            let result = await request.newReq(this.#_apiUrl, "chats.editTitle", `&chat_id=${chat_id}&title=${title}`, this.#_base_params)
            return result
        }
    }

    db = {
        check: async ({user_id}) => {
            let result = await request.newReq(this.#_apiUrl, "db.check", `&user_id=${user_id}`, this.#_base_params)
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