package com.phonecheckr.app.scraper;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Scraper class Scraper
 *
 * @author Gurdev S. Panue
 */
public class CurrysScraper extends BaseScraper {
  /**
   * Separates the model name from the model size and colour.
   *
   * @param model the scraped model information.
   *
   * @return the model information.
   */
  private List<String> getModelInformation(String model) {
    return new ArrayList<>(Arrays.asList(model.split("-")));
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
    List<String> model = getModelInformation(product.select(getModelSelector()).text());

    model = new ArrayList<>(Arrays.asList(model.get(0).split("&")));

    // Return page name
    String modelName = model.get(0).toLowerCase().replaceAll("(?i)SIM FREE", "");

    return modelName.trim().replaceAll(" ", "-");
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
    return product.select(getBrandSelector()).text();
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
    List<String> model = getModelInformation(product.select(getModelSelector()).text());

    model = new ArrayList<>(Arrays.asList(model.get(0).split("&")));

    // Return model name
    return model.get(0).replaceAll("(?i)SIM FREE", "").trim();
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
    List<String> model = getModelInformation(product.select(getColourSelector()).text());

    // Remove model name
    model.remove(0);

    // Split remaining string to obtain colour and storage size
    model = new ArrayList<>(Arrays.asList(model.get(0).split(",")));

    // Check if the first index is the storage capacity
    final boolean HAS_SPECIFIED_STORAGE_CAPACITY = model.get(0).toUpperCase().contains("GB");

    // Return colour
    return ((HAS_SPECIFIED_STORAGE_CAPACITY) ? model.get(1) : model.get(0)).trim();
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
    List<String> model = getModelInformation(product.select(getStorageCapacitySelector()).text());

    // Remove model name
    model.remove(0);

    // Split remaining string to obtain colour and storage size
    model = new ArrayList<>(Arrays.asList(model.get(0).split(",")));

    // Check if the first index is the storage capacity
    final boolean CONTAINS_STORAGE_CAPACITY = model.get(0).toUpperCase().contains("GB");

    // Return storage capacity
    return (CONTAINS_STORAGE_CAPACITY) ? model.get(0).replace("GB", "").trim() : null;
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
    final String productUrl = product.select(getUrlSelector()).attr("href");

    try {
      // Go to product page
      Document document = Jsoup.connect(productUrl).get();

      // Return product image
      return document.select(getImageSelector()).first().attr("href");
    }
    catch (Exception exception) {
      System.out.println("Could not get product image.");
      exception.printStackTrace();
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
    StringBuilder description = new StringBuilder();

    String delimiter = "";

    // Append each item in the list
    for (Element item : product.select(getDescriptionSelector())) {
      description.append(delimiter).append(item.text().trim());
      delimiter = ", ";
    }

    return description.toString();
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
    return product.select(getPriceSelector()).text().replace("£", "");
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
    return document.select(getNextPageSelector()).attr("href");
  }
}
