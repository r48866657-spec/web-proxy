# Web Proxy

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/r48866657-spec/web-proxy.git
   ```
2. Change directory to the project folder:
   ```bash
   cd web-proxy
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage Guide
To run the web proxy server, use the following command:
```bash
npm start
```

Visit `http://localhost:3000` in your browser to access the web proxy.

## Configuration Details
You can configure the web proxy settings in the `config.js` file:
- `port`: Port number the server runs on.
- `targets`: An array of target URLs for the proxy to connect to.

### Example configuration:
```javascript
module.exports = {
    port: 3000,
    targets: [
        'http://example.com',
        'http://anotherexample.com'
    ]
};
```