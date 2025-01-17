const authController = require(`./auth`);
const categoryController = require(`./category`);
const postController = require(`./post`);
const interactionsController = require(`./interactions`);
const notificationsController = require(`./notifications`);
const userController = require(`./user`);

module.exports = {
  authController,
  categoryController,
  postController,
  interactionsController,
  notificationsController,
  userController,
};
