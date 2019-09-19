package com.phonecheckr.app.dao;

import org.hibernate.Session;
import org.hibernate.query.Query;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.phonecheckr.app.util.Hibernate;
import com.phonecheckr.app.model.StorageCapacity;

/**
 * Dao class StorageCapacityDao
 *
 * @author Gurdev S. Panue
 */
public class StorageCapacityDao extends BaseDao<StorageCapacity, String> {
  /**
   * Finds a storage capacity.
   *
   * @param storageCapacity the storage capacity.
   *
   * @return the storage capacity.
   */
  @Override
  public StorageCapacity find(StorageCapacity storageCapacity) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<StorageCapacity> criteriaQuery = criteriaBuilder.createQuery(StorageCapacity.class);
        Root<StorageCapacity> root = criteriaQuery.from(StorageCapacity.class);

        Predicate[] predicates = new Predicate[]{
            criteriaBuilder.equal(root.get("size"), storageCapacity.getSize())
        };

        criteriaQuery.select(root).where(predicates);

        Query<StorageCapacity> query = session.createQuery(criteriaQuery);
        StorageCapacity result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        System.out.println("Unable to find storage capacity.");
        exception.printStackTrace();
      }
    }

    return null;
  }

  /**
   * Finds a storage capacity by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return the storage capacity.
   */
  @Override
  public StorageCapacity find(String key, String value) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<StorageCapacity> criteriaQuery = criteriaBuilder.createQuery(StorageCapacity.class);
        Root<StorageCapacity> root = criteriaQuery.from(StorageCapacity.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get(key), value));

        Query<StorageCapacity> query = session.createQuery(criteriaQuery);
        StorageCapacity result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        System.out.println("Unable to find storage capacity.");
        exception.printStackTrace();
      }
    }

    return null;
  }
}