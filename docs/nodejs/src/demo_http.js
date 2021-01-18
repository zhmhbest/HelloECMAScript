const http = require('http');
/**
 * @callback onControllerCallback
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
/**
 *
 * @param {string} host
 * @param {number} port
 * @param {Array<{test: RegExp, callback: onControllerCallback}>} [arrayController]
 * @param {onControllerCallback} [defaultController]
 */
const start = (host, port, arrayController, defaultController) => {
    host = host || "127.0.0.1";
    port = port || 9527;
    arrayController = arrayController || [];
    const server = http.createServer((req, res) => {
        console.log(req.url);
        for (let item of arrayController) {
            if (null !== req.url.match(item.test)) {
                item.callback(req, res);
                return;
            }
        }
        if (undefined !== defaultController) {
            defaultController(req, res);
        }
    });
    server.listen(port, host, () => {
        console.log(`Web Server started at http://${host}:${port}`);
    });
};

const controllers = [];
controllers.push({
    test: /^\/$/,
    callback: (req, res) => {
        res.write("Hello");
        res.end();
    }
});

start(undefined, undefined, controllers, (req, res) => {
    res.write(req.url);
    res.end();
});