# NemoAPI
## Информация
Оболочка для API Nemo, который позволяет установить и почти ничего не делать, кроме авторизации и вызова методов с параметрами.

Made with Love ❤️ (100% JavaScript)

Owner: Семён Болотов (https://vk.com/nemolayn)

API: NemoCM Bot (https://vk.com/nemocm)

Open Source: https://github.com/semen-bol/NemoAPI

## Использование
Перед началом использования, нужно установить зависимость
```
npm i nemocm-api 
npm i node-fetch@2 // В случае если не работает модуль
```
Пример использования:
```
const nemo = require("nemocm-api"); // Инициализация модуля

const api = new nemo.api("nemo.t.test", "1") // Делаем настройку (token, version)

async function getInfo() { // Описание функции
    let request = await api.acc_getInfo() // Await тут идет как обязательная вещь
    console.log(request) // Выводим результат
}

getInfo() // Вызов функции ( { response: { user_id: 1, inBot_id: 1, user_tag: 'Павел' } } )
```