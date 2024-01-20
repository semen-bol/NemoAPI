const request = require("../utils/request.js")

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

    async utils_getServerTime() {
        let params = `?access_token=${this.token}&v=${this.version}`
        let result = await request.newReq(url, "utils.getServerTime", params)
        return result
    }

    async utils_getShortLink(link) {
        let params = `?access_token=${this.token}&v=${this.version}&url=${link}`
        let result = await request.newReq(url, "utils.getShortLink", params)
        return result
    }

    async utils_getStats() {
        let params = `?access_token=${this.token}&v=${this.version}`
        let result = await request.newReq(url, "utils.getStats", params)
        return result
    }

    async chats_editTitle(chatId, title) {
        let params = `?access_token=${this.token}&v=${this.version}&chat_id=${chatId}&title=${title}`
        let result = await request.newReq(url, "chats.editTitle", params)
        return result
    }

    async db_check(userId) {
        if(!userId) return { error: { error_code: -3, error_msg: "One of parametr invalid or empty" } }
        let params = `?access_token=${this.token}&v=${this.version}&user_id=${userId}`
        let result = await request.newReq(url, "db.check", params)
        return result
    }
}

module.exports = { api }