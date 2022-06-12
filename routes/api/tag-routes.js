const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // including its associated Product data
  try {
    const tags = await Tag.findAll({
      include: Product,
    });
    res.status(200).json(tags)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // including its associated Product data
  try {
    const { id } = req.params;
    const tag = await Tag.findByPk(id, {
      include: Product
    });
    return tag 
    ? res.status(200).json(tag)
    : res.status(500).json({
        success: false,
        data: "the provided 'id' doesn't exist" 
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
