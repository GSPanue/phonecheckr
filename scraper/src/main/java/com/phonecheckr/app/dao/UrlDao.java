package com.phonecheckr.app.dao;

import org.hibernate.Session;
import org.hibernate.query.Query;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.phonecheckr.app.util.Hibernate;
import com.phonecheckr.app.model.Url;

/**
 * Dao class UrlDao
 *
 * @author Gurdev S. Panue
 */
public class UrlDao extends BaseDao<Url, String> {
  /**
   * Finds a url.
   *
   * @param url the url.
   *
   * @return the url.
   */
  @Override
  public Url find(Url url) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Url> criteriaQuery = criteriaBuilder.createQuery(Url.class);
        Root<Url> root = criteriaQuery.from(Url.class);

        Predicate[] predicates = new Predicate[]{
            criteriaBuilder.equal(root.get("url"), url.getUrl())
        };

        criteriaQuery.select(root).where(predicates);

        Query<Url> query = session.createQuery(criteriaQuery);
        Url result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        session.getTransaction().rollback();

        System.out.println("Unable to find url.");
        exception.printStackTrace();
      }
    }

    return url;
  }

  /**
   * Finds a url by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return the url.
   */
  @Override
  public Url find(String key, String value) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Url> criteriaQuery = criteriaBuilder.createQuery(Url.class);
        Root<Url> root = criteriaQuery.from(Url.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get(key), value));

        Query<Url> query = session.createQuery(criteriaQuery);
        Url result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        session.getTransaction().rollback();

        System.out.println("Unable to find url.");
        exception.printStackTrace();
      }
    }

    return null;
  }
}