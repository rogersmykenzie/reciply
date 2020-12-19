const mongoose = require('mongoose');
const handleOpen = () => {
  console.log('Established Atlas Connection');
};

const defineSchema = (schema) => mongoose.Schema(schema)

const defineModel = (name, schema, methods) => {
  if(methods) {
    Object.keys(methods).forEach(key => {
      schema.methods[key] = methods[key];
    })
  }
  return mongoose.model(name, schema);
}

module.exports = {
  handleOpen,
  defineSchema,
  defineModel,
}