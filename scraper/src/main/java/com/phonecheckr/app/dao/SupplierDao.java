package com.phonecheckr.app.dao;

import org.hibernate.Session;
import org.hibernate.query.Query;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.phonecheckr.app.util.Hibernate;
import com.phonecheckr.app.model.Supplier;

/**
 * Dao class SupplierDao
 *
 * @author Gurdev S. Panue
 */
public class SupplierDao extends BaseDao<Supplier, String> {
  /**
   * Finds a supplier.
   *
   * @param supplier the supplier.
   *
   * @return the supplier.
   */
  @Override
  public Supplier find(Supplier supplier) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Supplier> criteriaQuery = criteriaBuilder.createQuery(Supplier.class);
        Root<Supplier> root = criteriaQuery.from(Supplier.class);

        Predicate[] predicates = new Predicate[]{
            criteriaBuilder.equal(root.get("name"), supplier.getName())
        };

        criteriaQuery.select(root).where(predicates);

        Query<Supplier> query = session.createQuery(criteriaQuery);
        Supplier result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        session.getTransaction().rollback();

        System.out.println("Unable to find supplier.");
        exception.printStackTrace();
      }
    }

    return supplier;
  }

  /**
   * Finds a supplier by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return the supplier.
   */
  @Override
  public Supplier find(String key, String value) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Supplier> criteriaQuery = criteriaBuilder.createQuery(Supplier.class);
        Root<Supplier> root = criteriaQuery.from(Supplier.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get(key), value));

        Query<Supplier> query = session.createQuery(criteriaQuery);
        Supplier result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        session.getTransaction().rollback();

        System.out.println("Unable to find supplier.");
        exception.printStackTrace();
      }
    }

    return null;
  }

  /**
   * Finds or saves a supplier.
   *
   * @param supplier the supplier.
   *
   * @return the supplier.
   */
  @Override
  public Supplier findOrSave(Supplier supplier) {
    supplier.setId(find(supplier).getId());

    final boolean HAS_NOT_FOUND_SUPPLIER = supplier.getId() == 0;

    if (HAS_NOT_FOUND_SUPPLIER) {
      save(supplier);
    }

    return  supplier;
  }
}