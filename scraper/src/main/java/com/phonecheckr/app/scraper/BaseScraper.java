package com.phonecheckr.app.scraper;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.phonecheckr.app.dao.UrlDao;
import com.phonecheckr.app.model.Url;

/**
 * Abstract class BaseScraper
 *
 * @author Gurdev S. Panue
 */
abstract class BaseScraper {
  private String supplier;
  private String searchPage;
  private String productSelector;
  private String urlSelector;
  private String brandSelector;
  private String modelSelector;
  private String colourSelector;
  private String storageCapacitySelector;
  private String imageSelector;
  private String descriptionSelector;
  private String priceSelector;
  private String nextPageSelector;

  /**
   * Gets the supplier of this BaseScraper.
   *
   * @return this BaseScraper's supplier.
   */
  String getSupplier() {
    return supplier;
  }

  /**
   * Sets the supplier of this BaseScraper to the specified supplier.
   *
   * @param supplier this BaseScraper's new supplier.
   */
  void setSupplier(String supplier) {
    this.supplier = supplier;
  }

  /**
   * Gets the search page of this BaseScraper.
   *
   * @return this BaseScraper's search page.
   */
  String getSearchPage() {
    return searchPage;
  }

  /**
   * Sets the search page of this BaseScraper to the specified search page.
   *
   * @param searchPage this BaseScraper's new search page.
   */
  void setSearchPage(String searchPage) {
    this.searchPage = searchPage;
  }

  /**
   * Gets the product selector of this BaseScraper.
   *
   * @return this BaseScraper's product selector.
   */
  String getProductSelector() {
    return productSelector;
  }

  /**
   * Sets the product selector of this BaseScraper to the specified product selector.
   *
   * @param productSelector this BaseScraper's new product selector.
   */
  void setProductSelector(String productSelector) {
    this.productSelector = productSelector;
  }

  /**
   * Gets the url selector of this BaseScraper.
   *
   * @return this BaseScraper's url selector.
   */
  String getUrlSelector() {
    return urlSelector;
  }

  /**
   * Sets the url selector of this BaseScraper to the specified url selector.
   *
   * @param urlSelector this BaseScraper's new url selector.
   */
  void setUrlSelector(String urlSelector) {
    this.urlSelector = urlSelector;
  }

  /**
   * Gets the brand selector of this BaseScraper.
   *
   * @return this BaseScraper's brand selector.
   */
  String getBrandSelector() {
    return brandSelector;
  }

  /**
   * Sets the brand selector of this BaseScraper to the specified brand selector.
   *
   * @param brandSelector this BaseScraper's new brand selector.
   */
  void setBrandSelector(String brandSelector) {
    this.brandSelector = brandSelector;
  }

  /**
   * Gets the model selector of this BaseScraper.
   *
   * @return this BaseScraper's model selector.
   */
  String getModelSelector() {
    return modelSelector;
  }

  /**
   * Sets the model selector of this BaseScraper to the specified model selector.
   *
   * @param modelSelector this BaseScraper's new model selector.
   */
  void setModelSelector(String modelSelector) {
    this.modelSelector = modelSelector;
  }

  /**
   * Gets the colour selector of this BaseScraper.
   *
   * @return this BaseScraper's colour selector.
   */
  String getColourSelector() {
    return colourSelector;
  }

  /**
   * Sets the colour selector of this BaseScraper to the specified colour selector.
   *
   * @param colourSelector this BaseScraper's new colour selector.
   */
  void setColourSelector(String colourSelector) {
    this.colourSelector = colourSelector;
  }

  /**
   * Gets the storage capacity selector of this BaseScraper.
   *
   * @return this BaseScraper's storage capacity selector.
   */
  String getStorageCapacitySelector() {
    return storageCapacitySelector;
  }

  /**
   * Sets the storage capacity selector of this BaseScraper to the specified storage capacity selector.
   *
   * @param storageCapacitySelector this BaseScraper's new storage capacity selector.
   */
  void setStorageCapacitySelector(String storageCapacitySelector) {
    this.storageCapacitySelector = storageCapacitySelector;
  }

  /**
   * Gets the image selector of this BaseScraper.
   *
   * @return this BaseScraper's image selector.
   */
  String getImageSelector() {
    return imageSelector;
  }

  /**
   * Sets the image selector of this BaseScraper to the specified image selector.
   *
   * @param imageSelector this BaseScraper's new image selector.
   */
  void setImageSelector(String imageSelector) {
    this.imageSelector = imageSelector;
  }

  /**
   * Gets the description selector of this BaseScraper.
   *
   * @return this BaseScraper's description selector.
   */
  String getDescriptionSelector() {
    return descriptionSelector;
  }

  /**
   * Sets the description selector of this BaseScraper to the specified description selector.
   *
   * @param descriptionSelector this BaseScraper's new description selector.
   */
  void setDescriptionSelector(String descriptionSelector) {
    this.descriptionSelector = descriptionSelector;
  }

  /**
   * Gets the price selector of this BaseScraper.
   *
   * @return this BaseScraper's price selector.
   */
  String getPriceSelector() {
    return priceSelector;
  }

  /**
   * Sets the price selector of this BaseScraper to the specified price selector.
   *
   * @param priceSelector this BaseScraper's new price selector.
   */
  void setPriceSelector(String priceSelector) {
    this.priceSelector = priceSelector;
  }

