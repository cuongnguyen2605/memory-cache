const NodeCache = require('node-cache');
const cache     = new NodeCache();

module.exports = (req, res, next) => {
    let key = req.originalUrl || req.url;
    let motors = cache.get(key); 
    if (motors) {
        res.send(JSON.parse(motors));
        return;
    }
    res.sendResponse = res.send;
    res.send = data => {
        cache.set(key, data);
        res.sendResponse(data);
    };
    next();
}
