package com.phonecheckr.app.dao;

import org.hibernate.Session;
import org.hibernate.query.Query;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.phonecheckr.app.util.Hibernate;
import com.phonecheckr.app.model.Colour;

/**
 * Dao class ColourDao
 *
 * @author Gurdev S. Panue
 */
public class ColourDao extends BaseDao<Colour, String> {
  /**
   * Finds a colour.
   *
   * @param colour the colour.
   *
   * @return the colour.
   */
  @Override
  public Colour find(Colour colour) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Colour> criteriaQuery = criteriaBuilder.createQuery(Colour.class);
        Root<Colour> root = criteriaQuery.from(Colour.class);

        Predicate[] predicates = new Predicate[]{
            criteriaBuilder.equal(root.get("name"), colour.getName())
        };

        criteriaQuery.select(root).where(predicates);

        Query<Colour> query = session.createQuery(criteriaQuery);
        Colour result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        session.getTransaction().rollback();

        System.out.println("Unable to find colour.");
        exception.printStackTrace();
      }
    }

    return colour;
  }

  /**
   * Finds a colour by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return the colour.
   */
  @Override
  public Colour find(String key, String value) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Colour> criteriaQuery = criteriaBuilder.createQuery(Colour.class);
        Root<Colour> root = criteriaQuery.from(Colour.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get(key), value));

        Query<Colour> query = session.createQuery(criteriaQuery);
        Colour result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        session.getTransaction().rollback();

        System.out.println("Unable to find colour.");
        exception.printStackTrace();
      }
    }

    return null;
  }

  /**
   * Finds or saves a colour.
   *
   * @param colour the colour.
   *
   * @return the colour.
   */
  @Override
  public Colour findOrSave(Colour colour) {
    colour.setId(find(colour).getId());

    final boolean HAS_NOT_FOUND_COLOUR = colour.getId() == 0;

    if (HAS_NOT_FOUND_COLOUR) {
      save(colour);
    }

    return  colour;
  }
}