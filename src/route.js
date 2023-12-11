const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>Hello I can check your IP Address</h1><form method="get" action="whoami">Are you agree?<input type="submit" value="whoami"/></form>');
});

router.get('/whoami', (req, res) => {
  const ipAddress = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0] : req.connection.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  return res.json({
    ipaddress: ipAddress,
    language: language,
    software: software
  });
});

module.exports = router;