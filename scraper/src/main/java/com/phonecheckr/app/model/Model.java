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
 * Entity class Model
 *
 * @author Gurdev S. Panue
 */
@Entity
@Table(name = "models")
public class Model implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private int id;

  @Column(name = "name")
  private String name;

  @Column(name = "colour_id")
  private int colourId;

  @Column(name = "storage_capacity_id")
  private int storageCapacityId;

  @ManyToOne
  @JoinColumn(name = "colour_id", insertable = false, updatable = false)
  private Colour colour;

  @ManyToOne
  @JoinColumn(name = "storage_capacity_id", insertable = false, updatable = false)
  private StorageCapacity storageCapacity;

  /**
   * Gets the id of this Model.
   *
   * @return this Model's id.
   */
  public int getId() {
    return id;
  }

  /**
   * Sets the id of this Model to the specified id.
   *
   * @param id this Model's new id.
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * Gets the name of this Model.
   *
   * @return this Model's name.
   */
  public String getName() {
    return name;
  }

  /**
   * Sets the name of this Model to the specified name.
   *
   * @param name this Model's new name.
   */
  public void setName(String name) {
    this.name = name;
  }

  /**
   * Gets the colour id of this Model.
   *
   * @return this Model's colour id.
   */
  public int getColourId() {
    return colourId;
  }

  /**
   * Sets the colour id of this Model to the specified colour id.
   *
   * @param colourId this Model's new colour id.
   */
  public void setColourId(int colourId) {
    this.colourId = colourId;
  }

  /**
   * Gets the storage capacity id of this Model.
   *
   * @return this Model's storage capacity id.
   */
  public int getStorageCapacityId() {
    return storageCapacityId;
  }

  /**
   * Sets the storage capacity id of this Model to the specified storage capacity id.
   *
   * @param storageCapacityId this Model's new storage capacity id.
   */
  public void setStorageCapacityId(int storageCapacityId) {
    this.storageCapacityId = storageCapacityId;
  }

  /**
   * Gets the colour of this Model.
   *
   * @return this Model's colour.
   */
  public Colour getColour() {
    return colour;
  }

  /**
   * Sets the colour of this Model to the specified colour.
   *
   * @param colour this Model's new colour.
   */
  public void setColour(Colour colour) {
    this.colour = colour;
  }

  /**
   * Gets the storage capacity of this Model.
   *
   * @return this Model's storage capacity.
   */
  public StorageCapacity getStorageCapacity() {
    return storageCapacity;
  }

  /**
   * Sets the storage capacity of this Model to the specified storage capacity.
   *
   * @param storageCapacity this Model's new storage capacity.
   */
  public void setStorageCapacity(StorageCapacity storageCapacity) {
    this.storageCapacity = storageCapacity;
  }

  /**
   * Returns a string representation of the object.
   *
   * @return a string representation of the object.
   */
  @Override
  public String toString() {
    return "Model {\n"
        + "\tid: " + getId() + ",\n"
        + "\tname: " + getName() + ",\n"
        + "\tcolour_id: " + getColourId() + ",\n"
        + "\tstorage_capacity_id: " + getStorageCapacityId() + "\n"
        + "}";
  }
}
