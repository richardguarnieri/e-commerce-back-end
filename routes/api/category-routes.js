const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // including its associated Products
  try {
    const categories = await Category.findAll({
      include: Product,
    });
    res.status(200).json(categories)
  } catch (err) {
    res.status(500).json({
    })
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // including its associated Products
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id)
    return category 
    ? res.status(200).json(category)
    : res.status(500).json({
        success: false,
        data: "the provided 'id' doesn't exist" 
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
