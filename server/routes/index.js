const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({ usename: 'test-1' }));
router.get('/api', (req, res) => res.json({ usename: 'test-1' }));

module.exports = router;