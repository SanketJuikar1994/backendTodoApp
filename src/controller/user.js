var express = require('express');
var router = express.Router();
var user = require('../schema/user');
const userModel = require('../model/user');

router.post('/save', async (req, res) => {
  // console.log("first response or error",res)
  try {
    var userData = await userModel.saveUserTask(req.body);
    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send(error);
  }
}),
  router.post('/update', async (req, res) => {
    console.log('111111');
    try {
      const user = await userModel.updateTask(req.body);
      res.status(200).send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  }),
  router.get('/gettask', async (req, res) => {
    console.log('is hitting');
    try {
      const user = await userModel.getTask();
      res.status(200).send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  });
router.delete('/delete', async (req, res) => {
  try {
    const userDelete = await userModel.DeleteTask(req.body);
    res.status(200).send(userDelete);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
