const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../data.json');

/* LOGIN SERVICE */
router.post('/', (req, res, next) => {

  //read users from data.json
  fs.readFile(DATA_FILE, (err, data) => {

    let isAuthenticated = false;
    const users = JSON.parse(data);
    const loginDetails = {
      username: req.body.username,
      password: req.body.password
    };

    //iterate through each valid users
    for (var i = 0; i < users.length; i++) {

      if (users[i].username === loginDetails.username) {
        if (users[i].password === loginDetails.password) {
          isAuthenticated = true;
        }
        break;
      }
    }

    res.setHeader('Cache-Control', 'no-cache');

    if (isAuthenticated) {
      res.status(200).json({message: 'Login successful!'});
    } else {
      res.status(401).json({message: 'Login failed. Use login details: user/pas'});
    }
  });
});

module.exports = router;
