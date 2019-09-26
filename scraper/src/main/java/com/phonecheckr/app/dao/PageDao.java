package com.phonecheckr.app.dao;

import org.hibernate.Session;
import org.hibernate.query.Query;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.phonecheckr.app.util.Hibernate;
import com.phonecheckr.app.model.Page;

/**
 * Dao class PageDao
 *
 * @author Gurdev S. Panue
 */
public class PageDao extends BaseDao<Page, String> {
  /**
   * Finds a page.
   *
   * @param page the page.
   *
   * @return the page.
   */
  @Override
  public Page find(Page page) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Page> criteriaQuery = criteriaBuilder.createQuery(Page.class);
        Root<Page> root = criteriaQuery.from(Page.class);

        Predicate[] predicates = new Predicate[]{
            criteriaBuilder.equal(root.get("name"), page.getName())
        };

        criteriaQuery.select(root).where(predicates);

        Query<Page> query = session.createQuery(criteriaQuery);
        Page result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        session.getTransaction().rollback();

        System.out.println("Unable to find page.");
        exception.printStackTrace();
      }
    }

    return page;
  }

  /**
   * Finds a page by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return the page.
   */
  @Override
  public Page find(String key, String value) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Page> criteriaQuery = criteriaBuilder.createQuery(Page.class);
        Root<Page> root = criteriaQuery.from(Page.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get(key), value));

        Query<Page> query = session.createQuery(criteriaQuery);
        Page result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        session.getTransaction().rollback();

        System.out.println("Unable to find page.");
        exception.printStackTrace();
      }
    }

    return null;
  }

  /**
   * Finds or saves a page.
   *
   * @param page the page.
   *
   * @return the page.
   */
  @Override
  public Page findOrSave(Page page) {
    page.setId(find(page).getId());

    final boolean HAS_NOT_FOUND_PAGE = page.getId() == 0;

    if (HAS_NOT_FOUND_PAGE) {
      save(page);
    }

    return page;
  }
}