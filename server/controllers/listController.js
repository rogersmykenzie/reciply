const { List } = require('../mongo/models');

const createList = (req, res) => {
  const { user_id, title, date = new Date() } = req.body;
  const newList = new List({
    user_id,
    title,
    date
  });
  newList
    .save()
    .then((list) => {
      res.status(200).json(list);
    })
    .catch(e => {
      res.status(500).json({
        error: e,
        message: 'error creating list'
      });
    });
}

const getLists = (req, res) => {
  const { _id } = req.params;
  List
    .find({ user_id: _id })
    .then(response => res.status(200).json(response))
    .catch((e) => {
      res
        .status(500)
        .json({
          message: 'error searching lists',
          error: e
        })
    })
}

module.exports = {
  createList, 
  getLists,
};