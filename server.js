const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({
    static: path.join(__dirname, 'public')
});

// Ajout des en-têtes CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Expose-Headers', 'X-Total-Count, Content-Range');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        return res.status(200).json({});
    }
    next();
});

// Middleware pour ajouter Content-Range header
server.use((req, res, next) => {
    res.header('Content-Range', 'posts 0-24/319');
    next();
});

server.use(middlewares);
server.use(router);

const port = 3004;
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});