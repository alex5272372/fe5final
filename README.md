# Степ проект React
[Задание](https://gitlab.com/dan-it/groups/fe5/tree/master/step-project-instagram)

[Работа в команде на финальном проекте](https://dan-it.gitlab.io/fe-book/teamwork/final.html)

[README.md для Create React App](./CREATE_REACT_APP.md)

## Состав участников проекта

| № п/п | ФИО | Email | Телефон | 
|:------:|:---:|:-----:|:-------:|
| 1 | Николаенко Алексей | alex5272372@gmail.com | +38 (067) 527-23-72 |
| 2 | Кондратюк Михаил | makenotik@gmail.com |  |
| 3 |  |  |  |

### Задание для студента 1
1. Сверстать главную страницу `page`.

### Задание для студента 2
1. Сверстать страницу постов конкретного человека `user`.

### Задание для студента 3
1. Сверстать модальное окно поста `post`.

## Список использованных технологий
Для навигации по приложению использован [React Router v4](https://habr.com/ru/post/329996/).
В частности компонент `HashRouter` для статических сайтов.

Для управления состоянием данных и интерфейса использован инструмент [React Redux](https://maxfarseer.gitbooks.io/redux-course-ru-v2/content/sozdanie.html).  

### Сервис публикации приложений: Heroku
[Приложение](https://fe5final.herokuapp.com/)

[Администрирование](https://dashboard.heroku.com/apps/fe5final)

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

### Cервер приложений: Node.js
[Документация](https://medium.com/devschacht/node-hero-6a07ef8d822d)

[Документация по Create React App](https://facebook.github.io/create-react-app/)
