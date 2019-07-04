const flatCache = require('flat-cache');
const cache     = flatCache.load('cacheId');

module.exports = (req, res, next) => {
    let key = req.originalUrl || req.url;
    let motors = cache.getKey(key); 
    if (motors) {
        res.send(JSON.parse(motors));
        return;
    }
    res.sendResponse = res.send;
    res.send = data => {
        cache.setKey(key, data);
        res.sendResponse(data);
    };
    next();
}
