const {
  defineSchema,
  defineModel,
} = require('../mongo/utils');

const User = defineModel('User', defineSchema({
  email: String,
  password: String,
}));

const List = defineModel('List', defineSchema({
  user_id: String,
  title: String,
  date: Date
}))

module.exports = {
  User,
  List
}
