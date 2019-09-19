package com.phonecheckr.app.model;

import java.io.Serializable;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Entity class URL
 *
 * @author Gurdev S. Panue
 */
@Entity
@Table(name = "urls")
public class Url implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private int id;

  @Column(name = "url")
  private String url;

  /**
   * Gets the id of this URL.
   *
   * @return this URL's id.
   */
  public int getId() {
    return id;
  }

  /**
   * Sets the id of this URL to the specified id.
   *
   * @param id this URL's new id.
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * Gets the url of this URL.
   *
   * @return this URL's url.
   */
  public String getUrl() {
    return url;
  }

  /**
   * Sets the url of this URL to the specified url.
   *
   * @param url this URL's new url.
   */
  public void setUrl(String url) {
    this.url = url;
  }

  /**
   * Returns a string representation of the object.
   *
   * @return a string representation of the object.
   */
  @Override
  public String toString() {
    return "URL {\n"
        + "\tid: " + getId() + ",\n"
        + "\turl: " + getUrl() + "\n"
        + "}";
  }
}
