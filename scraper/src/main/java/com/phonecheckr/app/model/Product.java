package com.phonecheckr.app.model;

import java.io.Serializable;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;

/**
 * Entity class Product
 *
 * @author Gurdev S. Panue
 */
@Entity
@Table(name = "products")
public class Product implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private int id;

  @Column(name = "url_id")
  private int urlId;

  @Column(name = "page_id")
  private int pageId;

  @Column(name = "brand_id")
  private int brandId;

  @Column(name = "model_id")
  private int modelId;

  @Column(name = "supplier_id")
  private int supplierId;

  @Column(name = "image")
  private String image;

  @Column(name = "description")
  private String description;

  @Column(name = "price")
  private double price;

  @ManyToOne
  @JoinColumn(name = "url_id", insertable = false, updatable = false)
  private Url url;

  @ManyToOne
  @JoinColumn(name = "page_id", insertable = false, updatable = false)
  private Page page;

  @ManyToOne
  @JoinColumn(name = "brand_id", insertable = false, updatable = false)
  private Brand brand;

  @ManyToOne
  @JoinColumn(name = "model_id", insertable = false, updatable = false)
  private Model model;

  @ManyToOne
  @JoinColumn(name = "supplier_id", insertable = false, updatable = false)
  private Supplier supplier;

  /**
   * Gets the id of this Product.
   *
   * @return this Product's id.
   */
  public int getId() {
    return id;
  }

  /**
   * Sets the id of this Product to the specified id.
   *
   * @param id this Product's new id.
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * Gets the url id of this Product.
   *
   * @return this Product's url id.
   */
  public int getUrlId() {
    return urlId;
  }

  /**
   * Sets the url id of this Product to the specified url id.
   *
   * @param urlId this Product's new url id.
   */
  public void setUrlId(int urlId) {
    this.urlId = urlId;
  }

  /**
   * Gets the page id of this Product.
   *
   * @return this Product's page id.
   */
  public int getPageId() {
    return pageId;
  }

  /**
   * Sets the page id of this Product to the specified page id.
   *
   * @param pageId this Product's new page id.
   */
  public void setPageId(int pageId) {
    this.pageId = pageId;
  }

  /**
   * Gets the brand id of this Product.
   *
   * @return this Product's brand id.
   */
  public int getBrandId() {
    return brandId;
  }

  /**
   * Sets the brand id of this Product to the specified brand id.
   *
   * @param brandId this Product's new brand id.
   */
  public void setBrandId(int brandId) {
    this.brandId = brandId;
  }

  /**
   * Gets the model id of this Product.
   *
   * @return this Product's new model id.
   */
  public int getModelId() {
    return modelId;
  }

  /**
   * Sets the model id of this Product to the specified model id.
   *
   * @param modelId this Product's new model id.
   */
  public void setModelId(int modelId) {
    this.modelId = modelId;
  }

  /**
   * Gets the supplier id of this Product.
   *
   * @return this Product's supplier id.
   */
  public int getSupplierId() {
    return supplierId;
  }

  /**
   * Sets the supplier id of this Product to the specified supplier id.
   *
   * @param supplierId this Product's new model id.
   */
  public void setSupplierId(int supplierId) {
    this.supplierId = supplierId;
  }

  /**
   * Gets the image of this Product.
   *
   * @return this Product's image.
   */
  public String getImage() {
    return image;
  }

  /**
   * Sets the image of this Product to the specified image.
   *
   * @param image this Product's new image.
   */
  public void setImage(String image) {
    this.image = image;
  }

  /**
   * Gets the description of this Product.
   *
   * @return this Product's image.
   */
  public String getDescription() {
    return description;
  }

  /**
   * Sets the description of this Product to the specified description.
   *
   * @param description this Product's new description.
   */
  public void setDescription(String description) {
    this.description = description;
  }

  /**
   * Gets the price of this Product.
   *
   * @return this Product's price.
   */
  public double getPrice() {
    return price;
  }

  /**
   * Sets the price of this Product to the specified price.
   *
   * @param price this Product's new price.
   */
  public void setPrice(double price) {
    this.price = price;
  }

  /**
   * Gets the url of this Product.
   *
   * @return this Product's url.
   */
  public Url getUrl() {
    return url;
  }

  /**
   * Sets the url of this Product to the specified url.
   *
   * @param url this Product's new url.
   */
  public void setUrl(Url url) {
    this.url = url;
  }

  /**
   * Gets the page of this Product.
   *
   * @return this Product's page.
   */
  public Page getPage() {
    return page;
  }

  /**
   * Sets the page of this Product to the specified page.
   *
   * @param page this Product's new page.
   */
  public void setPage(Page page) {
    this.page = page;
  }

  /**
   * Gets the brand of this Product.
   *
   * @return this Product's brand.
   */
  public Brand getBrand() {
    return brand;
  }

  /**
   * Sets the brand of this Product to the specified brand.
   *
   * @param brand this Product's new brand.
   */
  public void setBrand(Brand brand) {
    this.brand = brand;
  }

  /**
   * Gets the model of this Product.
   *
   * @return this Product's model.
   */
  public Model getModel() {
    return model;
  }

  /**
   * Sets the model of this Product to the specified model.
   *
   * @param model this Product's new model.
   */
  public void setModel(Model model) {
    this.model = model;
  }

  /**
   * Gets the supplier of this Product.
   *
   * @return this Product's supplier.
   */
  public Supplier getSupplier() {
    return supplier;
  }

  /**
   * Sets the supplier of this Product to the specified supplier.
   *
   * @param supplier this Product's new supplier.
   */
  public void setSupplier(Supplier supplier) {
    this.supplier = supplier;
  }

  /**
   * Returns a string representation of the object.
   *
   * @return a string representation of the object.
   */
  @Override
  public String toString() {
    return "Product {\n"
        + "\tid: " + getId() + ",\n"
        + "\turl_id: " + getUrlId() + ",\n"
        + "\tpage_id: " + getPageId() + ",\n"
        + "\tbrand_id: " + getBrandId() + ",\n"
        + "\tmodel_id: " + getModelId() + ",\n"
        + "\tsupplier_id: " + getSupplierId() + ",\n"
        + "\timage: " + getImage() + ",\n"
        + "\tdescription: " + getDescription() + ",\n"
        + "\tprice: " + getPrice() + "\n"
        + "}";
  }
}
