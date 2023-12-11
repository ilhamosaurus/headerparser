const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>Hello I can check your IP Address</h1><form method="get" action="whoami">Are you agree?<input type="submit" value="whoami"/></form>');
})

module.exports = router;