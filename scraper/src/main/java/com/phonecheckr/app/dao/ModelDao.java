package com.phonecheckr.app.dao;

import org.hibernate.Session;
import org.hibernate.query.Query;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.phonecheckr.app.util.Hibernate;
import com.phonecheckr.app.model.Model;

/**
 * Dao class ModelDao
 *
 * @author Gurdev S. Panue
 */
public class ModelDao extends BaseDao<Model, String> {
  /**
   * Finds a model.
   *
   * @param model the model.
   *
   * @return the model.
   */
  @Override
  public Model find(Model model) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Model> criteriaQuery = criteriaBuilder.createQuery(Model.class);
        Root<Model> root = criteriaQuery.from(Model.class);

        Predicate[] predicates = new Predicate[]{
            criteriaBuilder.equal(root.get("name"), model.getName()),
            criteriaBuilder.equal(root.get("colourId"), model.getColourId()),
            criteriaBuilder.equal(root.get("storageCapacityId"), model.getStorageCapacityId())
        };

        criteriaQuery.select(root).where(predicates);

        Query<Model> query = session.createQuery(criteriaQuery);
        Model result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        session.getTransaction().rollback();

        System.out.println("Unable to find model.");
        exception.printStackTrace();
      }
    }

    return model;
  }

  /**
   * Finds a model by key and value.
   *
   * @param key the key.
   * @param value the value.
   *
   * @return the model.
   */
  @Override
  public Model find(String key, String value) {
    Session session = Hibernate.createSession();

    if (session != null) {
      try {
        session.beginTransaction();

        CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
        CriteriaQuery<Model> criteriaQuery = criteriaBuilder.createQuery(Model.class);
        Root<Model> root = criteriaQuery.from(Model.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get(key), value));

        Query<Model> query = session.createQuery(criteriaQuery);
        Model result = query.getSingleResult();

        session.getTransaction().commit();

        return result;
      }
      catch (Exception exception) {
        session.getTransaction().rollback();

        System.out.println("Unable to find model.");
        exception.printStackTrace();
      }
    }

    return null;
  }

  /**
   * Finds or saves a model.
   *
   * @param model the model.
   *
   * @return the model.
   */
  @Override
  public Model findOrSave(Model model) {
    model.setId(find(model).getId());

    final boolean HAS_NOT_FOUND_MODEL = model.getId() == 0;

    if (HAS_NOT_FOUND_MODEL) {
      save(model);
    }

    return  model;
  }
}