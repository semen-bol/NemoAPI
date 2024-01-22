# NemoAPI
![Static Badge](https://img.shields.io/github/license/semen-bol/NemoAPI)
![Static Badge](https://img.shields.io/librariesio/dependent-repos/npm/axios?label=Axios)
## Информация
Оболочка для API Nemo, который позволяет установить и почти ничего не делать, кроме авторизации и вызова методов с параметрами. Модуль поддерживает автоисправление и подсказки в таких приложениях как VS Code и т.п.

Made with Love ❤️ (100% JavaScript)

Owner: Семён Болотов (https://vk.com/nemolayn)

API: NemoCM Bot (https://vk.com/nemocm)

Open Source: https://github.com/semen-bol/NemoAPI

## Использование
Перед началом использования, нужно установить зависимость
```
npm i nemocm-api 
npm i axios // В случае если не работает модуль
```
Пример использования:
```
const nemo = require("nemocm-api"); // Инициализация модуля

const api = new nemo.api({token: "NemoToken", v: 1}) // Делаем настройку (token, version)

async function getInfo() { // Описание функции
    let request = await api.db.check({user_id: 1}) // Await тут идет как обязательная вещь
    console.log(request) // Выводим результат
}

getInfo() // Вызов функции 
```
