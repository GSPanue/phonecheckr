package com.phonecheckr.app.model;

import java.io.Serializable;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Entity class Supplier
 *
 * @author Gurdev S. Panue
 */
@Entity
@Table(name = "suppliers")
public class Supplier implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private int id;

  @Column(name = "name")
  private String name;

  /**
   * Gets the id of this Supplier.
   *
   * @return this Supplier's id.
   */
  public int getId() {
    return id;
  }

  /**
   * Sets the id of this Supplier to the specified id.
   *
   * @param id this Supplier's new id.
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * Gets the name of this Supplier.
   *
   * @return this Supplier's name.
   */
  public String getName() {
    return name;
  }

  /**
   * Sets the name of this Supplier to the specified name.
   *
   * @param name this Supplier's new name.
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
    return "Supplier {\n"
        + "\tid: " + getId() + ",\n"
        + "\tname: " + getName() + "\n"
        + "}";
  }
}
