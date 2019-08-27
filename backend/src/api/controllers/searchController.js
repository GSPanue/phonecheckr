const getSearch = (req, res) => {
  /**
   * @todo Fetch data from database
   */
  res.send({
    results: [{
      name: 'iPhone 6s',
      price: 901.12,
      stores: 23
    }]
  });
};

export {
  getSearch
};
