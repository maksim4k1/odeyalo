## Начало работы

Для того, чтобы запустить проект на локальном устройстве нужно скачать [nodejs](https://nodejs.org/en) вместе с пакетным менеджером npm.

После установки nodejs и npm зайдите через консоль в папку проекта и запустите следующую команду для установки зависимостей:

```bash
npm install
```

Чтобы запустить локальный сервер пропишите в консоли следующую комманду:

```bash
npm run dev
```

Для создания билда проекта пропишите в консоли:

```bash
npm run build
```

Чтобы запустить билд проекта введите в консоль:

```bash
npm start
```

Сервер откроется по ссылке [http://localhost:3000](http://localhost:3000) в браузере, где вы можете увидеть разработанный проект.

## Dockerize

Для того чтобы запустить docker-compose файл для разработки пропишите в консоли следующую команду:

```bash
make dev
```

А чтобы запустить docker-compose файл для продакшена введите в консоль следующее:

```bash
make prod
```

Чтобы остановить работу нажмите Ctrl + C
