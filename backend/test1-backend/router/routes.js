const express =require('express')
// npm
const menucontroller =require('../Controller/menucontroller');
const { list } = require('../db');

const router = new express.Router()

// get all menu list item
// router.get('all menu',menucontroller.getallmenu)
router.get('/list', async (req, res) => {
    try {
      const users = await list.find();
      res.json(users);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });
  
module.exports= router;