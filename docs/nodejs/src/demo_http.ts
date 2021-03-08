import * as http from "http";
import { Server, IncomingMessage, ServerResponse } from "http";
const serverOptions = {
    port: 9999,
    host: "127.0.0.1"
};
const server: Server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
    const contentLength = ((x?: string) => undefined === x ? 0 : parseInt(x))(request.headers['content-length']);
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write(`HTTP${request.httpVersion} ${request.method} ${request.url}\n`);
    response.write(JSON.stringify(request.headers, undefined, "    "));
    response.write("\n");
    if (contentLength > 0) {
        request.on('data', chunk => {
            response.write(chunk);
        });
        request.on('end', () => {
            response.end();
        })
    } else {
        response.end();
    }
    // response.pipe(response);
});
server.listen(serverOptions.port, serverOptions.host, () => {
    console.log(`Web Server started at http://${serverOptions.host}:${serverOptions.port}`);
});