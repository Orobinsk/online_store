const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const {username, password} = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const {users = []} = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({message: 'User not found'});
    } catch (e) {
        console.log(e);
        return res.status(500).json({message: e.message});
    }
});

// Эндпоинт для создания нового пользователя
server.post('/registration', (req, res) => {
    try {
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const {users = []} = db;

        const {username, password} = req.body;

        // Проверяем, существует ли пользователь с таким именем
        const existingUser = users.find((user) => user.username === username);

        if (existingUser) {
            return res.status(400).json({message: 'User already exists'});
        }

        // Создаем нового пользователя
        const newUser = {
            id: users.length + 1, // Генерируем уникальный ID
            username,
            password,
        };

        // Добавляем нового пользователя в базу данных
        users.push(newUser);
        db.users = users;

        // Сохраняем обновленную базу данных в файл
        fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db, null, 2), 'UTF-8');

        return res.json(newUser);
    } catch (e) {
        console.log(e);
        return res.status(500).json({message: e.message});
    }
});

// Эндпоинт для типов товара в магазине
server.get('/shop/types', (req, res) => {
    try {
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { types = [] } = db;

        return res.json(types);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: e.message });
    }
});

// Эндпоинт для брендов в магазине
server.get('/shop/brands', (req, res) => {
    try {
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { brands = [] } = db;

        return res.json(brands);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: e.message });
    }
});

// Эндпоинт для списка девайсов в магазине
server.get('/shop/devices', (req, res) => {
    try {
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { devices = [] } = db;

        return res.json(devices);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: e.message });
    }
});

// Эндпоинт для девайса в магазине по id
server.get('/shop/devices/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { devices = [] } = db;

        const deviceFromBd = devices.find(
            (device) => device.id === id
        );

        if (deviceFromBd) {
            return res.json(deviceFromBd);
        }

        return res.status(404).json({ message: 'Device not found' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: e.message });
    }
});

server.use(router);

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({message: 'AUTH ERROR'});
    }

    next();
});



// запуск сервера
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
