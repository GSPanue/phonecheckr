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
   * @param e the entity.
   */
  public void save(E e) {
    Session session = Hibernate.createSession();

    session.beginTransaction();
    session.save(e);
    session.getTransaction().commit();
  }

  /**
   * Removes an entity.
   *
   * @param e the entity.
   */
  public void remove(E e) {
    Session session = Hibernate.createSession();

    session.beginTransaction();
    session.remove(e);
    session.getTransaction().commit();
  }

  /**
   * Concrete method for finding an entity.
   *
   * @param e the entity.
   *
   * @return an entity.
   */
  abstract E find(E e);

  /**
   * Concrete method for finding an entity by key and value.
   *
   * @param k the key.
   * @param v the value.
   *
   * @return an entity.
   */
  abstract E find(S k, S v);
}
