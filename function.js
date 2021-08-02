const { https } = require('firebase-functions');
const { default: next } = require('next');
const path = require('path');

const server = next({
  dev: false,
  conf: { distDir: `${path.relative(process.cwd(), __dirname)}/.next` },
});

const nextjsHandle = server.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
  return server.prepare().then(() => nextjsHandle(req, res));
});
