const {
  defineSchema,
  defineModel,
} = require('../mongo/utils');

const User = defineModel('User', defineSchema({
  email: String,
  password: String,
}));

module.exports = {
  User,
}