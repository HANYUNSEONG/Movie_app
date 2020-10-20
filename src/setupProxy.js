const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const app = express();

module.exports = app => {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:4000',
            secure: false,
            changeOrigin: true
        })
    )
}