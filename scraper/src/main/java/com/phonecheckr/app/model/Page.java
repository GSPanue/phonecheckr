package com.phonecheckr.app.model;

import java.io.Serializable;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Entity class Page
 *
 * @author Gurdev S. Panue
 */
@Entity
@Table(name = "pages")
public class Page implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private int id;

  @Column(name = "name")
  private String name;

  /**
   * Gets the id of this Page.
   *
   * @return this Page's id.
   */
  public int getId() {
    return id;
  }

  /**
   * Sets the id of this Page to the specified id.
   *
   * @param id this Page's new id.
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * Gets the name of this Page.
   *
   * @return this Page's name.
   */
  public String getName() {
    return name;
  }

  /**
   * Sets the name of this Page to the specified name.
   *
   * @param name this Page's new name.
   */
  public void setName(String name) {
    this.name = name;
  }

  /**
   * Returns a string representation of the object.
   *
   * @return a string representation of the object.
   */
  @Override
  public String toString() {
    return "Page {\n"
        + "\tid: " + getId() + ",\n"
        + "\tname: " + getName() + "\n"
        + "}";
  }
}
