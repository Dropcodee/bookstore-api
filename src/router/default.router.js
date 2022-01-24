import express from 'express';
// const { SendUserEmails } = require('../controllers/UserController')
const defaultRouter = express.Router();

defaultRouter.get('/', (req, res) => {
  res
    .status(200)
    .send({ message: 'Na wetin no concern you wey u wan dey do naw abi...' });
});

export default defaultRouter;
