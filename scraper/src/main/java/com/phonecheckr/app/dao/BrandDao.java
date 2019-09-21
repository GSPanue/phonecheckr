package com.phonecheckr.app.dao;

import org.hibernate.Session;
import org.hibernate.query.Query;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.phonecheckr.app.util.Hibernate;
import com.phonecheckr.app.model.Brand;

/**
 * Dao class BrandDao
 *
 * @author Gurdev S. Panue
 */
public class BrandDao extends BaseDao<Brand, String> {
  /**
   * Finds a brand.
   *
   * @param brand the brand.
   *
   * @return the brand.
   */
  @Override
  public Brand find(Brand brand) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Brand> criteriaQuery = criteriaBuilder.createQuery(Brand.class);
        Root<Brand> root = criteriaQuery.from(Brand.class);

        Predicate[] predicates = new Predicate[]{
            criteriaBuilder.equal(root.get("name"), brand.getName())
        };

        criteriaQuery.select(root).where(predicates);

        Query<Brand> query = session.createQuery(criteriaQuery);
        Brand result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        session.getTransaction().rollback();

        System.out.println("Unable to find brand.");
        exception.printStackTrace();
      }
    }

    return brand;
  }

  /**
   * Finds a brand by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return the brand.
   */
  @Override
  public Brand find(String key, String value) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Brand> criteriaQuery = criteriaBuilder.createQuery(Brand.class);
        Root<Brand> root = criteriaQuery.from(Brand.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get(key), value));

        Query<Brand> query = session.createQuery(criteriaQuery);
        Brand result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        session.getTransaction().rollback();

        System.out.println("Unable to find brand.");
        exception.printStackTrace();
      }
    }

    return null;
  }
}