/*
/ 100% javascript. Made with Love 
/ Easy check for error
/ 100% javascript. Made with Love 
*/

async function checkError(num) {
    let error = {
      "0": "Supported only GET method",
      "3": "Not found",
      "4": "Unknown method passed",
      "5": "User authorization falied: invalid access_token",
      "6": "User authorization falied: no access_token passed",
      "26": "Limit reached",
      "100": "One of parametr is invalid",
    }
    let find = error[num]
    if(!find) return { error: { error_code: -1, error_msg: "Uncheackable err" } } // Если такая ошибка не обрабатывается
    let message = { error: {error_code: num, error_msg: find} }
    return message;
}

module.exports = { errHandler: checkError}