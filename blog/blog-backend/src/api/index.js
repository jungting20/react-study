const Router = require('koa-router');
const posts = require('./posts');
const api = new Router();

api.get('/posts', posts.routes());
module.exports = api;
