# Степ проект React
[Задание](https://gitlab.com/dan-it/groups/fe5/tree/master/step-project-instagram)

[Работа в команде на финальном проекте](https://dan-it.gitlab.io/fe-book/teamwork/final.html)

[README.md для Create React App](client/README.md)

## Инструкция по запуску проекта
### Последовательность действий
1. Установить [Node.js](https://nodejs.org/en/download/)
2. Склонировать проект с репозитория https://github.com/alex5272372/fe5final.git
3. Создать файл с настройками серверной части `./settings.js`
4. Создать файл с настройками клиентской части `./client/src/settings.js`
5. В папке проекта выполнить команду установки зависимостей `npm install`
6. В папке `client` выполнить команду установки зависимостей `npm install`
7. В папке `client` выполнить команду сборки проекта `npm run build`
8. В папке проекта выполнить команду запуска приложения `npm start`
9. Запустить приложение по адресу http://localhost:5000

### Формат файла настроек серверной части `./settings.js`
```js
module.exports = {
    dbName: 'photobook',
    dbLogin: 'Your login',
    dbPassword: 'Your password'
};
```

### Формат файла настроек клиентской части `./client/src/settings.js`
```js
export const APP_HOST_NAME = 'https://fe5final.herokuapp.com';
```

## Состав участников проекта

| № п/п | ФИО | Email | Телефон | 
|:------:|:---:|:-----:|:-------:|
| 1 | Николаенко Алексей | alex5272372@gmail.com | +38 (067) 527-23-72 |
| 2 | Кондратюк Михаил | makenotik@gmail.com |  |
| 3 |  |  |  |

### Задание для студента 1
1. Базовая архитектура приложения.
2. Сверстать главную страницу `Page`.

### Задание для студента 2
1. Сверстать страницу постов конкретного человека `User`.

### Задание для студента 3
1. Сверстать модальное окно авторизации `SignIn` на основании [примера](https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/page-layout-examples/sign-in).
2. Сверстать модальное окно поста `Post`.

## Список использованных технологий
### Cервер приложений: Node.js
[Документация](https://medium.com/devschacht/node-hero-6a07ef8d822d)

[Документация по Create React App](https://facebook.github.io/create-react-app/)

### Веб-сервер: Express
[Документация](https://expressjs.com/ru/)

### Сервис публикации приложений: Heroku
[Приложение](https://fe5final.herokuapp.com/)

[Администрирование](https://dashboard.heroku.com/apps/fe5final)

[Deploy React and Express to Heroku](https://daveceddia.com/deploy-react-express-app-heroku/)

### База данных: MongoDB
[Администрирование](https://cloud.mongodb.com/v2/5cff8dc0cf09a2451565a0d8#clusters)

[Документация по Node.js драйверу](http://mongodb.github.io/node-mongodb-native/3.2/)

Имя базы данных: photobook

#### Коллекция 1: users
Элемент:
```json
{
    "login": "alex",
    "password": "123",
    "icon": "./public/img/alexIcon.png",
    "subs": [
      "5d32c8321c9d4400005aa28c"
    ]
}
```

#### Коллекция 2: posts
Элемент:
```json
{
    "postDate": "2019-03-01T10:15:00",
    "photo": "./public/img/photo1.png",
    "likes": [
      "5d32c7d01c9d4400005aa28b",
      "5d32c8321c9d4400005aa28c"
    ],
    "comments": [
      {
        "date": "2019-03-01T10:20:00",
        "user": "5d32c7d01c9d4400005aa28b",
        "comment": "Comment 1"
      },
      {
        "date": "2019-03-01T10:25:00",
        "user": "5d32c8321c9d4400005aa28c",
        "comment": "Comment 2"
      }     
    ]
}
```

### Клиентская библиотека: React.js
[Документация](https://ru.reactjs.org/)

[Учебник](https://learn-reactjs.ru/home)

### Библиотека для стилизации: MaterialUI
[Документация](https://material-ui.com/ru/getting-started/installation)

### Библиотека для маршрутизации: React Router v4
[Документация](https://habr.com/ru/post/329996/)

Использован компонент `BrowserRouter`.

### Библиотека для управления состоянием: React Redux
[Документация](https://maxfarseer.gitbooks.io/redux-course-ru-v2/content/sozdanie.html)

[Unit тестирование redux экшенов и редьюсеров](https://maxpfrontend.ru/vebinary/unit-testirovanie-redux-ekshenov-i-redyuserov/)