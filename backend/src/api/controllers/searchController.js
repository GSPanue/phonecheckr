import Product from '@/database/models/Product';

const getSearch = (req, res) => {
  const { query: { query } } = req;

  Product.query()
    .joinEager({
      pages: true,
      brands: true,
      models: true
    })
    .where('brands.name', 'like', `%${query}%`)
    .orWhere('models.name', 'like', `%${query}%`)
    .omit([
      'id',
      'url_id',
      'page_id',
      'brand_id',
      'model_id',
      'supplier_id',
      'colour_id',
      'storage_capacity_id',
      'image',
      'description'
    ])
    .then((data) => (
      res.send({
        results: data
      })
    ));
};

export {
  getSearch
};
