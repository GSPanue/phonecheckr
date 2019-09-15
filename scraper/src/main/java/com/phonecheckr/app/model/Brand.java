package com.phonecheckr.app.model;

import java.io.Serializable;

import javax.persistence.*;

/**
 * Entity class Brand
 *
 * @author Gurdev S. Panue
 */
@Entity
@Table(name="brands")
public class Brand implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private int id;

  @Column(name = "name")
  private String name;

  /**
   * Gets the id of this Brand.
   *
   * @return this Brand's id.
   */
  public int getId() {
    return id;
  }

  /**
   * Sets the id of this Brand to the specified id.
   *
   * @param id this Brand's new id.
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * Gets the name of this Brand.
   *
   * @return this Brand's name.
   */
  public String getName() {
    return name;
  }

  /**
   * Sets the name of this Brand to the specified name.
   * @param name this Brand's new name.
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
    return "Brand {\n"
        + "\tid: " + getId() + ",\n"
        + "\tname: " + name + "\n"
        + "}";
  }
}
