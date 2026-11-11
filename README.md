# Лабораторна робота №14 — Bootstrap

Адаптивна верстка двох HTML-сторінок за макетами з презентації **«Веб-програмування. Заняття 14»**. Використано **Bootstrap 5**, власні CSS `@media`, **Node.js** та **Express.js**.

## Завдання

- **Завдання 1** — шапка, ліве меню, контент, праве меню та підвал. Макет змінюється на чотирьох діапазонах ширини: `≤767px`, `768–991px`, `992–1199px`, `≥1200px`.
- **Завдання 2** — три кольорові блоки в 12-колонковій сітці Bootstrap: `6/3/3` (≥1200), `8/4` + `12` (992–1199), `12` + `6/6` (768–991), `12/12/12` (≤767).
- **Додаткове завдання** — Express-сервер із маршрутами `/task1` та `/task2`.

## Запуск

Потрібен Node.js 18 або новіший.

```bash
npm install
npm start
```

Відкрити [http://localhost:3000](http://localhost:3000). Для перевірки адаптивності відкрити DevTools (`F12`) → режим мобільного пристрою та перевірити ширини `375`, `800`, `1024`, `1280` px.

## Структура

```text
bootstrap-lab14/
├── public/
│   ├── css/styles.css   # Стилі та media queries
│   ├── index.html       # Головна сторінка
│   ├── task1.html       # Завдання 1
│   └── task2.html       # Завдання 2
├── server.js            # Express маршрути
├── package.json
├── .gitignore
└── README.md
```

## Публікація на GitHub

Створіть порожній репозиторій `bootstrap-lab14`, потім виконайте:

```bash
git init
git add .
git commit -m "Complete Bootstrap responsive layout lab 14"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bootstrap-lab14.git
git push -u origin main
```

Замініть `YOUR_USERNAME` на власний GitHub-логін. `node_modules` не завантажується завдяки `.gitignore`.

> Примітка: Bootstrap підключається через CDN, тому для коректного відображення потрібен інтернет.
