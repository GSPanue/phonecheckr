package com.phonecheckr.app.model;

import java.io.Serializable;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Entity class StorageCapacity
 *
 * @author Gurdev S. Panue
 */
@Entity
@Table(name = "storage_capacities")
public class StorageCapacity implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private int id;

  @Column(name = "size")
  private int size;

  /**
   * Gets the id of this StorageCapacity.
   *
   * @return this StorageCapacity's id.
   */
  public int getId() {
    return id;
  }

  /**
   * Sets the id of this StorageCapacity to the specified id.
   *
   * @param id this StorageCapacity's new id.
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * Gets the size of this StorageCapacity.
   *
   * @return this StorageCapacity's size.
   */
  public int getSize() {
    return size;
  }

  /**
   * Sets the size of this StorageCapacity to the specified size.
   *
   * @param size this StorageCapacity's new size.
   */
  public void setSize(int size) {
    this.size = size;
  }

  /**
   * Returns a string representation of the object.
   *
   * @return a string representation of the object.
   */
  @Override
  public String toString() {
    return "StorageCapacity {\n"
        + "\tid: " + getId() + ",\n"
        + "\tname: " + getSize() + "\n"
        + "}";
  }
}