  /**
   * Gets the next page selector of this BaseScraper.
   *
   * @return this BaseScraper's next page selector.
   */
  String getNextPageSelector() {
    return nextPageSelector;
  }

  /**
   * Sets the next page selector of this BaseScraper to the specified next page selector.
   *
   * @param nextPageSelector this BaseScraper's new next page selector.
   */
  void setNextPageSelector(String nextPageSelector) {
    this.nextPageSelector = nextPageSelector;
  }

  /**
   * Starts scraping the specified website.
   */
  public void start() {
    try {
      Document document = Jsoup.connect(getSearchPage()).get();
      boolean hasNextPage = true;

      while(hasNextPage) {
        Elements products = document.select(getProductSelector());

        for (Element product :  products) {
          final boolean IS_NOT_DUPLICATE = isNotDuplicate(product, getUrlSelector());

          if (IS_NOT_DUPLICATE) {
            final String supplier = getSupplier();
            final String url = getProductUrl(product);
            final String page = getProductPage(product);
            final String brand = getProductBrand(product);
            final String model = getProductModel(product);
            final String colour = getProductColour(product);
            final String storageCapacity = getProductStorageCapacity(product);
            final String description = getProductDescription(product);
            final String price = getProductPrice(product);
            final String image = getProductImage(product);

            /*
             * todo: Store data in the database.
             */
          }
        }

        final String nextPage = getNextPage(document);

        if (hasNextPage(nextPage)) {
          // Get next page
          document = Jsoup.connect(nextPage).get();
        }
        else {
          hasNextPage = false;
        }
      }
    }
    catch (Exception exception) {
      System.out.println("Could not connect.");
      exception.printStackTrace();
    }
  }

  /**
   * Concrete method for getting the product's url.
   *
   * @param product the product.
   *
   * @return the product's url.
   */
  abstract String getProductUrl(Element product);

  /**
   * Concrete method for getting the product's page name.
   *
   * @param product the product.
   *
   * @return the product's page name.
   */
  abstract String getProductPage(Element product);

  /**
   * Concrete method for getting the product's brand name.
   *
   * @param product the product.
   *
   * @return the product's brand name.
   */
  abstract String getProductBrand(Element product);

  /**
   * Concrete method for getting the product's model name.
   *
   * @param product the product.
   *
   * @return the product's model name.
   */
  abstract String getProductModel(Element product);

  /**
   * Concrete method for getting the product's colour.
   *
   * @param product the product.
   *
   * @return the product's colour.
   */
  abstract String getProductColour(Element product);

  /**
   * Concrete method for getting the product's storage capacity.
   *
   * @param product the product.
   *
   * @return the product's storage capacity.
   */
  abstract String getProductStorageCapacity(Element product);

  /**
   * Concrete method for getting the product's image.
   *
   * @param product the product.
   *
   * @return the product's image.
   */
  abstract String getProductImage(Element product);

  /**
   * Concrete method for getting the product's description.
   *
   * @param product the product.
   *
   * @return the product's description.
   */
  abstract String getProductDescription(Element product);

  /**
   * Concrete method for getting the product's price.
   *
   * @param product the product.
   *
   * @return the product's price.
   */
  abstract String getProductPrice(Element product);

  /**
   * Concrete method for getting the next page url.
   *
   * @param document the current page.
   *
   * @return the next page url.
   */
  abstract String getNextPage(Document document);

  /**
   * Finds a url.
   *
   * @param url the url.
   *
   * @return the url.
   */
  private Url findUrl(String url) {
    UrlDao urlDao = new UrlDao();

    return urlDao.find("url", url);
  }

  /**
   * Checks if a product is not a duplicate.
   *
   * @param product the product.
   * @param urlSelector - the url selector.
   *
   * @return if a product is not a duplicate.
   */
  private boolean isNotDuplicate(Element product, String urlSelector) {
    final String URL = product.select(urlSelector).attr("href");

    return findUrl(URL) == null;
  }

  /**
   * Checks if a next page exists.
   *
   * @param url the next page url.
   *
   * @return if a next page exists.
   */
  private boolean hasNextPage(String url) {
    return (url != null) && !(url.isEmpty());
  }

  /**
   * Returns a string representation of the object.
   *
   * @return a string representation of the object.
   */
  @Override
  public String toString() {
    return "Scraper {\n"
        + "\tsupplier: " + getSupplier() + ",\n"
        + "\tsearch_page: " + getSearchPage() + ",\n"
        + "\tproduct_selector: " + getProductSelector() + ",\n"
        + "\turl_selector: " + getUrlSelector() + ",\n"
        + "\tbrand_selector: " + getBrandSelector() + ",\n"
        + "\tmodel_selector: " + getModelSelector() + ",\n"
        + "\tcolour_selector: " + getColourSelector() + ",\n"
        + "\tstorage_capacity_selector: " + getStorageCapacitySelector() + ",\n"
        + "\timage_selector: " + getImageSelector() + ",\n"
        + "\tprice_selector: " + getPriceSelector() + ",\n"
        + "\tnext_page_selector: " + getNextPageSelector() + "\n"
        + "}";
  }
}
