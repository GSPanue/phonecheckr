import Product from '@/database/models/Product';

const getProduct = (req, res) => {
  const { query: { id } } = req;

  Product.query()
    .joinEager({
      urls: true,
      pages: true,
      brands: true,
      models: {
        colours: true,
        storage_capacities: true
      },
      suppliers: true
    })
    .where('pages.name', id)
    .omit([
      'id',
      'url_id',
      'page_id',
      'brand_id',
      'model_id',
      'supplier_id',
      'colour_id',
      'storage_capacity_id',
      'pages'
    ])
    .orderBy('price')
    .then((data) => {
      const lowestPrice = data[0].price;
      const highestPrice = data[data.length - 1].price;

      const {
        description,
        image,
        brands: { name: brand },
        models: { name: model },
      } = data[0];

      const product = {
        name: `${brand} ${model}`,
        description,
        image,
        range: [lowestPrice, highestPrice],
        deals: {
          ...data
        }
      };

      res.send({
        product
      });
    });
};

export {
  getProduct
};
