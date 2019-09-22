package com.phonecheckr.app.scraper;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 * Scraper class BuyMobilesScraper
 *
 * @author Gurdev S. Panue
 */
public class BuyMobilesScraper extends BaseScraper {
  /**
   * Gets a products page.
   *
   * @param url the url.
   *
   * @return the page.
   */
  private Document getPage(String url) {
    try {
      return Jsoup.connect(url).get();
    }
    catch (Exception exception) {
      System.out.println("Could not get page.");
      exception.printStackTrace();
    }

    return null;
  }

  /**
   * Gets the product's url.
   *
   * @param product the product.
   *
   * @return the product's url.
   */
  @Override
  String getProductUrl(Element product) {
    return product.select(getUrlSelector()).attr("href");
  }

  /**
   * Gets the product's page name.
   *
   * @param product the product.
   *
   * @return the product's page name.
   */
  @Override
  String getProductPage(Element product) {
    final String PRODUCT_URL = product.select(getUrlSelector()).attr("href");
    final Document PRODUCT_PAGE = getPage(PRODUCT_URL);

    if (PRODUCT_PAGE != null) {
      final String BRAND = PRODUCT_PAGE.select(getBrandSelector()).attr("content").trim();
      String model = PRODUCT_PAGE.select(getModelSelector()).text();

      // Remove storage capacity from string
      model = model.replaceAll("[0-9]+GB$", "");

      // Remove brand from string
      model = model.replaceAll("(?i)" + BRAND, "").trim();

      // Return page name
      return model.toLowerCase().replaceAll(" ", "-");
    }

    return null;
  }

  /**
   * Gets the product's brand name.
   *
   * @param product the product.
   *
   * @return the product's brand name.
   */
  @Override
  String getProductBrand(Element product) {
    final String PRODUCT_URL = product.select(getUrlSelector()).attr("href");
    final Document PRODUCT_PAGE = getPage(PRODUCT_URL);

    if (PRODUCT_PAGE != null) {
      // Return brand name
      return PRODUCT_PAGE.select(getBrandSelector()).attr("content").trim();
    }

    return null;
  }

  /**
   * Gets the product's model name.
   *
   * @param product the product.
   *
   * @return the product's model name.
   */
  @Override
  String getProductModel(Element product) {
    final String PRODUCT_URL = product.select(getUrlSelector()).attr("href");
    final Document PRODUCT_PAGE = getPage(PRODUCT_URL);

    if (PRODUCT_PAGE != null) {
      final String BRAND = PRODUCT_PAGE.select(getBrandSelector()).attr("content");
      String model = PRODUCT_PAGE.select(getModelSelector()).text();

      // Remove storage capacity from string
      model = model.replaceAll("[0-9]+GB$", "");

      // Return model name
      return model.replaceAll("(?i)" + BRAND, "").trim();
    }

    return null;
  }

  /**
   * Gets the product's colour.
   *
   * @param product the product.
   *
   * @return the product's colour.
   */
  @Override
  String getProductColour(Element product) {
    final String PRODUCT_URL = product.select(getUrlSelector()).attr("href");
    final Document PRODUCT_PAGE = getPage(PRODUCT_URL);

    if (PRODUCT_PAGE != null) {
      String text = PRODUCT_PAGE.select(getColourSelector()).first().text();

      // Return colour
      return text.replace("Colour: ", "").trim();
    }

    return null;
  }

  /**
   * Gets the product's storage capacity.
   *
   * @param product the product.
   *
   * @return the product's storage capacity.
   */
  @Override
  String getProductStorageCapacity(Element product) {
    final String PRODUCT_URL = product.select(getUrlSelector()).attr("href");
    final Document PRODUCT_PAGE = getPage(PRODUCT_URL);

    if (PRODUCT_PAGE != null) {
      String model = PRODUCT_PAGE.select(getModelSelector()).text();
      final boolean IS_IPHONE = model.toLowerCase().contains("iphone");

      if (IS_IPHONE) {
        // Get storage size from text and return it without `GB` in the string
        String[] text = model.split(" ");

        for (String string : text) {
          if (string.contains("GB")) {
            return string.replace("GB", "").trim();
          }
        }

        return null;
      }

      Elements elements = PRODUCT_PAGE.select(getStorageCapacitySelector());

      // Find storage specification
      for (Element element : elements) {
        final boolean CONTAINS_STORAGE_CAPACITY = element.select("span").text().contains("Internal Storage:");

        if (CONTAINS_STORAGE_CAPACITY) {
          // Remove `GB` from string and return storage capacity
          return element.select("span").last().text().replace("GB", "").trim();
        }
      }

      return null;
    }

    return null;
  }

  /**
   * Gets the product's image.
   *
   * @param product the product.
   *
   * @return the product's image.
   */
  @Override
  String getProductImage(Element product) {
    final String PRODUCT_URL = product.select(getUrlSelector()).attr("href");
    final Document PRODUCT_PAGE = getPage(PRODUCT_URL);

    if (PRODUCT_PAGE != null) {
      return "https://www.buymobiles.net" + PRODUCT_PAGE.select(getImageSelector()).attr("href");
    }

    return null;
  }

  /**
   * Gets the product's description.
   *
   * @param product the product.
   *
   * @return the product's description.
   */
  @Override
  String getProductDescription(Element product) {
    final String PRODUCT_URL = product.select(getUrlSelector()).attr("href");
    final Document PRODUCT_PAGE = getPage(PRODUCT_URL);

    if (PRODUCT_PAGE != null) {
      return PRODUCT_PAGE.select(getDescriptionSelector()).text().trim();
    }

    return null;
  }

  /**
   * Gets the product's price.
   *
   * @param product the product.
   *
   * @return the product's price.
   */
  @Override
  String getProductPrice(Element product) {
    final String PRODUCT_URL = product.select(getUrlSelector()).attr("href");
    final Document PRODUCT_PAGE = getPage(PRODUCT_URL);

    if (PRODUCT_PAGE != null) {
      String price = PRODUCT_PAGE.select(getPriceSelector()).text();

      return price.replace("£", "").trim();
    }

    return null;
  }

  /**
   * Gets the next page url.
   *
   * @param document the current page.
   *
   * @return the next page url.
   */
  @Override
  String getNextPage(Document document) {
    return null;
  }
}
