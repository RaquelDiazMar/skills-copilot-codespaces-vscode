// Create web server
// 1. Import module http
const http = require('http');
// 2. Create server
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Welcome to Node.js!</h1>');
  res.end();
});
// 3. Listen to port 8080
server.listen(8080);
console.log('Server started at port 8080');
```

- Run the server:

```
$ node comments.js
```

- Open a web browser and type `http://localhost:8080` in the address bar, you will see the message "Welcome to Node.js!" on the screen.

- To stop the server, press `Ctrl + C` in the terminal.

### 2.3.2. Create a web server with Express

- Create a new file `comments-express.js`:

```javascript
// Path: comments-express.js
// Create web server with Express
// 1. Import module express
const express = require('express');
// 2. Create an instance of express
const app = express();
// 3. Create a route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Node.js with Express!</h1>');
});
// 4. Listen to port 8080
app.listen(8080, () => {
  console.log('Server started at port 8080');
});
```

- Run the server:

```
$ node comments-express.js
```

- Open a web browser and type `http://localhost:8080` in the address bar, you will see the message "Welcome to Node.js with Express!" on the screen.

- To stop the server, press `Ctrl + C` in the terminal.

## 2.4. Create a web server with Express and handle requests

- Create a new file `comments-express-requests.js`:

```javascript
// Path: comments-express-requests.js
// Create web server with Express and handle requests
// 1. Import module express
const express = require('express');
// 2. Create an instance of express
const app = express();
// 3. Create a route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Node.js with Express!</h1>');
});
app.get('/hello',