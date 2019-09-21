package com.phonecheckr.app.dao;

import org.hibernate.Session;

import com.phonecheckr.app.util.Hibernate;

/**
 * Abstract class BaseDao
 *
 * @author Gurdev S. Panue
 */
abstract class BaseDao<E, S> {
  /**
   * Stores an entity.
   *
   * @param entity the entity.
   */
  public void save(E entity) {
    Session session = Hibernate.createSession();

    session.beginTransaction();
    session.save(entity);
    session.getTransaction().commit();
  }

  /**
   * Removes an entity.
   *
   * @param entity the entity.
   */
  public void remove(E entity) {
    Session session = Hibernate.createSession();

    session.beginTransaction();
    session.remove(entity);
    session.getTransaction().commit();
  }

  /**
   * Concrete method for finding an entity.
   *
   * @param entity the entity.
   *
   * @return an entity.
   */
  abstract E find(E entity);

  /**
   * Concrete method for finding an entity by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return an entity.
   */
  abstract E find(S key, S value);

  /**
   * Concrete method for finding or saving an entity.
   *
   * @param entity the entity.
   *
   * @return an entity.
   */
  abstract E findOrSave(E entity);
}
