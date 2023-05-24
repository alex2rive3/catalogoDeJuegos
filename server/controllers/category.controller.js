const Category = require("../models/category.model")
exports.create = (req, res) => {
  const newCategory = new Category(req.body)
  newCategory
    .save()
    .then(() => {
      res.json({ msg: "Success!", data: newCategory })
    })
    .catch((err) => res.json(err))
}

exports.delete = async (req, res) => {
  try {
    const categoryDeleted = await Category.deleteOne({ _id: req.params.id })
    res.json(categoryDeleted)
  } catch (err) {
    res.status(400).json(err)
  }
}

exports.getAll = async (req, res) => {
  const allCategories = await Category.find({})
  res.json(allCategories)
}

