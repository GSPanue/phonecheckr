package com.phonecheckr.app.model;

import java.io.Serializable;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Entity class Colour
 *
 * @author Gurdev S. Panue
 */
@Entity
@Table(name = "colours")
public class Colour implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private int id;

  @Column(name = "name")
  private String name;

  /**
   * Gets the id of this Colour.
   *
   * @return this Colour's id.
   */
  public int getId() {
    return id;
  }

  /**
   * Sets the id of this Colour to the specified id.
   *
   * @param id this Colour's new id.
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * Gets the name of this Colour.
   *
   * @return this Colour's name.
   */
  public String getName() {
    return name;
  }

  /**
   * Sets the name of this Colour to the specified name.
   *
   * @param name this Colour's new name.
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
    return "Colour {\n"
        + "\tid: " + getId() + ",\n"
        + "\tname: " + getName() + "\n"
        + "}";
  }
}